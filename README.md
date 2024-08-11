# Customer CRUD with Hexagonal Architecture

Este projeto é um CRUD básico de cadastro de clientes, implementado em NodeJS com TypeScript, seguindo os princípios da Hexagonal Architecture (Ports and Adapters).

## Estrutura do Projeto

- **domain/**: Contém as entidades de domínio do sistema.
- **application/**: Contém a lógica de negócios e os serviços da aplicação.
- **infrastructure/**: Contém os adaptadores para tecnologias externas, como banco de dados e servidores HTTP.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd customer-crud-hexagonal
