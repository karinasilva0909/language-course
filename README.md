# Online Language Course with Hexagonal Architecture

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

# Online Language Course - Student Management

## Histórico de Alterações

### [11/08/2024]
**Adicionar funcionalidade CRUD para gerenciamento de alunos**

- Implementada a entidade de domínio `Student`
- Criada a camada de serviço para operações com alunos
- Desenvolvido repositório em memória para armazenar alunos
- Adicionado controlador HTTP para endpoints relacionados a alunos
- Integradas operações CRUD: criar, ler, atualizar, excluir
- Atualizada a estrutura do projeto para alinhar com a Arquitetura Hexagonal
