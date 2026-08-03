---
name: repo-folder-structure
description: Defines hybrid feature-based frontend layout under src plus backend controllers-services-data layering and HTTP flow direction. Applies when creating routes, pages, features, or backend modules for consistency. Do not use for monorepo-wide policies outside this template or frameworks that forbid this layout.
---

# Repository folder structure

## Procedures

**When adding frontend React assets**

1. Colocate artifacts that change together: component implementations, narrowly scoped styles, companion tests, and feature-local typings.
2. Place product-domain UI under `src/features/<feature-name>/` with subfolders (`components`, `hooks`, optional `lib`, `api`, `types`), exporting public surfaces via a selective `index.ts` barrel when required.
3. Keep shared primitives and design-system elements under `src/components/ui` and sibling global reusable components without embedding domain rules inside primitive layers.
4. Keep cross-feature hooks under `src/hooks`; keep generic helpers under `src/lib`.
5. Assemble routed experiences under `src/pages`; define route tables under `src/routes`; keep bootstrap concerns under `src/app` alongside `main.tsx` and global styles (`index.css`).
6. Avoid gratuitous nesting beyond roughly three levels; prefer `baseUrl`/path aliases declared in TypeScript configs for readability.
7. Read `references/repo-layout.md` for the canonical ASCII tree snapshot and anti-pattern callouts whenever placement is ambiguous.

**When extending backend modules**

1. Respect the dependency direction `HTTP → controllers/ → services/ → data/`; controllers marshal HTTP shapes and statuses, services encapsulate orchestration and domain guards, data modules perform persistence and integrations.
2. Keep handlers in `controllers/`, workflows in `services/`, adapters in `data/` (`repositories`, `clients`, shared external SDK boundaries).
3. Share cross-layer schemas or validation artifacts under neutral folders (`src/schemas`, `src/types`) avoiding import cycles violating the layering arrow.

## Error Handling

1. When new HTTP calls emerge inside UI primitives, relocate them behind `features/<name>/api` or centralized HTTP clients referenced in `references/repo-layout.md`.
2. When backend logic leaks framing details into controllers, refactor transport mapping upward and domain rules downward per the layered flow diagram inside `references/repo-layout.md`.