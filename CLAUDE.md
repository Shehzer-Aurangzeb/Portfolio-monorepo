# Project conventions — zoe-realty

These rules apply across the monorepo. Keep code consistent, clean, and scalable. When a rule conflicts with framework defaults, the rule wins.

---

## Comments

- No inline narrative comments explaining _what_ code does.
- Only add a comment when intent is non-obvious (e.g. "// debounce avoids triple-fetch on Safari focus restore") or when documenting a public surface (exported types, API boundaries).
- No JSDoc on internal one-component files. Use TypeScript types instead.

## Files

- **Filenames are `camelCase`**, including React components: `hero.tsx`, `heroCarousel.tsx`, `button.tsx`.
- File extension follows content: `.tsx` for JSX, `.ts` for pure logic.
- **One component per file.** A file that exports a component exports exactly one component.
- **No barrel exports.** No `index.ts` re-export files. Import the file you need directly: `import Hero from "@/components/sections/hero/hero"`.

## Components

- **Default export, function declaration only.** No `const X = () =>`, no named exports.
  ```tsx
  export default function Hero() { ... }
  ```
- Types/interfaces in the same file are named exports (`export type HeroProps = …`).
- Internal subcomponents (used only within their parent file, never exported) are allowed but should stay small. If they grow, move them to their own file.
- Server Components by default. Add `'use client'` only when the file actually needs browser APIs, state, or effects.

## Utilities

- **No utility functions inside component or page files.** Helpers live in `src/lib/` (or `src/utils/` for very small, framework-agnostic helpers).
- Utilities are named exports.
- Pure functions only — no side effects at module scope.

## Content / data

- Static content lives in `src/content/<section>.ts` as typed constants.
- Shapes must mirror the eventual Sanity schema so the data source can swap with no component changes.

## Structure

```
src/
  app/               # Next.js routes (App Router)
  components/
    ui/              # primitives (button, eyebrow, container, …)
    sections/<name>/ # page sections (hero, info, properties, …)
  content/           # typed static content, one file per section
  lib/               # framework-agnostic helpers (cn, formatters, …)
  utils/             # small one-purpose helpers (optional)
```

- New section → new folder under `sections/<name>/` with `<name>.tsx` as entry.
- New primitive → single file under `ui/<name>.tsx`.

## Styling

- Tailwind v4 only. Design tokens live in `globals.css` under `@theme`.
- Prefer token-driven utilities (`bg-brand-green`, `max-w-site`) over arbitrary values (`bg-[#113329]`, `max-w-[1320px]`).
- Use CSS-variable shorthand for theme vars: `px-(--site-gutter)`, not `px-[var(--site-gutter)]`.
- No inline `style` props except for dynamic values that can't be expressed as classes (e.g. computed gradients).

## Imports

- Use the `@/` alias for anything inside `src/`. No deep `../../../` relatives.
- Import order: node builtins → external packages → `@/` internal → relative → types.
- Type-only imports use `import type`.

## TypeScript

- `strict` + `noUncheckedIndexedAccess` are on. Guard array access (`if (!item) return null`).
- No `any`. Use `unknown` and narrow.
- Prefer `type` over `interface` for component props.

## Accessibility

- Every interactive element has a discernible label (`aria-label` for icon-only buttons).
- Respect `prefers-reduced-motion` for any animation longer than a hover transition.
- Use semantic elements (`<section>`, `<nav>`, `<main>`, `<dl>`) before adding ARIA.

## Git

- Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `style:`, `docs:`.
- Wrap multiline commit messages in single quotes to avoid shell quoting issues.

## Before committing

- `pnpm --filter web exec tsc --noEmit` → 0 errors.
- `pnpm --filter web lint` → 0 errors (warnings from `temp/` are tracked separately).
