# @prismatica/components

Accessible, higher-level React UI components built on Prismatica primitives.

This package is the top of the stack:

`tokens → themes → primitives → components`

For the overall architecture and dependency rules, see: `repo_documentation/architecture.md`.

## Status

This package is currently a workspace placeholder (`private: true`, version `0.0.0`).

## Planned features

- Core components (initial targets):
  - Button
  - Input / TextField
  - Checkbox
  - Select
  - Card
  - Modal
- Accessibility baseline:
  - keyboard navigation
  - focus management
  - ARIA roles/attributes where applicable
- Variants driven by tokens/themes (not hard-coded styles).
- Storybook stories as the primary documentation surface.

## Intended consumers

- Applications that want a ready-made UI kit on top of Prismatica tokens/themes.
