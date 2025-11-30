# Implementation Patterns

A monorepo for exploring and documenting UI implementation patterns using modern web technologies.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `storybook`: a [Storybook](https://storybook.js.org/) application for developing and showcasing UI components
- `@repo/primitives`: a React component library with primitive UI components
- `@repo/typescript-config`: shared `tsconfig.json` configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Vitest](https://vitest.dev/) for testing
- [pnpm](https://pnpm.io/) for package management

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
pnpm build --filter=storybook
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
pnpm dev --filter=storybook
```

### Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. Run the following commands:

```sh
# Lint all packages
pnpm lint

# Format all packages
pnpm format

# Type check all packages
pnpm check-types

# Format and lint with auto-fix (root level)
pnpm format-and-lint:fix
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```sh
pnpm turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
pnpm turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
