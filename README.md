## API com Clean Architecture em TypeScript

Este é um projeto de API construído com base no conceito de Clean Architecture, usando TypeScript. O objetivo é criar uma estrutura bem organizada e escalável, com separação clara de responsabilidades entre as camadas de aplicação.

A Clean Architecture é uma abordagem que enfatiza a separação de preocupações e a independência de frameworks ou bibliotecas externas. Isso permite que o código seja facilmente testável, mantido e estendido ao longo do tempo.

## Tecnologias utilizadas
- TypeScript
- Node.js
- Express
- TypeORM
- Jest

## Estrutura do projeto
A estrutura do projeto segue o padrão recomendado pela Clean Architecture, com quatro camadas distintas:

**Domain Layer:** contém as regras de negócio e as entidades do domínio.
**Application Layer:** contém a lógica de aplicação, incluindo os casos de uso da aplicação.
**Infrastructure Layer:** contém a implementação concreta de repositórios e serviços, além de outros recursos de infraestrutura.
**Presentation Layer:** contém a lógica de apresentação e as interfaces de usuário.