# AGENTS.md

## Setup commands

- Install deps: `bun install`
- Start dev server: `astro dev`
- Start dev server (production mode): `PROD=true dotenv -e .env -- astro dev`
- Build: `astro build`
- Preview: `astro preview`
- Format code: `prettier -w .`
- Update packages: `bun update --interactive`
- Reset local DB: `rm .astro/content.db`
- Pre-build assets: `bknd copy-assets --out public/bknd --clean`

## Testing instructions

- Run all tests: `bun test`
- Run single test file: `bun test <path-to-test-file>` (e.g., `bun test src/services/squarespace.test.ts`)
- Run tests in watch mode: `bun test --watch`
- Test framework: Bun test with mocks
- Test files location: `src/**/*.test.ts`

## Code style

- TypeScript strict mode (extends astro/tsconfigs/strict)
- Formatting: Prettier (2 spaces, 120 width, no trailing comma, with Astro and TailwindCSS plugins)
- Styling: Utility-first TailwindCSS (no @apply, v4.x)
- Components: Modular Astro components with clear separation
- Imports: Follow TypeScript/Astro conventions, path aliases (@/* for src/*)
- Naming: Descriptive, camelCase for variables/functions, PascalCase for components
- JSX: React JSX syntax (jsx: "react-jsx", jsxImportSource: "react")
- Commits: Conventional commits (type(scope): description)

## Project overview

This is a skateboard design and ordering web application built with Astro and Bknd.io. Users can customize skateboard designs, place orders, and integrate with payment processing and Squarespace.

## Project structure

- `src/components/`: Astro components
- `src/pages/`: File-based routing
- `src/layouts/`: Page layouts
- `src/actions/`: Server actions
- `src/services/`: Business logic (Squarespace API, Stripe, etc.)
- `src/utils/`: Utility functions
- `src/types/`: Type definitions
- `public/`: Static assets
- `bknd.config.ts`: Backend configuration (database schema, auth, media)

## Rules

- Enforce strict TypeScript for type safety
- Use Basecoat UI and TailwindCSS with utility-first approach
- Create modular, reusable Astro components
- Maintain clear separation of concerns
- Implement proper cache control headers
- Prioritize static generation and minimal JavaScript
- Use descriptive variable names and follow Astro's conventions
- Error handling: Graceful with appropriate logging
- Performance: Minimize client JS, static generation preferred
