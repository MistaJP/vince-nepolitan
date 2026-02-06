# CLAUDE.md

## Project Overview

**vince-nepolitan** is a personal brand and portfolio website for Vince Nepolitan, a bestselling author and motivational speaker. It promotes his book "Renovate Me" and speaking services. The site is a statically exported Next.js application with no backend or API integrations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 18
- **Styling:** Tailwind CSS 3.3 + PostCSS + Autoprefixer
- **Animations:** CSS keyframes (Framer Motion and lucide-react are installed but currently unused)
- **Output:** Static HTML export (`output: 'export'` in next.config.mjs, builds to `dist/`)

## Project Structure

```
app/
  layout.tsx          # Root layout (nav + footer, wraps all pages)
  page.tsx            # Home page (/)
  globals.css         # Global styles + Tailwind directives
  about/
    page.tsx          # About page (/about)
  speaking/
    page.tsx          # Speaking/booking page (/speaking) — "use client"
public/
  vince.jpg           # Hero/profile image
  book-cover.jpg      # Book cover image
  animations.css      # CSS keyframe animations and utilities
tailwind.config.ts    # Tailwind config (custom gold palette, font)
tsconfig.json         # TypeScript config (strict, path alias @/*)
next.config.mjs       # Next.js config (static export to dist/)
postcss.config.mjs    # PostCSS config
package.json          # Dependencies and scripts
```

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (static export to dist/)
npm start        # Start production server
```

There is no linter, formatter, or test runner configured.

## Architecture & Routing

- Uses **Next.js App Router** with file-based routing (`app/` directory)
- Three routes: `/`, `/about`, `/speaking`
- Root layout (`app/layout.tsx`) provides the shared navigation bar and footer
- All pages are React Server Components except `app/speaking/page.tsx` which is a Client Component (`"use client"`) for form state handling
- No separate `components/` directory — all UI is inline within page files
- No global state management — only `useState` for the speaking page booking form

## Styling Conventions

- **Primary approach:** Tailwind CSS utility classes directly in JSX
- **Custom colors:** `gold-400` (#fbbf24), `gold-500` (#f59e0b), `gold-600` (#d97706) — defined in `tailwind.config.ts`
- **Custom font:** system-ui, -apple-system, sans-serif
- **Responsive:** Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- **Layout pattern:** Sections use `max-w-6xl mx-auto px-4` for consistent container width
- **Dark theme:** Black backgrounds with gold accent colors throughout
- **Global CSS:** `app/globals.css` for Tailwind directives and `.bg-black-primary`
- **Animations:** `public/animations.css` for keyframe animations (float, pulse, particles, smoke)
- **Navigation:** Glass morphism effect with `backdrop-blur-sm`

## Code Conventions

- **Components:** PascalCase function names, default exports
- **Files:** Next.js convention (`page.tsx`, `layout.tsx`)
- **Variables:** camelCase
- **Imports:** Next.js imports first (`Link`, `Metadata`), then React imports (`useState`)
- **TypeScript:** Strict mode enabled; use `Readonly<>` for component props, typed form events (`React.FormEvent`)
- **No prop interfaces:** Inline object types preferred
- **Metadata:** Use Next.js `Metadata` export for page metadata

## Path Alias

`@/*` maps to the project root (`./`). Use `@/app/...` or `@/public/...` style imports.

## Deployment

- Configured for **static HTML export** — no Node.js server required at runtime
- Images are unoptimized (required for static export)
- Output directory: `dist/`
- Deployable to any static hosting (Netlify, Vercel, GitHub Pages, S3, etc.)

## Key Notes for Development

- No `.gitignore` is configured — be mindful of committing `node_modules/` or `dist/`
- No tests exist — if adding tests, consider Vitest or Jest with React Testing Library
- No ESLint or Prettier configured — follow existing code style when making changes
- Framer Motion (`framer-motion`) and Lucide icons (`lucide-react`) are installed dependencies but not used in the current codebase; they are available if needed
- The Tailwind content scan covers `pages/`, `components/`, and `app/` directories
