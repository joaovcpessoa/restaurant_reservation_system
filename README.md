## Requisitos do Projeto

### Objetivo Principal

Desenvolver uma API RESTful para:

- Registrar reservas de mesas.
- Controlar o status das reservas e das mesas.
- Bloquear reservas quando a mesa estiver ocupada.

### Stack utilizado

- <b>Backend:</b> Node.js (Express)
- <b>Banco de Dados:</b> PostgreSQL
- <b>Autenticação:</b> JWT (JSON Web Tokens)

### Estrutura do projeto:
| Pasta | Responsabilidade |
| ----- | ---------------- |
| controllers | Recebem a requisição HTTP, chamam os serviços e devolvem a resposta. |
| models | Definem as estruturas do banco de dados |
| routes | Definem as rotas da API, como GET /users ou POST /reservations |
| middlewares | Funções que interceptam requisições, como autenticação com JWT |
| services | Onde fica a lógica de negócio, como "criar uma reserva" ou "verificar disponibilidade" |
| config |Arquivos de configuração, como dados do banco de dados, JWT secret, etc |
| server.js |	Ponto de entrada da aplicação. Onde o servidor é iniciado |

### Pacotes utilizados

| Pacote | Função           |
| ------ | ---------------- |
| express	| Framework web para criar rotas e endpoints de API |
| jsonwebtoken | Serve para criar e verificar tokens JWT (autenticação) |
| bcryptjs | Biblioteca para criptografar senhas (hash) |
| dotenv | Permite usar variáveis de ambiente salvas em um arquivo .env |
| pg | Driver para conectar com banco de dados PostgreSQL |
| sequelize | ORM que facilita o uso do banco sem escrever SQL diretamente |

### Endpoints da API

```bash
/src
├── config/
│   └── database.js  ← conexão com o banco
│
├── controllers/
│   ├── authController.js
│   ├── tableController.js
│   └── reservationController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   ├── user.js
│   ├── table.js
│   └── reservation.js
│
├── routes/
│   ├── authRoutes.js
│   ├── tableRoutes.js
│   └── reservationRoutes.js
│
├── utils/
│   └── jwt.js
│
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

<details>
<summary><b>Comandos NPM</b></summary>

### npm init -y
`npm` é o gerenciador de pacotes do Node.js. Ele instala bibliotecas (como Express) e gerencia as dependências do seu projeto. Esse comando cria automaticamente um arquivo package.json, que é o coração do seu projeto Node.js.

Exemplo de package.json gerado:

```json
{
  "name": "sistema-reservas",
  "version": "1.0.0",
  "main": "index.js",
  "license": "ISC"
}
```

O package.json é um dos arquivos mais importantes de qualquer projeto Node.js. Ele funciona como a identidade e o cérebro da aplicação. É um arquivo de configuração usado pelo Node.js e pelo npm (ou yarn) que:

- Define informações do projeto
- Gerencia as dependências instaladas
- Organiza scripts de execução
- Ajuda a compartilhar ou implantar o projeto corretamente

Por que o package.json é importante?
1. Gerencia as dependências do projeto, registrando todas as bibliotecas que o projeto usa. Isso permite que outra pessoa (ou servidor) instale tudo com um único comando `npm install`.

```json
"dependencies": {
  "express": "^4.18.2",
  "sequelize": "^6.31.1"
}
```
2. Controla versões de pacotes, evitando que seu projeto quebre por atualizações indesejadas. O `^` permite atualizar até a próxima versão secundária. Você pode controlar isso para manter o projeto estável.

3. Define scripts personalizados, sendo possível criar atalhos de comandos usando scripts. Assim, em vez de digitar `nodemon index.js`, basta rodar `npm run dev`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

4. Facilita o deploy e colaboração, então se alguém clonar seu projeto, tudo que ela precisa fazer é passar o comando `npm install` e o npm vai ler o `package.json` e instalar todas as dependências listadas automaticamente.

### npm install express jsonwebtoken bcryptjs dotenv pg sequelize

Esse comando instala pacotes que você precisa para desenvolver seu backend. Quando você executa `npm install`, o Node busca os pacotes no repositório oficial do Node.js (Node Package Manager), localizados na internet, e armazenados dentro da pasta node_modules, que é uma pasta interna que o Node.js usa para guardar todos os pacotes que seu projeto depende. Essa pasta não deve ser enviada para o GitHub, porque geralmente contém muitos arquivos. O package.json registra as dependências e qualquer pessoa pode rodar `npm install` para recriar a node_modules.

### npm install --save-dev nodemon

Nodemon é uma ferramenta que reinicia automaticamente seu servidor toda vez que você salvar alterações no código. Esse comando instala o Nodemon como uma dependência de desenvolvimento (--save-dev), para que ele não vá para produção, servindo só para ajudar durante o desenvolvimento local.

As dependências de desenvolvimento são ferramentas que você usa para criar o sistema, mas que não são necessárias para o usuário final. O Nodemon por exemplo te ajuda a desenvolver mais rápido, mas o servidor real (em produção) não precisa dele.

</details>

<details>
<summary><b>ORM</b></summary>
ORM (Mapeamento Objeto-Relacional, do inglês <i>Object-Relational Mapping</i>)  é uma ferramenta que permite interagir com o banco de dados usando código orientado a objetos, em vez de escrever diretamente comandos SQL (como SELECT, INSERT, UPDATE, DELETE).

Em vez de escrever um código SQL como esse:

```sql
SELECT * FROM usuarios WHERE id = 1;
```

Utilizando ORM, pode ser feito da seguinte maneira:

```js
const usuario = await Usuario.findByPk(1);
```
As vantagens são:

- <b>Produtividade:</b> Você escreve menos código e ele fica mais legível.
- <b> Segurança:</b>	Ajuda a evitar SQL Injection, porque trata os dados internamente.
- <b>Portabilidade:</b>	Pode trocar de banco de dados com poucas mudanças em código.
- <b>Validação embutida:</b>	Você pode definir regras como "esse campo é obrigatório" diretamente no modelo.
- <b> Relacionamentos fáceis:</b>	Definir relações como 1 para N ou N para N entre tabelas é mais simples.

Alguns exemplos de ORMs populares para Node.js são: Sequelize, Prisma, TypeORM
</details>