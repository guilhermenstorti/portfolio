# Styleguide — Portfólio PM (Dark Theme)

Documento de referência para reproduzir o styleguide da landing page em código (React, Vue, HTML/CSS puro, etc). Todos os valores abaixo são do tema escuro.

## Fontes

Google Fonts, carregar pesos 400–700:

```
Space+Grotesk:wght@500;600;700   → títulos (h1, h2, h3, labels de destaque)
IBM+Plex+Sans:wght@400;500;600;700 → corpo de texto (fonte padrão da página)
IBM+Plex+Mono:wght@400;500;600   → eyebrows, labels uppercase, números/stats, badges
```

## Design tokens (cores — tema escuro)

Formato OKLCH. Se o stack não suportar, converter para hex equivalente.

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `oklch(16% 0.012 250)` | Fundo da página |
| `--nav-bg` | `oklch(16% 0.012 250 / 0.85)` | Fundo da nav (com blur) |
| `--text` | `oklch(92% 0.006 250)` | Texto principal |
| `--text-muted` | `oklch(72% 0.012 250)` | Parágrafos secundários |
| `--text-dim` | `oklch(62% 0.01 250)` | Labels, metadados |
| `--text-faint` | `oklch(65% 0.01 250)` | Texto auxiliar de nav/eyebrow |
| `--border` | `oklch(30% 0.015 250)` | Bordas padrão, divisores |
| `--border-soft` | `oklch(28% 0.015 250)` | Bordas sutis (footer, seções) |
| `--border-strong` | `oklch(38% 0.02 250)` | Bordas de botão secundário |
| `--accent` | `oklch(75% 0.11 250)` | Azul de destaque (links, badges, títulos de seção) |
| `--btn-bg` | `oklch(92% 0.006 250)` | Fundo do botão primário (claro sobre fundo escuro) |
| `--btn-bg-hover` | `oklch(85% 0.01 250)` | Hover do botão primário |
| `--btn-text` | `oklch(16% 0.012 250)` | Texto do botão primário |
| `--contrast-bg` | `oklch(26% 0.016 250)` | Fundo do card de destaque ("Resultados") |
| `--contrast-text` | `oklch(94% 0.006 250)` | Texto sobre o card de destaque |
| `--contrast-text-muted` | `oklch(80% 0.012 250)` | Texto secundário sobre o card |
| `--contrast-text-dim` | `oklch(70% 0.015 250)` | Label uppercase sobre o card |
| `--green` | `oklch(80% 0.13 150)` | Números de resultado (sobre --contrast-bg) |
| `--green-result` | `oklch(78% 0.12 150)` | Resultado nos cards de case (sobre --card-bg) |
| `--card-bg` | `oklch(20% 0.014 250)` | Fundo dos cards de case |
| `--card-hover-border` | `oklch(75% 0.11 250)` | Borda do card no hover |
| `--badge-bg` | `oklch(75% 0.11 250 / 0.14)` | Fundo do badge/pill de categoria |
| `--badge-text` | `oklch(80% 0.12 250)` | Texto do badge |
| `--company-text` | `oklch(78% 0.012 250)` | Texto dos logos placeholder |
| `--company-hover-border` | `oklch(50% 0.02 250)` | Borda do card de empresa no hover |
| `--toggle-track` | `oklch(26% 0.016 250)` | Trilho do toggle de variação de hero |

## Tipografia — escala

| Elemento | Fonte | Tamanho | Peso | Extras |
|---|---|---|---|---|
| H1 (hero) | Space Grotesk | `clamp(40px, 5.5vw, 68px)` | 700 | line-height 1.02, letter-spacing -0.02em |
| H2 (seção) | Space Grotesk | `clamp(26px, 3vw, 34px)` | 600 | letter-spacing -0.01em |
| H3 (card title) | Space Grotesk | 21px | 600 | — |
| Subtítulo hero | IBM Plex Sans | 22px | 500 | cor `--accent` |
| Corpo (parágrafo) | IBM Plex Sans | 15–18px | 400 | line-height 1.55–1.6 |
| Eyebrow/label uppercase | IBM Plex Mono | 11–13px | 500–600 | letter-spacing 0.04em, uppercase |
| Stat/número grande | IBM Plex Mono | 26px | 600 | cor `--green` |
| Botão/CTA | IBM Plex Sans | 14–15px | 500 | — |

## Espaçamento e grid

- Largura máxima de conteúdo: `1160px`, centralizado (`margin: 0 auto`)
- Padding lateral de seção: `48px`
- Padding vertical de seção: `56px–96px`
- Grid de quick-info: 4 colunas, divisórias verticais de 1px (`--border`)
- Grid de quick-scan: 3 colunas, gap 1px (efeito de "linhas de tabela" usando o bg como divisor)
- Grid de empresas: 6 colunas, gap 16px
- Grid de cases: 2 colunas, gap 20px

## Componentes

**Nav** — sticky top, blur backdrop, borda inferior sutil. Botão de tema (círculo 32px) + CTA primário.

**Botão primário**: bg `--btn-bg`, texto `--btn-text`, padding `13px 22px` (grande) ou `9px 18px` (nav), border-radius `3px`, hover troca para `--btn-bg-hover`.

**Botão secundário**: borda `1px solid --border-strong`, sem fundo, mesmo padding/radius.

**Toggle pill** (variação de hero): trilho `--toggle-track` com padding 3px e border-radius 999px; pill ativo bg `--btn-bg`/texto `--btn-text`; inativo transparente/texto `--text-faint`.

**Card de case**: borda `1px solid --border`, radius `4px`, padding `28px`, fundo `--card-bg`. Badge de categoria em pill (radius 999px, bg `--badge-bg`, texto `--badge-text`, mono 11px uppercase). Hover: borda vira `--card-hover-border` + `box-shadow: 0 2px 12px oklch(0% 0 0 / 0.16)`.

**Card de empresa (logo placeholder)**: borda `1px solid --border-soft`, radius 3px, `filter: grayscale(1); opacity: 0.7`; hover remove o filtro e destaca a borda.

**Bloco de destaque ("Resultados")**: fundo `--contrast-bg`, radius 4px, padding 32px, grid 3 colunas de stat + label.

## Comportamento

- Toggle de tema claro/escuro no canto superior direito da nav (ícone `●` no claro, `☀` no escuro).
- Toggle de variação de copy do hero ("Direto" / "Provocativo") no canto superior direito da seção hero.
- Hover em cards de case e empresa faz transição de borda/opacidade (usar `transition` suave, ~150–200ms, em produção).

## Notas de implementação

- Todos os valores de cor usam OKLCH — se o ambiente de destino não suportar, converter para hex mantendo a relação de luminância entre tokens (texto sempre com alto contraste sobre os respectivos fundos).
- O tema é implementado via CSS custom properties no elemento raiz, permitindo trocar claro/escuro sem duplicar componentes.
- Esta página tem apenas o tema escuro documentado aqui; o tema claro existe no protótipo e segue a mesma estrutura de tokens com valores invertidos.
