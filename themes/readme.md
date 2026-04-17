# @prismatica/themes

Theme composition and theme application for Prismatica.

This package sits on top of tokens:

`tokens → themes → primitives → components`

For the overall architecture and dependency rules, see: `repo_documentation/architecture.md`.

## Status

This package is currently a workspace placeholder (`private: true`, version `0.0.0`).

## Planned features

- Base themes (e.g. light/dark).
- A `createTheme` API for building custom themes.
- Token override support (partial theme overrides).
- Runtime theme switching (including SSR-friendly defaults).
- A provider API (e.g. `PrismaticaProvider`) that scopes CSS variables.
- Documentation for theme customization and recommended patterns.

## Intended consumers

- Applications that want Prismatica tokens/themes without the full component set.
- `@prismatica/primitives` and `@prismatica/components`.
