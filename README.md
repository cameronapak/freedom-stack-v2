# Freedom Stack v2 (WIP)

> [!IMPORTANT]
> This project is still a work in progress. It's improving continuously and will be ready soon.
> Documentation for using this project is currently limited but will be expanded shortly.

## Tasks

- [ ] Add `.cursorrules`
- [ ] Can I add recommendations MCP's for each repo in `.vscode` folder?

## Criteria for Freedom Stack v2

1. Must feel elementary/vanilla to use and be easy to learn
2. Must be affordable to host and maintain
3. Must be entirely self-hostable (if needed)
4. Must use well-maintained, actively developed packages to ensure long-term sustainability
5. Must be able to work well with AI code editor assistants

## Stack

- [Astro](https://astro.build)
- [Alpine.js](https://alpinejs.dev) + [Alpine AJAX](https://alpine-ajax.js.org/)
- [TailwindCSS v4](https://tailwindcss.com/) + [Basecoat UI](https://basecoatui.com/)
- [Bknd](https://bknd.io)
- [Netlify](https://www.netlify.com), or host anywhere

## Bknd

> _"Experience the power of a lightweight, feature-rich backend that seamlessly integrates into your framework of choice."_

Imagine having your own Supabase-like backend, but you could host it anywhere you'd like? That's Bknd.

Since Bknd integrates into your framework of choice, it ships with Freedom Stack out of the box!

Here's the best explanation for the heart of [Bknd](https://docs.bknd.io/motivation) and why it's perfect for Freedom Stack.

### Remaining Bknd things

1. **issue (blocking)**: Given I am signed in as an admin, `/data/entity/users` page throws a 404 for some reason when trying to view list of users.
2. **issue (blocking)**: Given I add a new table to the databse from the Bknd admin UI, then I'd like to have the TS types update, so that I can have intellisense for my Bknd schemas and type-safety.
3. **nitpick (non-blocking)**: Given I host the Bknd assets from the public folder, how do I update the `logo_return_path` to go to `/` and not `/admin`?

### Database

Develop on a local libSQL database, included by default without needing to configure anything.

When ready for production, I recommend using a database from [Turso](https://tur.so/freedomstack).

## Install

Run the following command to install this stack on your machine, without the commit history of this repo.

```bash
npx degit https://github.com/cameronapak/freedom-stack-v2 my-project
```

## Setup

### Create User

```bash
npx tsx node_modules/.bin/bknd user create
```

### Run App

Using Node Version Manager?

```bash
nvm use
```

Install the packages.

```bash
npm install
```

Now, let's run the app!

```bash
npm run dev
```

## Main changes since v1

1. We've replaced Astro DB with Bknd
2. Better Auth has been replaced with Bknd's built-in auth
3. Instead of using daisyUI, we now use Basecoat (think `shadcn-ui` but without React)
4. Instead of HTMX, we use Alpine Ajax (if you don't know what either one of these are... it's okay)
