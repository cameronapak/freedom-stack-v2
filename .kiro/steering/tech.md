# Technology Stack

## Core Framework

- **Astro** - Static site generator with server-side rendering
- **Alpine.js** + **Alpine AJAX** - Lightweight JavaScript framework for interactivity
- **TailwindCSS v4** - Utility-first CSS framework
- **Basecoat UI** - Component library (shadcn-ui alternative without React)

## Backend & Database

- **Bknd** - Lightweight, self-hostable backend (Supabase alternative)
- **libSQL** - Local SQLite-compatible database for development
- **Turso** - Recommended production database service

## Deployment

- **Netlify** - Primary deployment target (can host anywhere)
- **Node.js** - Runtime environment

## Development Tools

- **TypeScript** - Type safety and better developer experience
- **Prettier** - Code formatting with Astro and Tailwind plugins
- **Vite** - Build tool and development server

## Common Commands

### Development

```bash
npm run dev          # Start development server with asset copying
npm run build        # Build for production with asset copying
npm run preview      # Preview production build
```

### Database

```bash
npm run db:reset-local    # Reset local database
npx tsx node_modules/.bin/bknd user create    # Create admin user
```

### Code Quality

```bash
npm run format       # Format code with Prettier
```

## Key Dependencies

- `@astrojs/netlify` - Netlify adapter for Astro
- `@imacrayon/alpine-ajax` - AJAX functionality for Alpine.js
- `bknd` - Backend framework
- `alpinejs` - Frontend reactivity
- `basecoat-css` - UI component styles

## Configuration Files

- `astro.config.mjs` - Astro configuration with Netlify adapter
- `bknd.config.ts` - Backend configuration, schema, and auth setup
- `tsconfig.json` - TypeScript configuration with path aliases
- `.prettierrc` - Code formatting rules
