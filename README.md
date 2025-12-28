# Freedom Stack v2 (WIP)

> [!IMPORTANT]
> This project is still a work in progress. It's improving continuously and will be ready soon.
> Documentation for using this project is currently limited but will be expanded shortly.

## Criteria for Freedom Stack v2

1. Must feel elementary/vanilla to use and be easy to learn
2. Must be financially accessible to all, meaning it should at least be able to be hosted for free at base tier without having to add a credit card
3. Must be entirely self-hostable (if needed)
4. Must use well-maintained, actively developed packages to ensure long-term sustainability
5. Must be able to work well with AI code editor assistants

## Stack

- [Astro](https://astro.build)
- [Alpine.js](https://alpinejs.dev) + [Alpine AJAX](https://alpine-ajax.js.org/)
- [TailwindCSS v4](https://tailwindcss.com/) + [Basecoat UI](https://basecoatui.com/)
- [Bknd](https://bknd.io)
- [Netlify](https://www.netlify.com), or host anywhere

## Basecoat UI

_"All of the shadcn/ui magic, none of the React. A components library built with Tailwind CSS that works with any web stack. [basecoatui.com](https://basecoatui.com/)"_

[Basecoat is easy to theme.](https://basecoatui.com/installation/#install-theming)

In the Cursor chat window you can type `@basecoat-ui.mdc` and get AI assistance for your Basecoat UI CSS.

## Bknd

> _"Experience the power of a lightweight, feature-rich backend that seamlessly integrates into your framework of choice."_

Imagine having your own Supabase-like backend with auth, user management, media management, database management, etc., but you could host it anywhere you'd like? That's Bknd.

Since Bknd integrates into your framework of choice, it ships with Freedom Stack out of the box!

Here's the best explanation for the heart of [Bknd](https://docs.bknd.io/motivation) and why it's perfect for Freedom Stack.

### Database

Develop on a local libSQL database, included by default without needing to configure anything.

When ready for production, I recommend using a database from [Turso](https://tur.so/freedomstack).

## Install

Run the following command to install this stack on your machine, without the commit history of this repo.

```bash
npx degit https://github.com/cameronapak/freedom-stack-v2 my-project
```

## Setup

Using Node Version Manager?

```bash
nvm use
```

Install the packages.

```bash
bun install
```

### Create User

Create your first user (this runs bknd with our `bknd.config.ts` file):

```bash
npx tsx node_modules/.bin/bknd user create
```

Now, let's run the app!

```bash
bun dev
```

## Main changes since v1

1. We've replaced Astro DB with Bknd
2. Better Auth has been replaced with Bknd's built-in auth
3. Instead of using daisyUI, we now use Basecoat (think `shadcn-ui` but without React)
4. Instead of HTMX, we use Alpine Ajax (if you don't know what either one of these are... it's okay)

## Amazing Alternatives

Freedom Stack v2 not for you? Consider these amazing alternatives.

- [basis](https://github.com/zhengyishen0/basis) - _"A foundation for modern web development built on fundamental tools and clear architectural boundaries. Powered by Astro, Alpine.js, and Supabase with 65+ pre-built components."_
- [better-t-stack](https://github.com/AmanVarshney01/create-better-t-stack) - _"A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations"_
