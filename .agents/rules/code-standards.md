Padrões de código

* Todo o código-fonte deve ser escrito em inglês.

```ts
// Bom
const invoiceAmount = 100;
// Ruim
const valorDaNota = 100;
```

* Use camelCase para métodos, funções e variáveis; PascalCase para classes e interfaces; e kebab-case para arquivos e pastas.

```ts
// camelCase
function calculateTotal() {}
const itemCount = 5;

// PascalCase
class PaymentGateway {}
interface UserProfile {}

// kebab-case
// payment-gateway.ts
// user-profile/
```

* Evite abreviações, mas também não use nomes excessivamente longos (mais de 30 caracteres).

```ts
// Bom
const customerAddress = "...";
// Ruim (abreviação)
const custAddr = "...";
// Ruim (longo demais)
const theCompleteCustomerMailingAddress = "...";
```

* Declare constantes para representar números mágicos com clareza.

```ts
// Bom
const MAX_LOGIN_ATTEMPTS = 5;
if (attempts > MAX_LOGIN_ATTEMPTS) { ... }

// Ruim
if (attempts > 5) { ... }
```

* Métodos e funções devem executar uma ação clara e bem definida, refletida no nome, que deve começar com verbo, nunca com substantivo.

```ts
// Bom
function calculateDiscount() {}
function sendEmail() {}

// Ruim
function discount() {}
function email() {}
```

* Sempre que possível, evite passar mais de 3 parâmetros. Prefira objetos, se necessário.

```ts
// Bom
function createUser(input: { name: string; email: string; age: number; role: string }) {}

// Ruim
function createUser(name: string, email: string, age: number, role: string) {}
```

* Siga CQS (Command Query Separation), evitando efeitos colaterais ao chamar métodos e funções. Devem ter sempre o propósito de mutação ou de consulta, nunca os dois. Nesses casos, prefira separar.

```ts
// Bom — separado
function getBalance(): number { return this.balance; }
function withdraw(amount: number): void { this.balance -= amount; }

// Ruim — consulta + mutação no mesmo método
function getAndResetBalance(): number {
  const balance = this.balance;
  this.balance = 0;
  return balance;
}
```

* Evite aninhar mais de dois comandos condicionais (if/else); prefira retornos antecipados e evite `else`.

```ts
// Bom
function process(order: Order) {
  if (!order) return;
  if (!order.isValid()) return;
  // lógica principal aqui
}

// Ruim
function process(order: Order) {
  if (order) {
    if (order.isValid()) {
      if (order.hasItems()) {
        // aninhamento profundo
      }
    }
  }
}
```

* Evite parâmetros booleanos de comportamento em métodos e funções. Nesses casos, prefira separar em comportamentos específicos.

```ts
// Bom
function sendEmailAsText(content: string) {}
function sendEmailAsHtml(content: string) {}

// Ruim
function sendEmail(content: string, isHtml: boolean) {}
```

* Evite métodos longos, com mais de 50 linhas. Prefira dividir.

* Evite classes longas, com mais de 300 linhas. Prefira dividir.

* Evite o uso de comentários sempre que possível.

* Nunca declare mais de uma variável na mesma linha.

```ts
// Bom
const name = "John";
const age = 30;

// Ruim
const name = "John", age = 30;
```

* Declare variáveis o mais próximo possível de onde serão usadas.