# API REST com Node.js

Este é um projeto de API REST desenvolvido com Node.js e TypeScript, utilizando o framework Express.

## Descrição

O objetivo deste projeto é criar uma API REST robusta e escalável para gerenciar produtos, seguindo as melhores práticas de desenvolvimento de software.
## Preview
[VisualizaçãoDoProjeto](./preview.png)

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript no servidor.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **Express**: Framework web para Node.js, utilizado para criar as rotas da API.
-   **tsx**: Ferramenta para executar arquivos TypeScript diretamente, sem a necessidade de compilação prévia em ambiente de desenvolvimento.
-   **Zod**: Biblioteca para validação de esquemas e tipos de dados.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── src/
│   ├── controller/       # Controladores (lógica de negócio)
│   ├── middlewares/      # Middlewares de requisição
│   ├── route/            # Definição das rotas da API
│   ├── types/            # Definições de tipos TypeScript
│   └── utils/            # Funções e classes utilitárias
├── package.json          # Dependências e scripts do projeto
└── tsconfig.json         # Configurações do TypeScript
```

## Como Começar

### Pré-requisitos

-   Node.js (versão 20 ou superior)
-   npm (geralmente vem com o Node.js)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd api-rest
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando em Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload, execute o seguinte comando:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000` (ou a porta definida no ambiente).

## Autor

**Charles Thomaz**
