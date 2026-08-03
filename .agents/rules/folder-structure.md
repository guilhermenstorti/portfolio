# Estrutura de pastas — example_5

Esta regra define o padrão oficial de organização do repositório. O React não impõe uma árvore única; aqui adotamos um **híbrido**: **agrupamento por funcionalidade (features)** para código de negócio, mais pastas por **tipo** para UI genérica, utilitários e bootstrap da app — combinação escalável citada na documentação histórica do React (“agrupar por features ou por tipo”) e em guias de projetos maduros.

---

## Frontend (React)

### Princípios

1. **Colocation:** mantenha junto o que muda junto (componente, estilo local, testes, tipos da feature).
2. **Features:** cada domínio de produto vive em `src/features/<nome-da-feature>/` com seus componentes, hooks da feature e integrações de UI específicas.
3. **Compartilhado:** componentes genéricos (design system / shadcn), helpers e tipos globais ficam fora de `features`.
4. **Rotas vs páginas:** rotas apenas ligam URLs a páginas; páginas orquestram features e layout.
5. **Profundidade:** evite mais de 3–4 níveis sem necessidade; prefira `baseUrl`/aliases no `tsconfig` para imports limpos.

### Árvore sugerida (`frontend/src/`)

```text
src/
  app/                    # bootstrap: providers, router, layout raiz (opcional: App.tsx na raiz se já existir)
  assets/                 # imagens, fontes estáticas
  components/
    ui/                     # primitivos shadcn / design system (não colocar regra de negócio aqui)
    ...                     # outros componentes globais reutilizáveis (ex.: Logo, ErrorBoundary)
  features/
    <feature-name>/
      components/           # UI só dessa feature
      hooks/                # hooks só dessa feature
      lib/                  # helpers da feature (opcional)
      api/                  # funções que chamam backend (opcional; ver também shared)
      types.ts ou types/    # tipos da feature
      index.ts              # barrel público da feature (exportar só o necessário)
  hooks/                    # hooks globais reutilizáveis
  lib/                      # utilitários genéricos (ex.: cn, formatadores)
  pages/                    # telas montadas por rota (compõem features)
  routes/                   # definição de rotas (React Router, etc.)
  types/                    # tipos globais compartilhados (opcional)
  main.tsx
  index.css
```

### O que não fazer

- Colocar chamadas HTTP espalhadas em componentes sem camada clara; prefira `features/<x>/api`, `lib/api` ou cliente HTTP centralizado.
- Misturar regra de negócio pesada dentro de `components/ui`; UI primitiva deve permanecer burra e reutilizável.

---

## Backend

Separação em **três camadas de pastas** sob `backend/src/` (ou equivalente):

| Pasta | Responsabilidade |
|-------|-------------------|
| **`controllers/`** | Camada HTTP: handlers de rotas, parsing de request, status codes, validação de entrada superficial (formato), delegação para services. Sem regra de negócio complexa. |
| **`services/`** | Regras de negócio, orquestração de casos de uso, validações de domínio, coordenação entre operações. Não conhece detalhes de Express/Fastify além do necessário (idealmente nenhum). |
| **`data/`** | Acesso a dados e mundo externo: clientes HTTP para APIs terceiras, repositórios (DB), filas, storage, mapeamento DTO ↔ persistência. Implementações concretas isoladas aqui. |

### Fluxo obrigatório

```text
HTTP → controllers/ → services/ → data/
```

- Controllers **não** implementam integrações externas nem queries diretas.
- Services **não** montam resposta HTTP; apenas retornam resultados ou lançam erros de domínio.
- `data/` concentra side-effects e I/O.

### Árvore sugerida (`backend/src/`)

```text
src/
  controllers/
    <resource>.controller.ts   # ou por rota/módulo
  services/
    <domain>.service.ts
  data/
    repositories/              # acesso a DB (opcional subpasta)
    clients/                   # clientes HTTP/SDKs externos (opcional)
    ...
  index.ts ou server.ts        # entrada da aplicação
```

### Tipos compartilhados

- Tipos/DTOs usados entre camadas podem ficar em `src/types/`, `src/schemas/` (ex.: Zod) ou ao lado do domínio, desde que importações não criem ciclos (`data` → `services` → `controllers` em uma direção).

---

## Resumo

- **React:** híbrido `features/` + `components/ui` + `pages/` + `routes/` + `lib/`.
- **Backend:** `controllers/` (HTTP), `services/` (regras), `data/` (externo e persistência).

Ao criar arquivos novos, siga este documento para manter o projeto consistente e fácil de navegar.