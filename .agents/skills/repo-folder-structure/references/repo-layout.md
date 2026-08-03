# Repository layout reference (example_6)

Hybrid community pattern: group by **features** for product code, plus **type-based** buckets for reusable UI, utilities, and app bootstrap—as in historical React docs on feature vs type grouping.

---

## Frontend (React)

### Principles

1. **Colocation:** keep components, local styles, tests, and feature types together.
2. **Features:** each product domain lives in `src/features/<feature-name>/` with feature components, hooks, and UI integrations.
3. **Shared:** generic components (design system / shadcn), helpers, and global types stay outside `features`.
4. **Routes vs pages:** routes map URLs to pages; pages compose features and layout.
5. **Depth:** avoid more than ~3–4 levels without reason; prefer `baseUrl`/aliases in `tsconfig` for imports.

### Suggested tree (`frontend/src/`)

```text
src/
  app/
  assets/
  components/
    ui/
    ...
  features/
    <feature-name>/
      components/
      hooks/
      lib/
      api/
      types.ts or types/
      index.ts
  hooks/
  lib/
  pages/
  routes/
  types/
  main.tsx
  index.css
```

### Avoid

- Scattered HTTP calls in components without a clear layer—prefer `features/<x>/api`, `lib/api`, or a central HTTP client.
- Heavy domain logic inside `components/ui`; primitives stay dumb and reusable.

---

## Backend

Three-layer layout under `backend/src/`:

| Folder | Responsibility |
|--------|----------------|
| **`controllers/`** | HTTP handlers: route wiring, parsing, status codes, light format validation—delegate to services. No complex domain rules. |
| **`services/`** | Domain rules, orchestration, validations—not HTTP framing specifics. |
| **`data/`** | External IO: repositories, outbound HTTP/SDKs, queues, persistence mapping. |

Mandatory flow:

```text
HTTP → controllers/ → services/ → data/
```

- Controllers do not embed external integrations or direct queries.
- Services do not build HTTP responses; return values or throw domain errors.
- `data/` concentrates side effects and IO.

Suggested tree (`backend/src/`):

```text
src/
  controllers/
    <resource>.controller.ts
  services/
    <domain>.service.ts
  data/
    repositories/
    clients/
    ...
  index.ts or server.ts
```

### Shared types

Types/DTOs may live in `src/types`, `src/schemas`, or near the domain provided imports remain acyclic respecting `data → services → controllers`.

---

## Summary

- React: hybrid `features/` + `components/ui` + `pages/` + `routes/` + `lib/`.
- Backend: `controllers/` (HTTP), `services/` (rules), `data/` (integration and persistence).

Place new files using this snapshot to keep navigation predictable.