# MonoRepo Architecture

## Overall architecture

The system follows a **layered architecture**:

```
tokens → themes → primitives → components
```

The project uses a **monorepo** (pnpm workspaces) where each layer is a separate package.

This document focuses on:

- How the repository is structured today
- The intended package boundaries and dependency rules
- How the design system will be consumed (npm packages + documentation)

## Repository layout

This repository currently uses a **top-level packages** layout (no `packages/` directory):

```
prismatica/
	components/
	primitives/
	themes/
	tokens/
	utilities/
	repo_documentation/
	package.json
	pnpm-workspace.yaml
```

`pnpm-workspace.yaml` declares each of these directories as a workspace package.

## Packages overview

All packages are currently present as workspace shells (each has a `package.json`).
Implementation will be added incrementally.

### `@prismatica/tokens`

Role: the source of truth for **design tokens**.

Responsibilities:

- Define token values (colors, spacing, typography, radius, etc.)
- Produce **CSS variables** using the `--prismatica-*` naming convention
- (Planned) provide TypeScript typings for token names and token objects

Non-responsibilities:

- No React code
- No theming logic

### `@prismatica/themes`

Role: theme composition and application.

Responsibilities:

- Define baseline themes (e.g. light/dark)
- Expose a provider (e.g. `PrismaticaProvider`) for applying tokens/themes
- (Planned) support theme overrides and dynamic theme switching

Dependencies:

- Depends on `@prismatica/tokens`

### `@prismatica/primitives`

Role: low-level **layout and typography primitives**.

Responsibilities:

- Provide foundational components (planned: Box/Flex/Stack/Text/Container)
- Provide a consistent prop API for layout/spacing/typography
- Stay composable and SSR-friendly

Dependencies:

- Depends on `@prismatica/themes` (and indirectly on tokens)

### `@prismatica/components`

Role: higher-level, accessible UI components.

Responsibilities:

- Provide reusable UI components (planned: Button/Input/Modal/Card/etc.)
- Implement accessibility guidelines and keyboard/focus behavior
- Prefer composition over configuration

Dependencies:

- Depends on `@prismatica/primitives` (and indirectly on themes/tokens)

### `@prismatica/utilities`

Role: shared utilities used across packages.

Responsibilities:

- Shared helper utilities (e.g. class name helpers, type utilities, style prop helpers)

Dependency rule:

- Must not depend on `@prismatica/components`
- Should remain safe to use by any layer

## Dependency rules (important)

To keep the layering clean and avoid cyclic dependencies, package dependencies should flow in one direction only:

```
@prismatica/tokens
	↓
@prismatica/themes
	↓
@prismatica/primitives
	↓
@prismatica/components
```

`@prismatica/utilities` is cross-cutting and may be used by any layer, but should not import “up” the stack.

## CSS variables and naming

Tokens are exposed as CSS variables with the prefix `--prismatica-*`.

Examples:

```
--prismatica-color-primary
--prismatica-space-4
--prismatica-radius-md
```

Theming is expected to work by applying values to these variables (either globally or within a provider scope).

## How the design system will be available

Prismatica is intended to be consumed in two complementary ways:

1. **As npm packages** (the actual design system runtime)
2. **As documentation** (Storybook + written guides)

### 1) npm packages

Packages will be published under the `@prismatica/*` scope.

Current status:

- The workspace packages are currently marked `private: true` and versioned `0.0.0`.
- Publishing (Changesets + semver + CI) is planned but not yet implemented.

Consumption intent:

- Install only what you need (e.g. just `@prismatica/tokens`)
- Or install the full stack (tokens + themes + primitives + components)

Example (future):

```sh
pnpm add @prismatica/components @prismatica/themes
```

### 2) Documentation (design system site)

Documentation is planned to be served via **Storybook** as the primary “design system site”:

- Component examples and usage
- Token reference
- Theming guides
- Accessibility notes

In addition to Storybook, each package will maintain its own package-level documentation in `readme.md` inside the package directory.

## Documentation sources in this repo

- `repo_documentation/architecture.md`: high-level architecture, packaging, dependency rules
- `<package>/readme.md`: package-specific scope and planned features

## Build and release (planned)

The intended toolchain is:

- Vite (library mode) for builds
- TypeScript for types
- ESLint for linting
- Vitest + React Testing Library for tests
- Storybook for documentation
- Changesets + semantic versioning for release

Key build expectations:

- Generate ESM + CJS outputs
- Generate `.d.ts`
- Emit any CSS output needed for tokens/themes
- Keep React as a peer dependency in React-based packages