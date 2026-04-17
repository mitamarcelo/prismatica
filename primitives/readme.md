# @prismatica/primitives

Low-level layout and typography primitives.

This package is the foundation for all higher-level UI components:

`tokens → themes → primitives → components`

For the overall architecture and dependency rules, see: `repo_documentation/architecture.md`.

## Status

This package is currently a workspace placeholder (`private: true`, version `0.0.0`).

## Planned features

- Core primitives:
  - Box
  - Flex
  - Stack
  - Text
  - Container
- A consistent, composable prop API for layout/spacing/typography.
- Type-safe polymorphism patterns (as appropriate) for composability.
- SSR-friendly styling approach aligned with CSS variables.

## Intended consumers

- `@prismatica/components`.
- Apps that prefer composing UI from primitives instead of using prebuilt components.
