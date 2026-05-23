# Portfolio v2

A personal portfolio monorepo built and maintained by **Shehzar Aurangzeb Abbasi** — Full Stack Developer.

This repository hosts both the public-facing portfolio website and the headless CMS that powers its content. Everything lives in a single pnpm workspace so the web app and the content studio can evolve together.

## Tech Stack

- **Monorepo / Tooling:** [pnpm workspaces](https://pnpm.io/workspaces), TypeScript, ESLint, Prettier, Husky, lint-staged, commitlint
- **Web (`apps/web`):** [Next.js 16](https://nextjs.org/), React 19, Tailwind CSS v4
- **Studio (`apps/studio`):** [Sanity v5](https://www.sanity.io/) (headless CMS)

## Repository Structure

```
Portfolio-v2/
├── apps/
│   ├── web/          # Next.js portfolio site (frontend)
│   └── studio/       # Sanity Studio (content management)
├── packages/         # Shared packages (reserved for future use)
├── commitlint.config.cjs
├── eslint.config.mjs
├── pnpm-workspace.yaml
└── package.json
```

### `apps/web`

The public portfolio website. Built with Next.js (App Router), React 19, and Tailwind CSS v4. It consumes content from the Sanity Studio.

### `apps/studio`

The Sanity Studio used to author and manage content (projects, experience, blog posts, etc.) that is consumed by the web app.

### `packages/`

Reserved for shared libraries (UI components, utilities, types) that may be extracted as the project grows.

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 9

### Install

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` into the appropriate app folders and fill in the required values (Sanity project ID, dataset, API tokens, etc.).

### Development

Run both apps in parallel:

```bash
pnpm dev
```

Or run them individually:

```bash
pnpm dev:web      # Next.js dev server
pnpm dev:studio   # Sanity Studio
```

### Build

```bash
pnpm build:web
pnpm build:studio
```

### Lint & Format

```bash
pnpm lint          # check
pnpm lint:fix      # auto-fix
pnpm format        # prettier write
pnpm format:check  # prettier check
```

## Conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) enforced via commitlint + Husky.
- **Pre-commit:** lint-staged runs ESLint and Prettier on staged files.
- **Code style:** ESLint + Prettier, configured at the root and inherited by each workspace.

## About Me

Hi, I'm **Shehzar Aurangzeb Abbasi** — a full stack developer who enjoys building thoughtful, performant web experiences end to end. This repo is my playground for shipping my own portfolio with the same standards I use in production.

- Portfolio: _coming soon_
- GitHub: [@Shehzer-Aurangzeb](https://github.com/Shehzer-Aurangzeb)

## License

This project is for personal use. All rights reserved © Shehzar Aurangzeb Abbasi.
