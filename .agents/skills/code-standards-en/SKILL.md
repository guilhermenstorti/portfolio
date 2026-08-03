---
name: code-standards-en
description: Specifies English identifiers, casing conventions, verb-led functions, parameterized objects over long arg lists, CQS separation, guarded early returns, split boolean-flag behaviors, sizing limits for methods and classes, minimal comments. Do not use when localized naming is required by product policy.
---

# Code standards (English source)

## Procedures

**When naming, structuring functions, or reviewing pull requests**

1. Author identifiers, literals exposed to collaborators, and user-facing constants in English within source files.
2. Apply `camelCase` to methods, functions, variables; `PascalCase` to classes and interfaces; kebab-case to file and directory names mirroring symbols when applicable.
3. Avoid cryptic abbreviations while keeping identifiers under roughly 30 characters.
4. Extract magic numbers into named constants so conditional logic expresses intent (`MAX_LOGIN_ATTEMPTS`).
5. Name operations with leading verbs signaling behavior (`calculateTotal`, `sendEmail`) rather than bare nouns.
6. Prefer object parameters instead of arity greater than three for functions and methods unless low-level hotspots demand positional arguments.
7. Apply Command Query Separation: pure readers do not mutate; mutators avoid returning incidental state snapshots except through explicit complementary methods.
8. Replace deep `if / else` trees with guarded early returns; avoid gratuitous final `else` blocks once main path is isolated.
9. Split boolean-flag behavior into separately named procedures instead of `doThing(..., true)`.
10. Keep methods shorter than roughly 50 lines; split cohesive classes exceeding ~300 lines.
11. Minimize explanatory comments relying on expressive naming and decomposition first.
12. Declare one binding per statement; declare variables adjacent to initial use.

## Error Handling

1. When localized product copy conflicts with English-only source identifiers, escalate policy trade-offs rather than mixing languages silently.
2. When boolean parameters reappear despite guidance, refactor to strategy objects or dedicated methods aligning with bounded contexts.