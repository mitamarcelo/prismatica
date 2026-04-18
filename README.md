# Prismatica

Prismatica is an **open source React design system** focused on a clean, composable foundation:

`tokens → themes → primitives → components`

It is intended to be **customizable**, **accessible**, and **SSR-friendly**, built with **React**, **TypeScript**, and **CSS Variables** (using **vanilla CSS**).

## Status

This project is in an **early/incomplete** stage.

- The implementation is still in progress.
- **All major features/components are still to be done** (primitives, components, docs, tests, release automation, etc.).

## Goals

- **Design tokens** (colors, spacing, typography, etc.) exposed as CSS variables using the `--prismatica-*` convention.
- A **theme system** (light/dark + overrides) built on top of tokens.
- **Layout primitives** (e.g. Box/Flex/Stack/Text/Container) used to compose higher-level UI.
- **Accessible UI components** (e.g. Button/Input/Modal/Card) built on top of primitives.
- **Documentation** (planned via Storybook) with examples, token docs, and theming guides.

## Documentation

- Architecture and package boundaries: [repo_documentation/architecture.md](repo_documentation/architecture.md)
- Package-level docs (planned features):
	- [tokens/readme.md](tokens/readme.md)
	- [themes/readme.md](themes/readme.md)
	- [primitives/readme.md](primitives/readme.md)
	- [components/readme.md](components/readme.md)
	- [utilities/readme.md](utilities/readme.md)

## Development

This repo uses **pnpm workspaces** + **Turborepo** to orchestrate tasks across all packages.

Package builds use **Vite library mode** and output ESM (`.mjs`), CommonJS (`.cjs`), and TypeScript declarations (`.d.ts`) to each package's `dist/` directory.

- Turborepo config: [turbo.json](turbo.json)
- Workspace packages are declared in [pnpm-workspace.yaml](pnpm-workspace.yaml)

Run tasks across the monorepo:

```sh
pnpm -w build
pnpm -w lint
pnpm -w test
```

## License

MIT — see [LICENSE](LICENSE).

