# @prismatica/tokens

Source of truth for Prismatica design tokens.

This package is the bottom layer of the system:

`tokens → themes → primitives → components`

For the overall architecture and dependency rules, see: `repo_documentation/architecture.md`.

## Status

This package is currently a workspace placeholder (`private: true`, version `0.0.0`).

## Planned features

- Token sets for:
  - color
  - spacing
  - typography
  - radius
  - shadows
  - borders
  - z-index
  - breakpoints
  - animation
- Generation of CSS variables following the `--prismatica-*` convention.
- TypeScript typings for token names and token objects.
- A small “token → CSS variables” generator to keep outputs consistent.

## Intended consumption

- Use the emitted CSS variables directly in apps.
- Use via `@prismatica/themes`, which applies tokens through theme composition.
