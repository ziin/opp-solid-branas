# OOP

A principal função da Orientação a Objetos é **abstrair complexidade**. Diminuir duplicidade, ter um código mais flexível.

Apenas fazer o uso das classes, atributos e métodos não quer dizer necessariamente que estamos utilizando OOP.

Manter a **coesão** é muito importante. É cruzando a relação entre atributos e métodos que percebemos o nível de coesão de uma classe. Se algum método não faz uso dos atributos da classe, ou se há algum atributo sobrando, que não faz muito sentido na classe, talvez seria melhor move-lo para uma classe diferente.

Coesão precisa ser bem alta, uma classe precisa ter um objetivo claro, um propósito claro. Com isso se contrói um alicerce muito grande para o reuso. Fazendo o uso de interfaces bem definidas e usando modificadores de acesso, deixando exposto o mínimo necessário são maneiras de abaixar o **acoplamento**.

Deve se haver pouco **acoplamento** entre classes. A medida que uma classe se torna dependente de outra, o código se torna frágil, por que ao mexer numa classe, pode se quebrar a outra.

# SOLID

### Usabilidade

- Single Responsability e Dependency Inversion são coisas princípios usados de forma abrangente.
- Open Closed, Liskov Substitution e Interface Segregation devem ser pensados seletivamente aonde e se devem ser aplicados.

## Single Responsability

> Deve haver apenas uma responsabilidade.

### Como notar?

- Se há vários motivos pra uma classe mudar, provavelmente ela tem mais de uma responsabilidade.

### Exemplo

1. Ela pode mudar por que adicionei várias redes sociais ou seja para lidar com aspectos relacionados com a DOM

## Open Closed

> Deve estar aberta para extensão e fechada para modificação.

> Você deve ser capaz de estender um comportamento de uma classe sem a necessidade de modificá-lo.

### Como notar?

- Se uma classe ou método de convida para modificação.
- Se há vários IFs, switchs, etc.

## Liskov Substitution

> As classes derivadas devem ser substituíveis por suas classes bases.

> É um problema conceitual de abstração onde precisamos resolver o problema da modelagem.

> A subclasse não pode quebrar as expectativas estabelecidas pela super classe.

- **Pré condições não devem ser enrijecidas.**
  1. Exemplo do pato com bateria. Na hora que ele vai nadar, não se pode tirar a bateria.
- **Pós condições não devem ser enfraquecidas.**
  1. Se na classe pai esta definido que pode-se receber um número inteiro, uma classe filha não poderá se limitar em receber apenas números inteiros positivos.

## Interface Segregation

> Crie interfaces granulares a específicas para os seus clientes.

> Clientes não devem ser forçados a depender de interfaces que eles não usam.

- Reforça a idéia de se trabalhar com contratos.
- É fundamental para conseguir viabilizar toda a idéia de Single Responsability.
- É fundamental para Open Closed, por derivar outras interfaces.
- Ainda mais fundamental para a Liskov Substitution, por ter que se pensar várias vezes a sua hierarquia de classes.

## Dependency Inversion

> Dependa de abstrações e não de implementações.

- Abstrações não devem depender de detalhes.
- Abstrações não devem depender de implementações concretas.
- Abstrações devem depender somente de outras abstrações.
- Deve haver um contrato mediando a implementação.
- Em desenvolvimento e em testes, podemos usar um mock da implementação.

De uma forma objetiva o princípio nos faz entender que sempre devemos depender de abstrações e não das implementações, afinal de contas, as abstrações mudam menos e facilitam a mudança de comportamento e as evoluções do código.

# Adicionais

## Classes Abstratas

- São parcialmente implementadas;
- Não podem ser instanciadas diretamente;
- Obrigam as sub-classes a adotarem atributos e/ou métodos por meio da keyword `abstract`;
- No Typescript compila para funções em Javascript.

## Interfaces

- Todos os membros são abstratos;
- Não possui implementação;
- Podem haver multiplas assinaturas;
- São genéricas por natureza;
- No Typescript, não gera nenhum código ao compilar para Javascript.

# Reference

[SOLID com TypeScript // Live #37](https://www.youtube.com/watch?v=899Qa6sQcRc)
