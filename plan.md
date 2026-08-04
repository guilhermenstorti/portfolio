PORTFÓLIO PM — DOCUMENTO DE ESPECIFICAÇÃO FINAL

# Guilherme Navakoski Storti — Product Manager Senior

**Documento oficial para detalhamento de desenvolvimento.**
**Contém todo o conteúdo, copy, storytelling, estrutura e 
especificações necessárias para implementação.**

---

# SUMÁRIO

1. Visão Geral e Posicionamento
2. Arquitetura de Páginas e Navegação
3. Especificações de Design
4. Informações de Contato e Links
5. Homepage — Seção 1: Hero
6. Homepage — Seção 2: Quick Scan
7. Homepage — Seção 3: Empresas Atendidas
8. Homepage — Seção 4: Cases (Cards)
9. Homepage — Seção 5: Sobre
10. Homepage — Seção 6: CTA Final
11. Página de Case: Mogno AI
12. Página de Case: Accountfy AI & Analytics
13. Página de Case: Accountfy FP&A
14. Página de Case: Euphoria BI
15. Elementos Globais (Header, Footer, 404)
16. SEO e Open Graph
17. Guia de Tom e Linguagem
18. Mapa de Learnings (referência de consistência)
19. Notas Internas (não publicar)

---

# 1. VISÃO GERAL E POSICIONAMENTO

## Público-alvo

**Persona 1 — Recrutador/RH:**
Precisa preencher uma vaga de PM rapidamente. Quer verificar 
fit técnico e cultural em 2-3 minutos. Valoriza informação 
escaneável, números claros e facilidade de contato.

**Persona 2 — Líder de Produto (GPM, CPO, Head):**
Quer entender profundidade de pensamento, capacidade de execução 
e impacto real. Vai ler 1-2 cases. Valoriza metodologia, 
resultados mensuráveis e maturidade estratégica.

## Posicionamento

"Eu navego entre estratégia e código com a mesma fluência. 
Trago a velocidade e ownership de startup, a disciplina de dados 
de quem construiu BI do zero, e a profundidade técnica de quem 
já foi desenvolvedor. Esse combo é raro."

## Objetivo do portfólio

Funcionar como funil de convencimento:
Hero (curiosidade) → Quick Scan (convicção rápida) → 
Cases (prova) → CTA (ação).

O recrutador precisa sair convencido em 2 minutos.
O líder precisa sair convencido em 5-7 minutos.

---

# 2. ARQUITETURA DE PÁGINAS E NAVEGAÇÃO

## Estrutura de arquivos

O projeto deve ser feito em React, TypeScript e Tailwind CSS (Vite), estruturado como single-page application com roteamento client-side (React Router). Após seu desenvolvimento, será feito deploy no GitHub Pages.

**Nomenclatura:** todo identificador de código — pastas, arquivos, componentes, rotas — é em inglês, seguindo `.agents/rules/code-standards.md` (camelCase para funções/variáveis, PascalCase para componentes/tipos, kebab-case para arquivos/pastas). O conteúdo/copy exibido ao usuário permanece em português — isso é texto de produto, não identificador de código.

**Assets estáticos:** ficam em `public/`, fora de `src/`. São arquivos consumidos por URL direta e sem transformação pelo bundler (imagens de terceiros, PDF do CV), então não fazem sentido em `src/assets` (que é para assets processados/importados pelo bundler). O Vite copia `public/` para a raiz do build, preservando os caminhos.

**Roteamento no GitHub Pages:** usar `HashRouter` do React Router. O GitHub Pages é um host estático sem rewrite de servidor; com `HashRouter`, a navegação e o F5 em qualquer rota (`/#/cases/mogno-ai`) sempre resolvem para o mesmo `index.html`, sem precisar do hack de `404.html` de redirecionamento que o `BrowserRouter` exigiria.

```
/
├── index.html                       # entry point do Vite (shell da SPA)
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── assets/
│       ├── img/
│       │   ├── logos/                # logos dos clientes (SVG/PNG)
│       │   │   ├── will-bank.svg
│       │   │   ├── dotz.svg
│       │   │   ├── zup.svg
│       │   │   ├── gri-club.svg
│       │   │   ├── grupo-salta.svg
│       │   │   └── atlantic-city.svg
│       │   └── capterra/             # selos Capterra
│       │       ├── ease-of-use-2025.svg
│       │       └── best-value-2025.svg
│       └── docs/
│           └── guilherme-storti-cv.pdf
└── src/
    ├── main.tsx
    ├── index.css
    ├── app/
    │   ├── app.tsx                    # providers + montagem do router
    │   └── router.tsx                 # tabela de rotas (HashRouter)
    ├── pages/                         # telas montadas por rota (compõem features)
    │   ├── home-page.tsx
    │   ├── mogno-ai-case-page.tsx
    │   ├── accountfy-ai-analytics-case-page.tsx
    │   ├── accountfy-fpa-case-page.tsx
    │   ├── euphoria-bi-case-page.tsx
    │   └── not-found-page.tsx
    ├── features/                      # UI e lógica por domínio de produto
    │   ├── hero/
    │   ├── quick-scan/
    │   ├── companies-served/
    │   ├── case-cards/
    │   ├── about/
    │   ├── final-cta/
    │   └── case-study/                # blocos reutilizados pelas páginas de case
    ├── components/
    │   ├── ui/                        # primitivos do design system (Badge, Tag, Button…)
    │   ├── header.tsx
    │   └── footer.tsx
    ├── hooks/                         # hooks globais reutilizáveis
    ├── lib/                           # helpers genéricos
    └── types/                         # tipos globais compartilhados
```

## Tabela de rotas

| Rota                                | Página                                        |
|--------------------------------------|------------------------------------------------|
| `/`                                   | `home-page.tsx`                                |
| `/cases/mogno-ai`                     | `mogno-ai-case-page.tsx`                       |
| `/cases/accountfy-ai-analytics`       | `accountfy-ai-analytics-case-page.tsx`         |
| `/cases/accountfy-fpa`                | `accountfy-fpa-case-page.tsx`                  |
| `/cases/euphoria-bi`                  | `euphoria-bi-case-page.tsx`                    |
| `*` (catch-all)                       | `not-found-page.tsx`                           |

## Navegação

**Header fixo (sticky):**
Logo (GN) → links: Cases | Sobre | [Botão: Conversar]

**Links internos na homepage:**
- "Cases" ancora na seção 4 (cards)
- "Sobre" ancora na seção 5
- "Conversar" abre link do Calendar (booking time) em nova aba

**Páginas de case:**
Header: Logo (GN) → link: ← Voltar (navega para a rota `/`)
CTA no final de cada case.

---

# 3. ESPECIFICAÇÕES DE DESIGN

## Princípios

- Minimalista. Deixe os resultados brilharem.
- Mobile-first. 80% dos recrutadores checam no celular.
- Escaneável. Hierarquia visual clara, sem blocos de texto longos.
- Profissional mas acessível. Quebra a quarta parede sem amadorismo.

## Fonte da verdade de design: styleguide.md

**A partir da revisão para tema escuro, cores, tipografia e definição de
componentes reutilizáveis não são mais especificadas aqui — são
especificadas em [`styleguide.md`](styleguide.md).** Esta seção evita
duplicar tokens (a duplicação foi exatamente o que ficou desatualizado
na primeira versão deste documento). `plan.md` continua sendo a fonte da
verdade para copy, storytelling, estrutura de páginas e arquitetura
(seção 2); `styleguide.md` é a fonte da verdade para o sistema visual.

Resumo de alto nível (ver `styleguide.md` para os tokens completos em
OKLCH e a especificação de cada componente):

- **Tema:** escuro, único (sem alternância claro/escuro implementada).
- **Fundo de página único:** todas as seções (Hero, Quick Scan, Sobre,
  CTA) usam o mesmo fundo `--bg`; não há mais alternância de faixas
  brancas/cinzas entre seções. Só cards (`--card-bg`) e o bloco de
  destaque de resultados (`--contrast-bg`) se destacam do fundo.
- **Tipografia:** Space Grotesk (títulos) + IBM Plex Sans (corpo) +
  IBM Plex Mono (eyebrows, labels uppercase, badges, números/stats).
- **Botões:** primário = claro sobre fundo escuro (radius 3px); 
  secundário = só borda. Um único CTA primário por seção.
- **Badge de categoria:** pill mono uppercase com tom de accent
  translúcido — não é mais colorido por categoria (roxo/verde/azul).
  As cores por case (ver abaixo) continuam vivendo apenas no gradiente
  de hero de cada página de case.
- **Resultado em destaque (cards):** texto colorido (`--green-result`)
  direto sobre o card, sem caixa/borda separada.
- **Bloco de destaque (Resultados que importam):** painel `--contrast-bg`
  com grid de 3 colunas, números grandes em `--green`. Substitui a antiga
  lista com marcadores na seção Quick Scan.

## Cores dos heroes por case

Não mudaram — continuam sendo a identidade visual de cada case,
independente do tema geral do site:

```
Mogno AI:          #8b5cf6 → #6d28d9 (roxo)
Accountfy AI:      #8b5cf6 → #a78bfa (roxo claro)
Accountfy FP&A:    #10b981 → #059669 (verde)
Euphoria BI:       #3b82f6 → #1e40af (azul)
```

## Breakpoints

```
Desktop:  > 1024px
Tablet:   768px – 1024px
Mobile:   < 768px
```

---

# 4. INFORMAÇÕES DE CONTATO E LINKS

## Substituir em todos os arquivos:

```
Email:      guilhermenstorti@gmail.com
LinkedIn:   https://linkedin.com/in/guilherme-navakoski-storti
WhatsApp:   https://wa.me/5544999905592
Telefone:   +55 44 99990-5592
Agendar chamada:   https://calendar.app.google/BKeoRpgz5FATNNQKA
GitHub:     https://github.com/guilhermenstorti
Substack:   https://onproductpath.substack.com
CV PDF:     public/assets/docs/guilherme-storti-cv.pdf
```

---

# 5. HOMEPAGE — SEÇÃO 1: HERO

## Layout

Fundo: `--bg` (mesmo fundo do resto da página, sem bloco de cor separado).
Texto centralizado. Nome em `--text`, cargo em `--accent`, tagline em `--text-muted` (ver styleguide.md).

## Conteúdo

**Subtítulo** (texto menor, acima do nome):
> Você provavelmente está com 14 abas abertas agora.
> Se essa for a última que você precisar abrir, fiz meu trabalho.

**Nome** (título principal, maior):
> Guilherme Storti

**Cargo** (abaixo do nome):
> Product Manager Senior

**Tagline** (parágrafo abaixo do cargo):
> PM Senior com 6+ anos em produtos digitais. Experiência em AI, 
> analytics e estratégia. Cresci produtos em startups aceleradas 
> pelo Google for Startups, e agora quero levar essa mentalidade 
> para onde o impacto é maior.

> PM Senior com 6+ anos em produtos digitais, fazendo produto de 
> verdade: estruturando métricas antes do MVP, reduzindo churn 
> enquanto escala, falando a mesma língua do dev e navegando IA 
> sem perder a visão estratégica.

**Botões** (2, lado a lado):
- [Agendar Chamada, ícone de calendário SVG] → link Calendar (nova aba)
- [Ver Cases] → ancora na seção de cards (#cases)

**Quick Info Bar** (grid com divisórias, ver styleguide.md):

| Empresa Atual  | Foco Principal        | Localização          | Status                             |
|----------------|-----------------------|----------------------|-------------------------------------|
| Mogno AI       | AI · Dados · Strategy | Brasil (remoto ok)   | Aberto a oportunidades + radar pulsante verde |

O indicador de status não usa mais emoji (🟢). É um componente `StatusPulse`:
dot verde sólido + anel `animate-ping` ao redor, no estilo de indicador
de "serviço online" de painéis de infra. Respeita `prefers-reduced-motion`.

---

# 6. HOMEPAGE — SEÇÃO 2: QUICK SCAN

## Layout

Fundo: `--bg` (mesmo fundo da página).
Conteúdo centralizado, max-width 1160px (`max-w-content`).
Campos em grid "linhas de tabela" (3 colunas, gap 1px usando `--border`
como divisor) com label mono uppercase + valor em texto normal.
"Resultados que importam" vira o bloco de destaque `--contrast-bg`
(painel de 3 colunas com números grandes em `--green`), não uma lista
com marcadores.

## Título:
> Pra facilitar sua vida

## Texto de abertura:
> Se você é recrutador e está com pressa (eu entendo), aqui está 
> tudo que você precisa saber em 60 segundos. Se quiser ir mais fundo, 
> os cases estão logo abaixo.

## Campos:

**Experiência:**
6+ anos em gestão de produtos digitais. Evolução de Junior PO → PO → PM → PM Senior. Background técnico como desenvolvedor e engenheiro de dados antes de migrar para produto.

**Empresas:**
Mogno AI (PM Senior, AI & Plataforma) · Accountfy (PM, 4+ anos, SaaS B2B fintech) · Grupo Euphoria (BI & Estratégia) · Teclaser (Desenvolvimento & Engenharia) · EchoTech (Desenvolvimento & Engenharia).

**Especialidades:**
Product Discovery · Product Strategy · AI/ML Products · Data-Driven Decision Making · Analytics · OKR · Roadmap · Technical Product Management

**Formação:**
Engenharia de Produção (UEM) · MBA Digital Business (USP/ESALQ) · Certificação GenAI (MIT) · Product Management e Product Analytics (PM3) · AI (branas.io)

**Idiomas:**
Português (nativo) · Inglês (fluente)

**Diferencial técnico:**
Background em desenvolvimento de software (ADVPL/Protheus, HTML, CSS, JavaScript, SQL, REST API), construção de ETL e Data Warehouses, e fluência em arquiteturas de IA/LLM. Falo a mesma língua do time de engenharia.

**Resultados que importam:** (bloco de destaque `--contrast-bg`, grid
3 colunas de stat + label — ver styleguide.md e §3)
- [ícone de foguete animado, "levantando voo"] Produto de IA lançado do zero (Google for Startups)
- +11% Revenue via upsell / mês
- -22% Tickets de suporte / mês
- -5pp Churn mensal
- -32,5% Inadimplência durante a pandemia
- -85% Tempo de onboarding

**Disponibilidade:**
Aberto a oportunidades · Remoto ou híbrido.

**Ações rápidas** (linha de botões):
[Agendar uma conversa] · [Baixar CV em PDF] · [LinkedIn] · [Email direto]

---

# 7. HOMEPAGE — SEÇÃO 3: EMPRESAS ATENDIDAS

## Layout

Fundo: `--bg`. Logos em cards individuais (borda `--border-soft`,
radius 3px), grid de 6 colunas (gap 16px) no desktop.
Logos em grayscale + opacidade reduzida por padrão; hover remove o
filtro e destaca a borda do card (`--company-hover-border`).
Não linkar para os sites das empresas.
Responsivo: grid 2 colunas no mobile, 3 no tablet, 6 no desktop.

## Título:
> Empresas atendidas pelos produtos que liderei

## Subtítulo:
> Mais de 450 empresas em 13 países já se beneficiaram dos produtos 
> que ajudei a construir e evoluir.

## Logos (todos públicos em accountfy.com):
Will Bank · Dotz · Zup · GRI Club · Grupo Salta · Atlantic City Casinos · Burger King · Flamengo · Itaú · Botafogo · Instituto Ayrton Senna · TOTVS

## Fonte dos logos:
Logos reais em PNG inseridas em `public/assets/img/logos/` (12 arquivos,
um por empresa listada acima). Exibidas em carrossel horizontal contínuo
(marquee), grayscale por padrão, cor no hover; pausa ao passar o mouse
sobre a faixa. Ver styleguide.md / §3 para o restante do tratamento visual.

---

# 8. HOMEPAGE — SEÇÃO 4: CASES (Cards)

## Layout

Grid de 2 colunas (1 coluna mobile), gap 20px.
Cada card (`--card-bg`, borda `--border`, radius 4px) tem hover com
sombra + borda em `--card-hover-border` (accent azul, igual pra todos
os cards — não é mais colorida por categoria).
Cada card é clicável (link para página do case).
Badge de categoria é um pill mono uppercase neutro (`--badge-bg` /
`--badge-text`), mesmo tratamento visual nos 4 cards — só o texto do
label muda.

## CARD 1 — Mogno AI

**Badge:** AI & Plataforma
**Título:** Mogno AI — Do Zero ao Lançamento Global
**Subtítulo:** PM Senior · Out 2025 – Jul 2026
**Descrição:**
> Liderei a concepção de um produto de plataforma com IA embarcada,
> transformando uma iniciativa interna em produto global, acelerado
> pelo Google for Startups. Naveguei incerteza técnica com fail fast
> e estruturei métricas desde o dia 1.

**Resultado em destaque:**
Label: RESULTADO
Valor: Produto lançado e validado ✅ · 54% User Activation Rate

**Link:** Ler o case completo →
**Destino:** /cases/mogno-ai

---

## CARD 2 — Accountfy AI & Analytics

**Badge:** Growth & AI
**Título:** Accountfy: De Chatbots Básicos a IA que Gera Receita
**Subtítulo:** Product Manager · Jan 2025 – Out 2025
**Descrição:**
> Peguei chatbots desconectados e uma UX fragmentada. Transformei 
> em uma camada de IA coesa que reduziu tickets de suporte e cresceu 
> receita via upsell. Produtos selecionados pelo Google for Startups.

**Resultado em destaque:**
Label: RESULTADO
Valor: +11% revenue/mês · -22% tickets de suporte

**Link:** Ler o case completo →
**Destino:** /cases/accountfy-ai-analytics

---

## CARD 3 — Accountfy FP&A

**Badge:** Estratégia & Retenção
**Título:** Accountfy: Redesign que Transformou o Portfólio
**Subtítulo:** Product Manager / PO · Jul 2022 – Dez 2024
**Descrição:**
> Produto de orçamento com churn alto e UX defasada, ofuscado pelo 
> carro-chefe de controladoria. Redesenhei a experiência, reconstruí 
> o onboarding, e transformei o produto em peça central do portfólio.

**Resultado em destaque:**
Label: RESULTADO
Valor: -5pp churn mensal · -85% tempo de onboarding · +3~5% receita de upsell/mês

**Link:** Ler o case completo →
**Destino:** /cases/accountfy-fpa

---

## CARD 4 — Euphoria BI

**Badge:** Dados & Fundação
**Título:** Euphoria — Quando BI Vira Função Estratégica
**Subtítulo:** BI Analyst · Abr 2019 – Dez 2020
**Descrição:**
> Área de dados fragmentada em uma holding com 10+ empresas. 
> Estruturei BI como função central: Data Warehouse, ETL, dashboards 
> e cultura de dados. Impacto financeiro direto durante a pandemia.

**Resultado em destaque:**
Label: RESULTADO
Valor: -32,5% inadimplência financeira

**Link:** Ler o case completo →
**Destino:** /cases/euphoria-bi

---

# 9. HOMEPAGE — SEÇÃO 5: SOBRE

## Layout

Fundo: `--bg` (mesmo fundo da página).
Texto principal em coluna (~700px max-width).
Bloco de profundidade técnica com destaque visual: box `--card-bg`
com borda esquerda `--warn` (âmbar — distingue de "learning", que usa
`--accent` azul).
Linha de comunidade compacta.
Tags de expertise em grid de categorias, label da categoria em mono
uppercase (`--text-dim`).

---

## Título:
> Quem sou eu

## Texto principal:

> Sou engenheiro de produção por formação, mas product manager 
> por vocação, com uma parada técnica no meio que fez toda 
> a diferença.

> Comecei em 2016 escrevendo código. HTML, CSS, JavaScript, SQL, REST API, 
> ADVPL, ERP, processos industriais. Aprendi o que significa colocar 
> software em produção, debugar às 11 da noite e entender que "funciona 
> na minha máquina" não é entrega. Essa experiência me deu algo que nunca perdi: 
> a capacidade de falar a mesma língua do time de engenharia.

> De lá, migrei para planejamento estratégico em uma holding 
> (Grupo Euphoria), onde aprendi a pensar em sistemas: como áreas 
> se conectam, como decisões em um departamento impactam outro, 
> e como traduzir estratégia em execução em 10 empresas diferentes.

> Daí fui para BI, onde aprendi que dados sem contexto não servem 
> pra nada. Depois virei PO, onde aprendi que roadmap sem discovery 
> é achismo. Evolui para PM, onde entendi que produto sem métrica 
> é esperança. E cheguei a PM Senior, onde percebi que nada disso 
> funciona sem comunicação clara e alinhamento de stakeholders.

> O que conecta tudo: cada fase me deu uma camada que a próxima 
> precisava. Código me deu fluência técnica. Estratégia me deu 
> visão sistêmica. Dados me deram rigor. E produto juntou tudo.

> Hoje, meu foco está na interseção entre AI, dados e estratégia 
> de produto. Trabalho bem em ambientes com ambiguidade, gosto de 
> complexidade e acredito que a melhor versão de um PM é aquele que 
> faz o time ao redor ser melhor.

---

## Bloco "Profundidade técnica"

Implementação: box com destaque visual (borda lateral ou fundo 
diferenciado). Dentro da mesma seção, não separado.

> Quando um engenheiro me explica um trade-off técnico, eu entendo.
> Não porque li sobre, mas porque já vivi. Quando a equipe debate 
> uma decisão arquitetural, consigo contribuir, não só ouvir. 
> Na Mogno AI, essa fluência me permitiu estruturar testes de 
> validação técnica em horas e dialogar com a engenharia sem 
> intermediários. Em um mercado onde a maioria dos PMs depende 
> do tech lead para qualquer decisão técnica, eu consigo operar 
> com autonomia.

---

## Bloco "Comunidade"

Implementação: texto compacto, sem cards individuais. Uma linha.

> Fora de produto: mentor de startups early-stage na Evoa, 
> co-organizador do Accountfy Product Talk, palestrante nos 
> meetups DevParaná e Maringá PowerBI, e escrevo sobre product 
> management no The Product Path.

---

## Expertise (tags sem barras de porcentagem)

Implementação: tags/pills agrupadas por categoria. 
Sem barras, sem percentuais.

**Produto:**
Product Discovery · Product Strategy · Roadmap & Priorização · 
Stakeholder Management · OKR · Go-to-Market · User Stories

**Dados & Analytics:**
SQL · PowerBI · Amplitude · Google Analytics · Data Warehouse · 
ETL · Data Storytelling · Métricas de Produto

**Metodologias:**
SCRUM · Kanban · Design Sprint · Jobs to be Done · RICE · 
Continuous Discovery · Experimentação · Double Diamond

**Ferramentas:**
Jira · Miro · Figma · Confluence · Notion · Adobe XD · 
Jenkins · Git · Pentaho · AI Tech

---

# 10. HOMEPAGE — SEÇÃO 6: CTA FINAL

## Layout

Fundo: painel `--contrast-bg` centralizado (não é mais um gradiente
azul full-width — ver componente CTA section em styleguide.md).
Texto centralizado (`--contrast-foreground` / `--contrast-muted`).
Um botão primário (claro) + um secundário (borda), não os dois brancos.

## Título:
> Vamos conversar?

## Texto:
> Se você está procurando um PM que navega ambiguidade, 
> fala a língua de dados e entrega com ownership, eu adoraria 
> ouvir sobre o desafio que você tem.

## Botões:
- [Agendar uma conversa de 15 min, ícone de calendário SVG] → Calendar (booking time)
- [Me mandar um email, ícone de carta/envelope SVG] → mailto:guilhermenstorti@gmail.com

---

# 11. PÁGINA DE CASE: MOGNO AI

## Rota: /cases/mogno-ai — src/pages/mogno-ai-case-page.tsx
## Cor do hero: #8b5cf6 → #6d28d9 (roxo)

---

### HERO

**Badge:** 🚀 AI & Plataforma
**Título:** Mogno AI
**Subtítulo:**
> De iniciativa interna a produto global: como estruturei 
> a visão, o discovery e as métricas de um produto de IA 
> desde a fase zero, navegando incerteza técnica com fail fast 
> e experimentação constante.

**Metadados:**

| Período         | Cargo     | Foco                               | Status             |
|-----------------|-----------|------------------------------------|--------------------|
| Out 2025–Jul 2026 | PM Senior | Discovery, Métricas, Fail Fast, GTM | Produto em produção |

---

### CONTEXTO

A Mogno AI tinha algo promissor nas mãos: uma iniciativa de IA que gerava 
valor internamente e que havia sido selecionada para aceleração pelo 
Google for Startups. O potencial era claro, mas não existia produto. 
Não havia roadmap, não havia métricas, não havia visão de monetização.

Meu desafio era estruturar uma operação de produto completa,  
do discovery à mensuração, do posicionamento à internacionalização, 
e fazer isso com velocidade, porque o mercado de IA não espera.

---

### O PROBLEMA REAL

- **Sem métricas definidas.** Não sabíamos o que medir, nem como saber 
  se estávamos no caminho certo.
- **Discovery incompleto.** Havia premissas de negócio, mas não validação 
  com usuários reais.
- **Tecnologia evoluindo mais rápido que o produto.** IA generativa 
  estava mudando semana a semana. Os times de engenharia ainda estavam 
  aprendendo a trabalhar com essa tecnologia (e eu também).
- **Incerteza arquitetural.** Não era só "qual feature construir". 
  Era "qual abordagem técnica funciona?". Muitas vezes, ninguém na 
  sala tinha a resposta.

---

### O QUE EU FIZ

**Discovery orientado a dados**

Antes de priorizar qualquer feature, mergulhei no discovery. 
Conduzi entrevistas com potenciais usuários, estruturei hipóteses 
com critérios claros de validação e invalidação, e cruzei dados 
de mercado com insights qualitativos.

O insight mais importante: a dor do usuário não era "ter IA". Era ter 
IA que funcionasse dentro do workflow dele, sem fricção. Isso mudou 
completamente nosso posicionamento.

**Fail fast como método de sobrevivência**

Em um produto de IA em 2025, o chão se movia debaixo dos pés. 
A resposta foi transformar o fail fast em prática diária.

Para cada decisão arquitetural ou de produto que tínhamos dúvida, 
eu estruturava testes curtos (executáveis em poucas horas, não em 
sprints inteiras), com critério de sucesso definido antes da execução. 
Se passava, seguíamos. Se não, pivotávamos sem peso emocional.

Exemplo: duas abordagens arquiteturais possíveis para um componente 
crítico. Em vez de debater por dias, montei dois testes de poucas horas. 
Resultado inequívoco. Semanas de retrabalho economizadas.

Em uma sprint típica de uma semana, rodávamos 3-4 desses micro-experimentos 
em paralelo com o desenvolvimento principal.

**Métricas, roadmap e lançamento**

Defini o framework de métricas antes do lançamento: funil de 
aquisição, ativação, retenção e uso de features. Criei OKRs de 
produto alinhados à estratégia da empresa e estruturei o backlog 
conectando cada feature a um resultado de negócio mensurável.

Lançamos com early users, monitorei métricas diariamente, e pivotei 
features que achava importantes mas que os dados mostraram que 
ninguém usava.

---

### OS RESULTADOS

- **Produto lançado e em produção.** De iniciativa interna para 
  produto real, com usuários e gerando valor.
- **Nova frente de negócio com atuação internacional.** O que era 
  um projeto interno virou uma nova unidade.
- **Métricas claras desde o dia 1.** Todas as decisões subsequentes 
  foram baseadas em dados.
- **Cultura de experimentação implantada.** Fail fast virou prática 
  do time, não só discurso.

---

### O QUE APRENDI

**1. Fail fast precisa de estrutura para funcionar.**
Sem critério de sucesso definido antes, sem execução em horas 
(não semanas), e sem comprometimento real em pivotar, "fail fast" 
é só bagunça rápida.

**2. Métricas antes do código.**
Se você espera o produto estar no ar para começar a medir, 
perde meses de dados valiosos e toma decisões no escuro quando 
mais precisa de clareza.

**3. Caos é contexto, não desculpa.**
Produto novo, time novo, mercado desconhecido, tecnologia mutante. 
O trabalho do PM não é eliminar o caos, é navegar nele com clareza 
suficiente para o time executar.

---

### CTA DO CASE

**Título:** Quer saber mais sobre esse case?
**Texto:** Cada projeto tem camadas que não cabem aqui. 
Se quiser ir mais fundo em metodologia, decisões ou learnings, 
é só agendar.
**Botões:** [Agendar conversa] · [Enviar email]

---

# 12. PÁGINA DE CASE: ACCOUNTFY AI & ANALYTICS

## Rota: /cases/accountfy-ai-analytics — src/pages/accountfy-ai-analytics-case-page.tsx
## Cor do hero: #8b5cf6 → #a78bfa (roxo claro)

---

### HERO

**Badge:** 🚀 Growth & AI
**Título:** Accountfy — AI & Analytics
**Subtítulo:**
> De chatbots básicos e desconectados a uma camada de IA coesa 
> que reduziu tickets de suporte em 22% e cresceu receita em 11% 
> ao mês.

**Metadados:**

| Período          | Cargo           | Foco                                   | Status                  |
|------------------|-----------------|----------------------------------------|-------------------------|
| Dez 2024–Out 2025 | Product Manager | Estratégia de Produto, AI/ML, Métricas | Resultados consolidados |

---

### CONTEXTO

A Accountfy é uma fintech SaaS B2B de gestão financeira, investida 
pela Redpoint Eventures, com mais de 350 empresas clientes em 
11 países. Quando assumi as squads de IA/Inovação e Analytics, 
o produto tinha "features de IA", mas na prática eram chatbots 
muito básicos, desconectados entre si, com bases de conhecimento 
fragmentadas e funcionamento inconsistente.

Para o usuário, era confuso. Para o time de CS, era fonte de 
tickets. Para a liderança, era investimento sem retorno claro.

---

### O PROBLEMA REAL

- **Chatbots rudimentares** que não compartilhavam contexto 
  e funcionavam de forma isolada.
- **UX fragmentada.** Cada chatbot parecia um produto diferente.
- **Métricas ausentes.** Ninguém sabia quais features estavam 
  sendo usadas, por quem, com que frequência.
- **Pressão de revenue.** A empresa precisava que IA gerasse upsell, 
  e ninguém tinha clareza de como.

---

### O QUE EU FIZ

**Discovery e diagnóstico**

Analisei dados de uso, conduzi entrevistas com clientes e mapeei 
a jornada do usuário com as features de IA. O diagnóstico: o problema 
não era a IA em si. Era a experiência em volta dela.

**Estratégia de coesão**

Redesenhei a arquitetura de informação para criar uma experiência 
unificada. Em vez de chatbots isolados, o usuário passou a ter 
uma camada de inteligência integrada ao workflow.

Estruturei um framework de métricas unificado e auxiliei outros POs 
a definirem métricas estratégicas e criarem dashboards por squad.

**Execução**

Os produtos de IA foram selecionados para aceleração pelo 
Google for Startups. Contribuí para a expansão internacional 
(LATAM e EUA).

---

### OS RESULTADOS

- **-22% ao mês em tickets de CS.**
- **+11% ao mês em receita via upsell.**
- **Aumento na precisão das interações** e redução no tempo 
  gasto pelo usuário nos fluxos.
- **Google for Startups.** Reconhecimento externo da estratégia.

---

### O QUE APRENDI

**1. Coesão vale mais que features.**
Ter 10 chatbots desconectados é pior que ter 3 bem integrados. 
O valor está na experiência completa, não na quantidade.

**2. IA precisa ser invisível para ser útil.**
O melhor elogio que um produto de IA pode receber é o usuário 
nem perceber que está usando IA. Ele só percebe que o trabalho 
ficou mais fácil.

**3. Em IA, o PM precisa de fluência técnica.**
Não precisa codar o modelo. Mas precisa entender o suficiente 
para fazer as perguntas certas e avaliar trade-offs sem depender 
100% da engenharia.

---

### CTA DO CASE

**Título:** Quer saber mais sobre esse case?
**Texto:** Cada projeto tem camadas que não cabem aqui. 
Se quiser ir mais fundo em metodologia, decisões ou learnings, 
é só agendar.
**Botões:** [Agendar conversa] · [Enviar email]

---

# 13. PÁGINA DE CASE: ACCOUNTFY FP&A

## Rota: /cases/accountfy-fpa — src/pages/accountfy-fpa-case-page.tsx
## Cor do hero: #10b981 → #059669 (verde)

---

### HERO

**Badge:** 🎯 Estratégia & Retenção
**Título:** Accountfy — FP&A
**Subtítulo:**
> Produto com churn alto, ofuscado pelo carro-chefe da empresa. 
> Conduzi um redesign completo que não só salvou a retenção, 
> mas transformou o produto em peça central do portfólio.

**Metadados:**

| Período          | Cargo              | Foco                                 | Status                  |
|------------------|--------------------|--------------------------------------|-------------------------|
| Jul 2022–Dez 2024 | PO → Product Manager | Retenção, UX, Onboarding, Estratégia | Resultados consolidados |

---

### CONTEXTO

A squad de FP&A era responsável pelo produto de planejamento 
orçamentário da Accountfy — fintech SaaS B2B investida pela 
Redpoint Eventures, com 350+ clientes em 11 países. 
Era um produto robusto, mas que vivia na sombra do carro-chefe: 
controladoria e fechamento contábil.

O produto de orçamento era visto como "complementar". 
UX defasada, churn crescente, e a percepção de que era 
"mais um" na categoria.

Entrei como Junior PO e evoluí ao longo de quase 3 anos. 
Isso me deu uma visão longitudinal rara.

---

### O PROBLEMA REAL

- **Churn crescente.** Especialmente nos primeiros meses.
- **UX acumulada.** Anos de features sem redesign.
- **Onboarding doloroso.** Longo, dependente de suporte humano.
- **Produto ofuscado.** O carro-chefe recebia toda a atenção.

---

### O QUE EU FIZ

**Entender antes de agir**

Conversei extensivamente com clientes que deram churn,
não com os que ficaram. Os que saíram contaram o que eu 
precisava saber: a curva de aprendizado era íngreme demais. 
Quem sobrevivia aos primeiros 60 dias ficava. O problema 
não era o produto. Era a entrada no produto.

**Redesign + Onboarding**

Conduzi uma reformulação completa da experiência. Não iteração, redesign. 
Simplificação de fluxos, reorganização da arquitetura 
de informação, eliminação de passos desnecessários.

O onboarding virou um projeto dentro do projeto. O resultado 
foi tão positivo que a empresa criou uma squad dedicada,
nascida dessa iniciativa, que reduziu em 85% o tempo de 
onboarding de usuários novos e colaboradores.

Depois do redesign, o produto de orçamento deixou de ser 
"o complemento" e passou a compor o portfólio de igual para 
igual com controladoria. O produto que era "mais um" virou 
um pilar da oferta.

---

### OS RESULTADOS

- **-5 pontos percentuais de churn mensal.** Impacto direto 
  em LTV e receita recorrente.
- **-85% no tempo de onboarding.**
- **Produto reposicionado no portfólio** da empresa.
- **Capterra Ease of Use 2025.** A experiência redesenhada 
  contribuiu para o produto receber o selo Capterra Ease of Use 
  2025, uma validação externa de usabilidade por avaliações reais 
  de usuários. O produto também recebeu o selo Best Value 2025.

Implementação: exibir os selos Capterra como imagens ao lado 
dos resultados (arquivos em public/assets/img/capterra/).

---

### O QUE APRENDI

**1. Quem saiu conta mais que quem ficou.**
Os insights mais valiosos sobre retenção vieram de clientes que 
deram churn. Eram honestos. E honestidade é o que discovery precisa.

**2. Onboarding é produto, não suporte.**
Quando o onboarding depende de uma pessoa do CS passar horas 
com cada cliente, não é onboarding, é consultoria disfarçada.

**3. Um bom produto muda sua própria percepção.**
Não precisei convencer ninguém de que o produto era bom. 
Os números fizeram isso. Quando churn caiu e adoção subiu, 
a percepção interna mudou sozinha.

---

### CTA DO CASE

**Título:** Quer saber mais sobre esse case?
**Texto:** Cada projeto tem camadas que não cabem aqui. 
Se quiser ir mais fundo em metodologia, decisões ou learnings, 
é só agendar.
**Botões:** [Agendar conversa] · [Enviar email]

---

# 14. PÁGINA DE CASE: EUPHORIA BI

## Rota: /cases/euphoria-bi — src/pages/euphoria-bi-case-page.tsx
## Cor do hero: #3b82f6 → #1e40af (azul)

---

### HERO

**Badge:** 📊 Dados & Fundação
**Título:** Euphoria — Fundação de BI
**Subtítulo:**
> Como construí a área de Business Intelligence de uma holding 
> com 10+ empresas, transformando dados dispersos em decisões 
> estratégicas, e reduzindo inadimplência em 32,5% 
> durante a pandemia.

**Metadados:**

| Período          | Cargo      | Foco                                   | Status                 |
|------------------|------------|----------------------------------------|------------------------|
| Abr 2019–Dez 2020 | BI Analyst | Data Warehouse, ETL, Dashboards, Cultura | Fundação consolidada  |

---

### CONTEXTO

O Grupo Euphoria era uma holding com mais de 10 empresas. 
Cada unidade tinha seus próprios processos, planilhas, softwares e verdades 
sobre os números. Não existia fonte única de dados. Decisões 
eram tomadas com base em intuição.

Quando entrei, não existia a função de BI na empresa. 
Quando saí, BI era uma área central que orientava decisões 
executivas em múltiplas unidades.

Esse case é diferente dos outros: não é sobre produto digital. 
É sobre a fundação que me tornou o PM orientado a dados 
que sou hoje.

---

### O PROBLEMA REAL

- **Dados fragmentados.** Ferramentas e definições diferentes 
  em cada empresa do grupo.
- **Sem governança.** "Receita" significava coisas diferentes 
  para departamentos diferentes.
- **Decisões no escuro.** Diretoria decidia com experiência, 
  não com dados.
- **Pandemia.** Em 2020, a crise amplificou cada problema 
  que já existia.

---

### O QUE EU FIZ

**Fundação técnica**

Projetei Data Warehouses centralizados, construí processos 
de ETL com Pentaho, padronizei definições de métricas e 
estruturei bancos de dados com SQL e PostgreSQL.

**Visualização e storytelling**

Criei dashboards que contavam histórias, não que só mostravam 
números. Painéis executivos para a diretoria e dashboards 
operacionais para cada área, usando Pentaho, PowerBI e 
tecnologias web.

**Mudança cultural**

Convencer pessoas que sempre decidiram pela intuição a confiarem 
nos dados. Não se faz com uma apresentação. Se faz com pequenas 
vitórias: um dashboard que economiza 2 horas, um dado que evita 
uma decisão errada.

---

### OS RESULTADOS

- **-32,5% em inadimplência financeira durante a pandemia.**
- **BI consolidado como função central** da organização.
- **Padronização de processos de dados** em múltiplas empresas.
- **76% das metas alcançadas** no planejamento estratégico 
  estruturado em 10 empresas.

---

### O QUE APRENDI

**1. Cultura de dados é projeto, não palestra.**
A primeira pessoa que usou um dashboard para tomar uma decisão 
melhor virou meu maior evangelista. Uma vitória vale mais que 
10 apresentações.

**2. Dados sem governança são piores que sem dados.**
Um número errado em que todo mundo confia é mais perigoso 
que não ter número nenhum.

**3. Essa experiência definiu quem sou como PM.**
Tudo que faço hoje — métricas, dashboards, cultura de dados — 
nasceu aqui. Não é teoria de curso. É prática do zero.

---

### CTA DO CASE

**Título:** Quer saber mais sobre esse case?
**Texto:** Cada projeto tem camadas que não cabem aqui. 
Se quiser ir mais fundo em metodologia, decisões ou learnings, 
é só agendar.
**Botões:** [Agendar conversa] · [Enviar email]

---

# 15. ELEMENTOS GLOBAIS

## Header (todas as páginas)

**Posição:** Sticky (fixo no topo ao rolar).
**Fundo:** `--nav-bg` (translúcido, com blur) com borda inferior sutil
(`--border-soft`).

**Homepage:**
Logo (GN) | Cases | Sobre | [Botão: Conversar]

**Páginas de case:**
Logo (GN) | ← Voltar

Comportamento: Logo sempre linka para a rota `/`.
"Conversar" abre Calendar (booking time) em nova aba.

---

## Footer (todas as páginas)

**Fundo:** `--bg` (mesmo da página), separado por borda superior sutil
(`--border-soft`). Texto em `--text-muted`, links com hover `--accent`.

**Links:** LinkedIn · Email · GitHub · WhatsApp
**Crédito:** © 2025 Guilherme Storti. Feito com café e obsessão por produto.

---

## Página 404

**Rota:** `*` (catch-all) — src/pages/not-found-page.tsx

**Texto:**
> Nem toda feature vai para produção.
> Esta, por exemplo, ficou no backlog.
> Enquanto isso, você pode: 
> [Voltar pro portfólio] ou [me mandar uma mensagem].

**Implementação:** Fundo `--bg` (mesmo da página), texto centralizado,
tom leve. GIF animado ainda não implementado (usando emoji 🚧 como
placeholder).
Botão principal navega para a rota `/` via React Router (sem reload de página).

---

# 16. SEO E OPEN GRAPH

## Títulos (<title>)

```
Homepage:
Guilherme Navakoski Storti — Product Manager Senior | AI · Dados · Estratégia

Mogno AI:
Case: Mogno AI — Do Zero ao Lançamento | Guilherme Storti

Accountfy AI:
Case: Accountfy AI & Analytics — Growth via IA | Guilherme Storti

Accountfy FP&A:
Case: Accountfy FP&A — Redesign e Retenção | Guilherme Storti

Euphoria BI:
Case: Euphoria BI — Fundação de Dados | Guilherme Storti
```

## Meta descriptions

```html
<!-- Homepage -->
<meta name="description" content="PM Senior com 6+ anos em produtos 
digitais. Experiência em AI, analytics e estratégia. Cases com 
impacto mensurável.">

<!-- Cases (usar em todas as páginas de case) -->
<meta name="description" content="Case real de gestão de produto: 
contexto, problema, abordagem, resultados e learnings. 
Por Guilherme Storti, PM Senior.">
```

## Open Graph (para preview no LinkedIn e redes)

```html
<meta property="og:title" content="Guilherme Storti — Product Manager Senior">
<meta property="og:description" content="Portfólio com cases reais de produto, métricas e impacto. AI, dados e estratégia.">
<meta property="og:image" content="[URL DA IMAGEM DE PREVIEW]">
<meta property="og:url" content="[URL DO PORTFOLIO]">
<meta property="og:type" content="website">
```

## Keywords

```html
<meta name="keywords" content="Product Manager, PM Senior, AI, 
Product Strategy, Digital Products, Data-Driven, SaaS, B2B">
```

---

# 17. GUIA DE TOM E LINGUAGEM

## O que FAZER:
- Primeira pessoa ("fiz", "conduzi", "decidi").
- Específico com números sempre que possível.
- Vulnerabilidade nos learnings ("errei", "pivotei", "doeu").
- Frases curtas nos destaques.
- Linguagem que um não-PM entende (RH precisa entender).
- Hero e Sobre: descontraído, humano, quebra quarta parede.
- Cases: estratégico, preciso, maduro.

## O que NÃO FAZER:
- Jargão sem contexto ("alavancamos synergies cross-functional").
- Exagerar. Se o número é bom, ele fala por si.
- Ser genérico. "Conduzi discovery com clientes e pivotei 
  o posicionamento" > "Liderei squad".
- Ignorar o time. Quando possível, "conduzimos", "trabalhamos".
- Ser arrogante. Confiança ≠ arrogância.

---

# 18. MAPA DE LEARNINGS (referência de consistência)

Nenhum learning se repete entre cases:

| Learning                                      | Case          |
|-----------------------------------------------|---------------|
| Fail fast precisa de estrutura                 | Mogno         |
| Métricas antes do código                       | Mogno         |
| Caos é contexto, não desculpa                  | Mogno         |
| Coesão vale mais que features                  | Accountfy AI  |
| IA precisa ser invisível pra ser útil           | Accountfy AI  |
| PM precisa de fluência técnica em IA            | Accountfy AI  |
| Quem saiu conta mais que quem ficou             | Accountfy FPA |
| Onboarding é produto, não suporte               | Accountfy FPA |
| Um bom produto muda sua percepção               | Accountfy FPA |
| Cultura de dados é projeto, não palestra         | Euphoria      |
| Dados sem governança são piores que sem dados    | Euphoria      |
| Essa experiência definiu quem sou                | Euphoria      |

12 learnings. 3 por case. Zero sobreposição.

---

# 19. NOTAS INTERNAS (NÃO PUBLICAR)

## Sobre experiências de dev como cases separados

Não criar cases individuais — sem indicadores mensuráveis, 
ficariam frágeis. O valor está na seção "Sobre" (arco técnico) 
e no bloco de profundidade técnica. Se no futuro quiser expandir, 
criar um "Case de Origem" compacto com os números da Teclaser 
(-22% custos, +15% capacidade, -32% rejeitos).

## Ordem de prioridade para implementação

1. Hero + Quick Scan (80% das pessoas só vão ver isso)
2. Logos (prova social antes dos cases)
3. Case Mogno AI (mais forte, precisa estar perfeito)
4. Sobre (consolidado: narrativa + técnico + comunidade)
5. Case Accountfy AI (impacto em growth)
6. Case Accountfy FP&A (profundidade, estratégia + Capterra)
7. Case Euphoria BI (base de dados)
8. CTA final + Microcopy (polimento)

## Links pendentes de configuração

- [x] Logos dos clientes inseridas (12, em PNG — todas as empresas listadas em §7)
- [ ] Buscar/criar imagens dos selos Capterra
- [ ] Gerar imagem de preview para Open Graph
- [ ] Exportar CV atualizado em PDF