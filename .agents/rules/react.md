React

* Use componentes funcionais, nunca classes.

```tsx
// Bom
const Button = ({ label }: { label: string }) => <button>{label}</button>;

// Ruim
class Button extends React.Component { ... }
```

* Use TypeScript e a extensão `.tsx` para componentes.

* Mantenha o estado do componente o mais próximo possível de onde será usado.

* Passe propriedades explicitamente entre componentes. Evite spread de props.

```tsx
// Bom
<Img width={100} height={100} src={url} />

// Ruim
<Img {...props} />
```

* Evite componentes muito grandes, acima de 100 linhas.

* Use a Context API quando precisar comunicar entre componentes filhos diferentes.

```tsx
const AuthContext = createContext<AuthState | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => (
  <AuthContext.Provider value={useAuthState()}>
    {children}
  </AuthContext.Provider>
);
```

* Use Tailwind para estilizar componentes. Não use styled-components.

```tsx
// Bom
<button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>

// Ruim
const StyledButton = styled.button`background: blue;`;
```

* Evite excesso de componentes pequenos.

* Use o hook `useMemo` para evitar cálculos excessivos e interações desnecessárias entre renders.

```tsx
const sortedItems = useMemo(() => items.sort((a, b) => a.price - b.price), [items]);
```

* Nomeie hooks com o prefixo `use`. Por exemplo: useAuth, useLocalStorage, useUrl.

```ts
function useAuth() { ... }
function useLocalStorage(key: string) { ... }
```

* Antes de criar um componente complexo novo, pergunte se deve ser usada uma biblioteca existente.

* Crie testes automatizados para todos os componentes.

* Procure sempre reutilizar componentes existentes. Em dúvida, pergunte antes de criar um novo.