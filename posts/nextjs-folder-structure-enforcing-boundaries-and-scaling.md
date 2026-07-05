---
title: 'Next.js Folder Structure (Part 2): Enforcing Boundaries, State, and Scaling'
date: '2026-07-03'
img: '/images/nextjs-folder-structure-part-2.png'
category: 'NextJS'
description: 'Part 2 of the Next.js folder structure guide. Once you have a feature-based structure, learn how to keep it healthy: feature public APIs, path aliases and enforced import boundaries, state and provider placement, monorepos, naming conventions, common pitfalls, and a migration path between scales.'
---

This is the **second part** of a two-part series on front-end architecture and Next.js folder structure. In [Part 1](/posts/nextjs-folder-structure-for-small-medium-large-projects) we covered the core principles, the App Router special files, and the concrete folder layouts for small, medium, and large projects — ending with a feature-based structure for large, multi-team applications.

Defining that structure is only half the job. A large folder tree that nobody enforces quietly rots: features start importing each other's internals, "global" state ends up scattered, and naming drifts until nothing is predictable anymore. This article picks up exactly where Part 1 left off and focuses on the practices that keep a large Next.js codebase healthy over time.

> If you haven't read it yet, start with [Next.js Folder Structure (Part 1): Layouts for Small, Medium, and Large Projects](/posts/nextjs-folder-structure-for-small-medium-large-projects). The examples below assume the feature-based structure introduced there.

## Give Each Feature a Public API

A feature folder without an explicit public API is just a namespace — nothing stops another feature from reaching deep into its internals and coupling to files that were meant to be private. The fix is a barrel `index.ts` that acts as the feature's front door:

```typescript
// features/billing/index.ts
export { InvoiceTable } from './components/InvoiceTable'
export { useInvoices } from './hooks/useInvoices'
export type { Invoice, Plan } from './domain/types'
// Note: api/, utils/, and other internals are intentionally NOT exported.
```

Now the rest of the app imports `from '@/features/billing'` and only sees what you chose to expose. You are free to refactor everything behind that barrel without breaking a single consumer. This is the same encapsulation idea a well-designed npm package uses, applied inside your own repo.

One caveat worth knowing: large barrel files can hurt tree-shaking and create accidental circular dependencies if overused. Keep barrels at the feature boundary (one per feature), not on every subfolder, and never import a feature's barrel from inside that same feature.

## Path Aliases and Enforced Boundaries

At large scale, relative imports like `../../../shared/ui/Button` become unreadable and break every time you move a file. Configure TypeScript path aliases once in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@features/*": ["./src/features/*"],
      "@shared/*": ["./src/shared/*"]
    }
  }
}
```

But aliases alone are just convenience. The real win is turning your architecture into rules a linter can enforce, so boundaries survive contact with a deadline. With ESLint's `no-restricted-imports` (or a tool like `dependency-cruiser`), you can make illegal dependencies fail CI:

```javascript
// eslint.config.js — forbid reaching into a feature's internals
'no-restricted-imports': ['error', {
  patterns: [{
    group: ['@features/*/*'],
    message: 'Import from a feature\'s public API (@features/x), not its internals.',
  }],
}]
```

Rules like "features may not import each other directly," "nothing may import from `app/`," and "`domain/` may not import React" are what keep a large codebase from quietly degrading into a big ball of mud. Structure that isn't enforced is just a suggestion.

## State Management and Providers

Global state is a classic source of folder-structure confusion. A few guidelines that scale well:

- **Server state** (data from your backend) is not "global state." Handle it with the App Router's caching and, on the client, a library like TanStack Query or SWR. Don't dump API data into a global store.
- **Genuinely global client state** (theme, current user, feature flags) belongs in providers. Colocate the provider with its logic (`shared/providers/ThemeProvider.tsx`) and compose them in a single `app/providers.tsx` Client Component that the root `layout.tsx` renders.
- **Feature-local state** stays inside the feature. A Zustand store used only by billing lives at `features/billing/store.ts`, not in a top-level `store/`.

```tsx
// app/providers.tsx
'use client'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  )
}
```

This keeps the root `layout.tsx` a Server Component while isolating all client-side context in one predictable place.

## Monorepo Considerations

For very large products, a single Next.js app eventually splits into multiple apps (web, admin, marketing site) that share design system, types, and clients. At that point, a monorepo (pnpm workspaces with Turborepo or Nx) is often the next step:

```
repo/
├── apps/
│   ├── web/        (Next.js)
│   ├── admin/      (Next.js)
│   └── marketing/  (Next.js)
├── packages/
│   ├── ui/             (design system)
│   ├── config/         (eslint, tsconfig, tailwind presets)
│   ├── api-client/
│   └── types/
└── turbo.json
```

You don't need a monorepo on day one — but if you find yourself copy-pasting components or types between projects, it's time.

## Naming Conventions and the `src/` Directory

Consistency matters more than the specific convention you pick — but pick one and encode it in a lint rule. A widely used, low-friction set of conventions:

| Kind                         | Convention              | Example                  |
| ---------------------------- | ----------------------- | ------------------------ |
| React components             | PascalCase              | `InvoiceTable.tsx`       |
| Hooks                        | camelCase, `use` prefix | `useInvoices.ts`         |
| Utilities / non-component TS | camelCase               | `formatAmount.ts`        |
| Route segment folders        | kebab-case              | `app/reset-password/`    |
| Types / interfaces           | PascalCase              | `type Invoice = { ... }` |
| Constants                    | UPPER_SNAKE_CASE        | `MAX_RETRY_COUNT`        |

Two more practical decisions:

- **Use the `src/` directory** for anything past the small scale. Moving `app/`, `features/`, and `shared/` under `src/` cleanly separates application code from config files (`next.config.js`, `tailwind.config.js`, `package.json`) that clutter the root. Next.js supports this out of the box.
- **Prefer named exports over default exports** for components and utilities. Named exports make renames safe, autocomplete reliable, and barrel files trivial. The one exception is where Next.js requires a default export: `page.tsx`, `layout.tsx`, and the other special files.

## Common Pitfalls

Regardless of size, the same mistakes show up again and again:

- **God folders**: `utils/`, `helpers/`, or `common/` that become a dumping ground. Break them up by purpose (`format/`, `dom/`, `string/`) or move things into the feature that owns them.
- **Deep nesting for no reason**: `components/feature/section/sub/widget/inner/`. If a path is five levels deep, the folders are doing the wrong job.
- **Mixing server and client logic**: importing a database client from a Client Component, or React hooks from a server utility. Make the boundary loud.
- **Circular dependencies between features**: feature A imports from feature B, which imports from feature A. Usually a sign that the shared part should be lifted into `shared/` or a new feature.
- **Inconsistent naming**: `userProfile.tsx`, `UserCard.tsx`, `user-settings.tsx` in the same folder. Pick one convention (PascalCase for components is the most common in React) and enforce it with lint rules.
- **Premature abstraction**: a `features/` folder with a single `home` feature is just noise. Wait until structure earns its place.

## A Simple Decision Checklist

Use this when you're deciding which structure your project needs today:

- **Small** — pick this if: one or two developers, fewer than ~20 routes, no real domain logic, lifetime measured in months.
- **Medium** — pick this if: a small team, multiple sections (marketing + auth + product), real forms and APIs, lifetime measured in years.
- **Large** — pick this if: multiple teams, multiple bounded contexts, more than a handful of long-lived business domains, or you already feel the pain of cross-cutting changes.

When in doubt, choose one size smaller than you think. It's much easier to promote a folder than to delete one.

### The Three Scales at a Glance

| Aspect              | Small              | Medium                           | Large                                              |
| ------------------- | ------------------ | -------------------------------- | -------------------------------------------------- |
| Top-level grouping  | By type            | By type, with route groups       | By feature (`features/`)                           |
| `src/` directory    | Optional           | Recommended                      | Yes                                                |
| Components          | Flat `components/` | `ui/` + `shared/`                | `shared/ui/` + per-feature `components/`           |
| Data / logic layer  | `lib/`             | `lib/` split by responsibility   | Per-feature `api/` + `domain/` + `infrastructure/` |
| Boundaries enforced | Not needed         | Path aliases                     | Path aliases + lint rules + feature public APIs    |
| State               | Local / URL        | Providers + server state library | Layered: server, global, and feature-local         |
| Team size           | 1–2                | Small single team                | Multiple teams                                     |

### Migrating Between Structures

You rarely rebuild from scratch — you evolve. The good news is that each step is additive, not a rewrite:

1. **Small to medium**: introduce `src/`, add route groups to `app/`, split `components/` into `ui/` and `shared/`, and break the single `lib/` into focused subfolders. No feature code has to move yet.
2. **Medium to large**: carve out `features/` one domain at a time. Move a feature's components, hooks, and API calls into `features/<name>/`, add an `index.ts` public API, update imports, then add a lint rule to lock the boundary. Migrate the noisiest, most-changed feature first — it delivers the most relief.

Do it incrementally, one feature per pull request, so the codebase is shippable at every step.

## Conclusion

Folder structure in Next.js is not about following a template — it's about matching the shape of your code to the shape of your product. In [Part 1](/posts/nextjs-folder-structure-for-small-medium-large-projects) we started with a flat layout for small projects, added route groups and a richer `lib/` for medium ones, and moved to a feature-based, layered architecture for large ones. In this part we saw what it takes to keep that large structure from decaying: explicit feature APIs, enforced import boundaries, deliberate state placement, and consistent conventions.

The same rules apply at every size: colocate what changes together, separate what changes independently, and never let structure get ahead of the actual code. A good folder structure should feel almost invisible — you open the project, and the next file you need to edit is exactly where you expected it to be.
