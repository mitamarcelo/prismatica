# @prismatica/utilities

Shared utilities used across Prismatica packages.

This package is cross-cutting: it may be used by tokens/themes/primitives/components, but should not depend on higher layers (especially not `@prismatica/components`).

For the overall architecture and dependency rules, see: `repo_documentation/architecture.md`.

## Status

This package is currently a workspace placeholder (`private: true`, version `0.0.0`).

## Planned features

- Small, focused helpers intended to stay stable:
  - class name helpers
  - type utilities
  - style-prop helpers used by primitives
  - DOM/accessibility helpers shared by components
- Utilities should be framework-appropriate (React-safe where required) and SSR-safe.

## Intended consumers

- Internal consumption across the monorepo.
- Potentially external consumption if utilities stabilize and prove generally useful.
