# Blog Redesign Report

**Project:** Ozan Batuhan Kurucu - Personal Blog  
**Date:** January 2026  
**Author:** AI Assistant (Claude)

---

## 📋 Summary

This report details all changes made during the comprehensive redesign of the personal blog website. The design philosophy adopted **"dark-first"** (dark theme priority), **"monospace-accent"** (monospace font emphasis), and **"drawer"** interaction model.

---

## 🎨 Design System

### 1. Color System (Color Tokens)

Semantic color variables defined in `styles/globals.css`:

| Category | Variable | Value | Description |
|----------|----------|-------|-------------|
| **Background** | `--bg-base` | `#0a0a0b` | Base background |
| | `--bg-elevated` | `#141415` | Elevated surfaces |
| | `--bg-surface` | `#1c1c1e` | Card surfaces |
| | `--bg-hover` | `#252527` | Hover state |
| **Text** | `--text-primary` | `#fafafa` | Primary text |
| | `--text-secondary` | `#a1a1a6` | Secondary text |
| | `--text-muted` | `#6b6b70` | Muted text |
| **Accent** | `--accent` | `#f59e0b` | Primary accent (amber) |
| | `--accent-hover` | `#fbbf24` | Hover accent |
| | `--accent-muted` | `rgba(245, 158, 11, 0.15)` | Muted accent |
| **Border** | `--border-subtle` | `#2a2a2d` | Subtle border |
| | `--border-default` | `#3a3a3d` | Default border |
| **Semantic** | `--success` | `#22c55e` | Success (green) |
| | `--warning` | `#eab308` | Warning (yellow) |
| | `--error` | `#ef4444` | Error (red) |

### 2. Typography Scale

| Variable | Value | Usage |
|----------|-------|-------|
| `--text-xs` | `0.75rem` | Small labels |
| `--text-sm` | `0.875rem` | Meta information |
| `--text-base` | `1rem` | Body text |
| `--text-lg` | `1.125rem` | Large body |
| `--text-xl` | `1.25rem` | Small headings |
| `--text-2xl` | `1.5rem` | Medium headings |
| `--text-3xl` | `1.875rem` | Large headings |
| `--text-4xl` | `2.25rem` | Page titles |

**Font Families:**
- **Headings:** JetBrains Mono (monospace)
- **Body:** Geist (sans-serif)

### 3. Spacing Scale (4px base)

| Variable | Value |
|----------|-------|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `0.75rem` (12px) |
| `--space-4` | `1rem` (16px) |
| `--space-6` | `1.5rem` (24px) |
| `--space-8` | `2rem` (32px) |
| `--space-12` | `3rem` (48px) |
| `--space-16` | `4rem` (64px) |
| `--space-24` | `6rem` (96px) |

### 4. Motion Guidelines

| Variable | Value | Usage |
|----------|-------|-------|
| `--duration-fast` | `100ms` | Quick transitions |
| `--duration-base` | `150ms` | Standard transitions |
| `--duration-slow` | `250ms` | Slow animations |
| `--ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Exit easing |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Enter-exit easing |

---

## 🧩 Component Changes

### 1. Button Component (New)

**File:** `components/Button.tsx`

**Features:**
- **Variants:** `primary`, `ghost`
- **Sizes:** `sm`, `md`, `lg`
- **States:** default, hover, focus, active, disabled

```tsx
<Button variant="primary" size="md">Button Text</Button>
<Button variant="ghost" size="sm">Ghost Button</Button>
```

### 2. Tag Component (New)

**File:** `components/Tag.tsx`

**Features:**
- **Variants:** `default`, `outline`, `status`
- **Sizes:** `sm`, `md`
- **Status Colors:** `success`, `warning`, `error`, `info`

```tsx
<Tag variant="default" size="sm">ReactJS</Tag>
<Tag variant="status" status="success" size="sm">Completed</Tag>
```

### 3. Drawer Component (New)

**File:** `components/Drawer.tsx`

**Features:**
- Slides in from the right
- Renders outside DOM via `createPortal`
- ESC key to close
- Overlay click to close
- Focus management
- Body scroll lock

**Usage:**
```tsx
<Drawer isOpen={isOpen} onClose={handleClose} title="Title" width="480px">
  Content
</Drawer>
```

### 4. ArticleCard Component (Updated)

**File:** `components/ArticleCard.tsx`

**Changes:**
- Dark theme colors applied
- Tag component integrated for category labels
- Hover animations added
- Reading time and date metadata formatted

### 5. ProjectCard Component (Rewritten)

**File:** `components/ProjectCard.tsx`

**Changes:**
- Completely new component replacing old `Project.tsx`
- Tag component usage for status badges
- Tech stack labels
- Clickable card structure (opens drawer)
- Consistent content alignment

### 6. Header Component (Updated)

**File:** `components/Header.tsx`

**Changes:**
- Minimal design
- `ozan.dev` text logo
- Dark theme colors
- Mobile menu animations
- Button component for Resume

### 7. Footer Component (Updated)

**File:** `components/Footer.tsx`

**Changes:**
- Category links removed
- Simplified navigation
- Social media icons (react-icons/lu)
- Copyright and "Built with" info
- `pt-12 pb-12 mt-8` padding fix

### 8. Hero Component (Rewritten)

**File:** `components/Hero.tsx`

**Changes:**
- Large illustration removed
- Typography-focused minimal design
- Name, title, and short description
- CTA buttons (View Projects, About Me)

---

## 📄 Page Changes

### 1. Home Page (`app/page.tsx`)

**Changes:**
- New Hero component integration
- "Featured Article" section completely removed
- "Latest Posts" grid layout (3 columns)
- "All Posts" section with category filter
- `HomeContent` client component (for filtering)

### 2. Projects Page (`app/projects/page.tsx`)

**Changes:**
- Page title and description
- "In Progress" and "Completed" sections
- ProjectCard grid layout
- Drawer for viewing project details
- `ProjectsContent` client component

### 3. About Me Page (`app/aboutMe/page.tsx`)

**Changes:**
- Hero section with photo
- Updated introduction text
- **Now** section (current activities)
- **Philosophy** section
- **Experience & Education** timeline:
  - Arena (2022 - Present) - Frontend Engineer
  - Bangkok Business Trip (2024)
  - OBSS (2021 - 2022) - Mobile Application Developer
  - PurpleBox, Inc. (2020 - 2021) - Frontend Developer
  - Ege University (2017 - 2021) - B.Sc. Computer Engineering
- **Moments** photo gallery
- Sidebar: Stack, AI Tools, Connect, Outside Work

### 4. Blog Post Page (`app/posts/[slug]/page.tsx`)

**Changes:**
- Category tag (Tag component)
- Date and reading time format
- "Back to posts" navigation links
- `prose-custom` class for content styles

---

## 🐛 Bug Fixes

### 1. Drawer Hydration Error

**Problem:** `createPortal` usage caused errors during server-side rendering.

**Solution:** Client-side mount with `mounted` state:
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => { setMounted(true) }, [])
if (!mounted) return null
```

### 2. Footer Padding Issue

**Problem:** `py-12` class wasn't working on container div.

**Solution:** Padding moved directly to `<footer>` element:
```tsx
<footer className="... pt-12 pb-12 mt-8">
```

### 3. "Featured Article" Category Removal

**Problem:** "Featured Article" category was no longer in use.

**Solution:**
- `components/types.ts` - Removed from CategoryType
- Related markdown files updated:
  - `chatgpt-canvas.md` → "Artificial Intelligence"
  - `how-much-computer-science-do-frontend-developers-really-need.md` → "Self-improvement"
  - `how-to-learn-software-development-in-2025.md` → "Self-improvement"
  - `react-19-2-features-guide.md` → "ReactJS"

### 4. next.config.js Warning

**Problem:** `experimental.appDir` deprecated warning.

**Solution:** Option removed (default in Next.js 13+).

---

## 📁 File Structure Changes

### Newly Added Files

```
lib/
└── constants.ts        (Centralized constants)

components/
├── Button.tsx          (New)
├── Tag.tsx             (New)
├── Drawer.tsx          (New)
├── ProjectCard.tsx     (New - replaces Project.tsx)
├── HomeContent.tsx     (New - client component)
├── ProjectsContent.tsx (New - client component)
└── index.ts            (Barrel exports)
```

### Updated Files

```
styles/
└── globals.css         (Design tokens + base styles)

tailwind.config.js      (Color, font, animation extensions)

app/
├── layout.tsx          (Font imports)
├── page.tsx            (Home page restructure)
├── projects/page.tsx   (Projects page)
├── projects.ts         (Cleaned up, uses centralized types)
├── aboutMe/page.tsx    (About me page)
└── posts/[slug]/page.tsx (Blog post)

components/
├── Header.tsx          (Minimal header, uses constants)
├── Footer.tsx          (Simplified footer, uses constants)
├── Hero.tsx            (Typography-focused hero)
├── ArticleCard.tsx     (Dark theme cards, uses types)
├── ProjectCard.tsx     (Uses centralized types)
├── Tag.tsx             (Uses centralized types)
├── Button.tsx          (Uses centralized types)
├── types.ts            (Centralized TypeScript types)
└── utils.ts            (No changes)

posts/
├── chatgpt-canvas.md                                    (Category update)
├── how-much-computer-science-do-frontend-developers-really-need.md
├── how-to-learn-software-development-in-2025.md
└── react-19-2-features-guide.md
```

---

## 🔄 Code Refactoring

### Centralized Constants (`lib/constants.ts`)

- `NAV_LINKS` - Navigation links used in Header and Footer
- `SOCIAL_LINKS` - Social media links
- `RESUME_URL` - CV download link
- `SITE_CONFIG` - Site metadata (name, title, company, logo, description)
- `TECH_STACK` and `AI_TOOLS` - For About page

### Centralized Types (`components/types.ts`)

- `CategoryType` - Blog post categories
- `PostMetadata` - Blog post frontmatter
- `ProjectStatus`, `ProjectFeature`, `Project` - Project types
- `TimelineItem` - About page timeline
- `TagVariant`, `TagStatus`, `TagSize` - Tag component types
- `ButtonVariant`, `ButtonSize` - Button component types

### Barrel Exports (`components/index.ts`)

Clean imports with single entry point:
```typescript
import { Button, Tag, ArticleCard } from '../components'
```

---

## 🎯 Design Decisions and Rationale

| Decision | Rationale |
|----------|-----------|
| **Dark-first theme** | Technical/engineer aesthetic, reduces eye strain |
| **JetBrains Mono headings** | Code editor feel, technical identity emphasis |
| **Amber accent color** | Warm contrast against dark background |
| **Drawer interaction** | View details without page navigation |
| **Grid card layout** | Scanability and visual balance |
| **Minimal hero** | Content-focused, non-distracting entry |
| **Timeline structure** | Chronological presentation of career journey |

---

## 📊 Technical Details

### Packages Used

- `react-icons/lu` - Lucide icons
- `@tailwindcss/typography` - Prose styles
- `@fontsource/geist-sans` - Geist font
- `@fontsource/jetbrains-mono` - JetBrains Mono font
- `classnames` (cx) - Conditional class merging
- `lodash` - Utility functions
- `moment` - Date formatting

### Tailwind Configuration

```javascript
// tailwind.config.js extensions
- Custom color palettes (CSS variable references)
- Font families (mono, sans)
- Font sizes
- Border radius values
- Transition durations and easing functions
- Keyframe animations (fadeIn, slideUp, slideInRight)
```

---

## ✅ Conclusion

This redesign project achieved:

1. **Consistent design system** created (tokens, components)
2. **Dark theme** provided a professional appearance
3. **Component library** expanded (Button, Tag, Drawer)
4. **Page structures** modernized
5. **User experience** improved (drawer, animations)
6. **Code quality** increased (reusable components, centralized types)
7. **Maintainability** improved (DRY principle, barrel exports)

All changes were implemented following design system principles, targeting minimum complexity and maximum consistency.

---

*This report was automatically generated by Cursor AI assistant.*
