Node.js/JavaScript/TypeScript

* Todo o código-fonte deve ser escrito em TypeScript.

* Use npm como ferramenta padrão para gerenciar dependências e executar scripts. Nunca use outras ferramentas para essa finalidade.

```bash
npm install
npm run build
```

* Se necessário, instale os tipos das bibliotecas. O Vitest já traz tipos TypeScript; para outras libs sem declarações embutidas, use `@types/<pacote>` quando existir no DefinitelyTyped.

```bash
npm install vitest --save-dev
```

* Antes de concluir uma tarefa, valide sempre se a tipagem está correta.

* Use `const` em vez de `let` sempre que possível.

```ts
// Bom
const maxRetries = 3;
// Use let apenas quando houver reatribuição
let currentAttempt = 0;
```

* Nunca use `var` para declarar variável.

* Declare sempre propriedades de classe como `private` ou `readonly`, evitando `public`.

```ts
class User {
  private name: string;
  readonly id: string;
}
```

* Prefira `find`, `filter`, `map` e `reduce` em vez de `for` e `while`.

```ts
// Bom
const activeUsers = users.filter(u => u.isActive);
const names = users.map(u => u.name);

// Ruim
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) activeUsers.push(users[i]);
}
```

* Prefira arrow functions sempre que possível.

```ts
const sum = (a: number, b: number): number => a + b;
```

* Use sempre async/await para tratar promises. Evite callbacks.

```ts
// Bom
const data = await fetchData();

// Ruim
fetchData().then(data => { ... });
```

* Nunca use `any`. Use tipos existentes ou crie tipos para tudo que for implementado.

```ts
// Bom
interface UserInput { name: string; email: string; }
function createUser(input: UserInput): User { ... }

// Ruim
function createUser(input: any): any { ... }
```

* Nunca use `require` para importar módulos. Use sempre `import`.

```ts
// Bom
import express from "express";

// Ruim
const express = require("express");
```

* Nunca use `module.exports` para exportar módulos. Use sempre `export`.

```ts
// Bom
export default class User {}
export { calculateTotal };

// Ruim
module.exports = User;
```

* Se o arquivo exportar uma única coisa, use `default`. Caso contrário, use named exports.

```ts
// Export único — default
export default class PaymentService {}

// Vários exports — nomeados
export function formatDate() {}
export function parseDate() {}
```