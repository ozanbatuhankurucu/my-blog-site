---
title: 'Next.js Folder Structure (Part 1): Layouts for Small, Medium, and Large Projects'
date: '2026-07-02'
img: '/images/nextjs-folder-structure.png'
category: 'NextJS'
description: 'Part 1 of a practical guide to structuring Next.js (App Router) projects as they grow. Learn the core principles, the App Router special files, and concrete folder structures for small prototypes, medium SaaS apps, and large enterprise codebases.'
---

Folder structure is one of the most underrated parts of front-end architecture. It does not ship a single byte to the browser, yet it silently shapes how fast you can build features, how easy it is to onboard new developers, and how quickly bugs can be tracked down. In a Next.js application, where routing, server components, client components, and data fetching all live in the same tree, picking the right structure becomes even more important.

There is no universal "best" folder structure. The right answer depends on the size of the project, the size of the team, and how long the codebase is expected to live. In this article, we'll walk through how the folder structure of a Next.js (App Router) project should evolve from a small prototype to a large enterprise application, and what principles should guide every choice along the way.

> This is **Part 1** of a two-part series. Here we cover the principles and the concrete folder structures for each scale. [Part 2](/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling) continues where this leaves off, focusing on how to keep a large structure healthy: enforcing boundaries, organizing state, monorepos, naming conventions, pitfalls, and a migration path.

## Why Folder Structure Matters

Before jumping into examples, it's worth being explicit about what a good folder structure should give you:

- **Discoverability**: A new developer should be able to guess where a file lives without searching.
- **Locality of change**: Related code should sit close together so that one feature change touches one place.
- **Clear ownership**: Modules and features should map naturally to teams or domains.
- **Predictable scaling**: Adding the tenth feature shouldn't be harder than adding the second one.
- **Low coupling, high cohesion**: Files inside a folder should belong together; folders should depend on each other as little as possible.

If your current structure makes any of these properties hard, that's the signal to refactor — not the file count.

## Core Principles That Apply at Every Scale

These principles hold whether your project has 10 files or 10,000:

### 1. Colocation Beats Centralization

Put files where they are used. A component used by exactly one route should live next to that route, not in a global `components/` folder. Centralize only what is genuinely shared.

### 2. Feature-First, Not Type-First (Beyond a Certain Size)

In small projects, organizing by type (`components/`, `hooks/`, `utils/`) is fine. As the project grows, organizing by **feature** (`features/billing/`, `features/auth/`) scales much better, because most changes are scoped to a single feature.

### 3. Single Source of Truth

Avoid parallel implementations. One `Button`, one `useUser`, one `formatDate`. Duplicates are the fastest way to make a codebase incoherent.

### 4. Respect the Server/Client Boundary

In the App Router, Server Components and Client Components have very different capabilities. Make this boundary explicit: name client files clearly, keep `"use client"` at the top of components that genuinely need it, and don't leak browser-only code into server modules.

### 5. Don't Pre-Build the Cathedral

Start simple. Promote folders only when the pain of _not_ having them shows up. Adding structure too early creates empty buckets that confuse readers more than they help.

## The Building Blocks: App Router Special Files

Before talking about scale, you need to know the vocabulary the `app/` directory speaks. Next.js assigns special meaning to a small set of file names, and every one of them is scoped to the folder (route segment) it sits in. Understanding these is what lets you keep `app/` thin and predictable.

| File            | Purpose                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| `page.tsx`      | The unique UI of a route. A segment is only publicly routable if it has one.                           |
| `layout.tsx`    | Shared UI that wraps a segment and all its children; preserves state across navigation.                |
| `template.tsx`  | Like a layout, but re-mounts on every navigation (useful for enter animations).                        |
| `loading.tsx`   | Instant loading UI shown via a Suspense boundary while the segment streams.                            |
| `error.tsx`     | A Client Component error boundary for the segment and its children.                                    |
| `not-found.tsx` | UI rendered when `notFound()` is called or an unmatched URL is hit.                                    |
| `route.ts`      | A server-side API endpoint (Route Handler). Cannot coexist with `page.tsx` in the same segment.        |
| `default.tsx`   | Fallback UI for an unmatched parallel route slot.                                                      |
| `middleware.ts` | Runs at the edge before a request completes. Lives at the project root (or `src/`), not inside `app/`. |

The key mental model: **routing concerns belong in `app/`, and almost nothing else does.** A well-structured project uses `app/` to compose layouts, define `loading`/`error` boundaries, and wire pages to feature code — while the actual UI and logic live outside it. We'll lean on these files throughout the rest of the article.

## Small-Scale Next.js Project

**Use case**: personal blogs, landing pages, marketing sites, prototypes, hackathon projects.

At this scale you have a handful of routes, a small set of shared components, and maybe a couple of utilities. The default Next.js layout is more than enough.

```
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
├── lib/
│   └── posts.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

### What Lives Where

- `app/` — routes only. One folder per URL segment.
- `components/` — flat list of shared UI components.
- `lib/` — pure functions, data access (e.g. reading markdown files), formatting helpers.
- `public/` — static assets served as-is.
- `styles/` — global styles and Tailwind entry point.

### What to Avoid at This Scale

- Don't introduce `features/`, `domain/`, or `infrastructure/` folders yet. They'll be empty or near-empty and add noise.
- Don't split `components/` into `ui/` vs `shared/` vs `layout/` until you have at least a few dozen components.
- Don't add a state management library, a custom hooks folder, or a `services/` layer unless you have a real reason.

If the project never grows beyond this, this is the structure you should keep.

### Colocation in Practice

Even at the smallest scale, one habit pays off immediately: keep a component's related files next to it. Tests, stories, and styles for a component belong beside the component, not in a mirrored `__tests__/` tree on the other side of the repo.

```
components/
└── PostCard/
    ├── PostCard.tsx
    ├── PostCard.test.tsx
    ├── PostCard.stories.tsx
    └── index.ts
```

When you delete or move the component, everything about it moves as one unit. The `index.ts` re-exports the component so imports stay clean (`import { PostCard } from '@/components/PostCard'`). This "component-as-folder" pattern is the single most portable convention across all three scales.

## Medium-Scale Next.js Project

**Use case**: SaaS dashboards, multi-section marketing + product apps, internal tools, e-commerce sites.

Now you have authenticated areas, public marketing pages, a real API layer, forms with validation, and probably some shared design system primitives. The flat structure starts to creak. You'll typically introduce route groups, a richer `lib/`, and a clearer split between UI primitives and feature components.

```
my-app/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── blog/
│   │       └── page.tsx
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (app)/
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── _components/
│   │   │       └── DashboardStats.tsx
│   │   ├── settings/
│   │   │   ├── page.tsx
│   │   │   ├── actions.ts
│   │   │   └── _components/
│   │   │       └── ProfileForm.tsx
│   │   └── billing/
│   │       └── page.tsx
│   ├── api/
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts
│   ├── providers.tsx
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Card.tsx
│   └── shared/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
├── lib/
│   ├── api/
│   │   ├── client.ts
│   │   └── endpoints.ts
│   ├── hooks/
│   │   ├── useUser.ts
│   │   └── useDebounce.ts
│   ├── utils/
│   │   ├── format.ts
│   │   └── cn.ts
│   └── validation/
│       └── schemas.ts
├── types/
│   ├── api.ts
│   └── domain.ts
├── constants/
│   └── routes.ts
├── config/
│   └── site.ts
├── public/
├── styles/
└── ...
```

### Key Patterns to Notice

- **Route groups** (`(marketing)`, `(auth)`, `(app)`) let you share a layout across a section without affecting the URL. The public marketing site, the auth screens, and the authenticated product can each have their own root layout.
- **Private folders** prefixed with `_` (like `_components/`) are ignored by the router. This is the App Router-native way to colocate route-specific components without exposing them as routes.
- **`components/ui/` vs `components/shared/`** — `ui/` holds design-system primitives (buttons, inputs, modals); `shared/` holds composed, app-specific components (headers, sidebars).
- **`lib/` is split by responsibility** — API client, hooks, utilities, validation schemas. This avoids the dreaded "god file" `utils.ts` that ends up holding 40 unrelated functions.
- **`types/`, `constants/`, `config/`** become their own top-level folders once you have enough cross-cutting items to justify them.

### Server vs Client Components

At this scale, the server/client split becomes a real architectural concern. A few rules that work well:

- Default to Server Components. Add `"use client"` only when you need state, effects, or browser APIs.
- Keep Client Components small and leaf-like. Wrap them around the interactive part, not the whole page.
- Put data fetching as close to the route as possible (in the page or layout Server Component), then pass plain data down to Client Components.
- Avoid importing server-only modules (database clients, Node APIs) from Client Components. A `server-only` import at the top of those modules helps catch leaks.

The `server-only` package turns an accidental import into a build-time error instead of a runtime security leak:

```typescript
// lib/api/users.ts
import 'server-only'

import { db } from '@/lib/db'

export async function getUserById(id: string) {
  return db.user.findUnique({ where: { id } })
}
```

If any Client Component ever imports this file, the build fails. There is a matching `client-only` package for the reverse case.

### Where Data Fetching and Mutations Live

The App Router gives you two first-class ways to talk to your backend, and each has a natural home:

- **Reads** happen in Server Components. Put the actual query logic in a data-access module (`lib/api/` at this scale, or the feature's `api/` folder at large scale) and call it from the page. Keep `fetch`/ORM calls out of components so they stay testable and cacheable.
- **Writes** happen in Server Actions. Colocate them in an `actions.ts` file next to the route that uses them, or inside the owning feature.

```typescript
// app/(app)/settings/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { updateProfileSchema } from '@/lib/validation/schemas'
import { updateProfile } from '@/lib/api/users'

export async function saveProfile(formData: FormData) {
  const data = updateProfileSchema.parse(Object.fromEntries(formData))
  await updateProfile(data)
  revalidatePath('/settings')
}
```

The rule of thumb: a component should call a well-named function (`getUserById`, `saveProfile`), never a raw `fetch` or SQL string. That one boundary keeps your data layer swappable and your components dumb.

## Large-Scale Next.js Project

**Use case**: enterprise applications, multi-team products, long-lived platforms, apps with many bounded contexts (billing, identity, search, reporting, admin, etc.).

At this size, type-based folders stop scaling. The codebase is too big for everyone to know everything, so the structure must reflect **business domains** rather than technical layers at the top level. You'll typically adopt a **feature-based** organization, often combined with a **layered** approach inside each feature.

```
my-app/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── (auth)/
│   │   ├── (app)/
│   │   │   ├── layout.tsx
│   │   │   ├── @sidebar/
│   │   │   │   └── default.tsx
│   │   │   ├── @modal/
│   │   │   │   └── default.tsx
│   │   │   ├── billing/
│   │   │   │   ├── page.tsx
│   │   │   │   └── invoices/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [id]/
│   │   │   │           └── page.tsx
│   │   │   └── reporting/
│   │   │       └── page.tsx
│   │   └── api/
│   ├── features/
│   │   ├── billing/
│   │   │   ├── components/
│   │   │   │   ├── InvoiceTable.tsx
│   │   │   │   └── PlanCard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useInvoices.ts
│   │   │   ├── api/
│   │   │   │   └── invoices.ts
│   │   │   ├── domain/
│   │   │   │   ├── types.ts
│   │   │   │   └── pricing.ts
│   │   │   ├── utils/
│   │   │   │   └── formatAmount.ts
│   │   │   ├── tests/
│   │   │   │   └── pricing.test.ts
│   │   │   └── index.ts
│   │   ├── auth/
│   │   ├── reporting/
│   │   ├── search/
│   │   └── admin/
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── hooks/
│   │   │   └── useMediaQuery.ts
│   │   ├── utils/
│   │   │   └── cn.ts
│   │   └── types/
│   │       └── common.ts
│   ├── infrastructure/
│   │   ├── http/
│   │   │   └── client.ts
│   │   ├── auth/
│   │   │   └── session.ts
│   │   ├── analytics/
│   │   │   └── tracker.ts
│   │   └── logging/
│   │       └── logger.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── site.ts
│   │   └── feature-flags.ts
│   └── styles/
├── public/
├── tests/
│   └── e2e/
└── ...
```

### A Layered View Inside Each Feature

A feature folder is essentially a small application of its own. A useful mental model is to think of it in four layers:

- **Presentation** — components, pages, and UI logic (`components/`).
- **Application** — hooks, view models, and use-case orchestration (`hooks/`).
- **Domain** — types, business rules, pure logic (`domain/`).
- **Infrastructure** — API clients and adapters for that feature (`api/`).

The important rule is the **direction of dependencies**: presentation depends on application, application depends on domain, and infrastructure plugs in at the edges. Domain code should never import from React, Next.js, or HTTP clients. This makes the core of each feature easy to test and easy to move.

### Route Groups, Parallel Routes, and Intercepting Routes

The App Router gives you several routing primitives that pay off at scale:

- **Route groups** (`(app)`, `(marketing)`) — share layouts without affecting URLs.
- **Parallel routes** (`@sidebar`, `@modal`) — render multiple independent slots inside a single layout. Useful for dashboards with persistent sidebars and global modals.
- **Intercepting routes** (`(.)photos/[id]`) — show a route inside another route's layout (for example, opening a detail view as a modal over a list).

Use these to keep `app/` thin: it should mostly orchestrate layouts and pages, while the real work lives inside `features/`.

### Shared Code: `shared/` vs `features/`

A common mistake is to keep growing a single `components/` folder until it has hundreds of files. At large scale, split it explicitly:

- `shared/ui/` — design-system primitives used by many features.
- `shared/hooks/`, `shared/utils/`, `shared/types/` — generic, feature-agnostic helpers.
- `features/<feature>/` — anything specific to a business domain.

If a piece of code is only used by one feature, it does not belong in `shared/`. Promote things to `shared/` only when at least two features need them.

## Continued in Part 2

You now have the structural blueprint for every scale: the principles, the App Router special files, and concrete folder layouts for small, medium, and large projects. But defining a large structure is the easy part — the hard part is keeping it healthy as multiple people and teams work in it every day.

That is exactly what the next article covers. In **[Part 2: Enforcing Boundaries, State, and Scaling](/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling)** we continue from here with:

- Giving each feature a public API so its internals stay private.
- Path aliases and lint rules that turn your architecture into enforceable boundaries.
- Where state management and providers belong.
- Monorepo considerations for multi-app products.
- Naming conventions and the `src/` directory decision.
- Common pitfalls, a decision checklist, and a concrete migration path between scales.

Read on in [Part 2](/posts/nextjs-folder-structure-enforcing-boundaries-and-scaling).
