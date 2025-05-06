# Desafio de Programação: Sistema de Reservas de Restaurante
Neste desafio, você vai construir uma API para gerenciar reservas de mesas em um restaurante. O objetivo é desenvolver funcionalidades comuns em sistemas reais de reserva, incluindo autenticação, validação e controle de disponibilidade. Esse projeto será uma ótima adição ao seu portfólio de backend!

## Requisitos do Projeto
### Objetivo Principal
Desenvolver uma API RESTful para:

- Registrar reservas de mesas.
- Controlar o status das reservas e das mesas.
- Bloquear reservas quando a mesa estiver ocupada.

### Stack Recomendado
- <b>Backend:</b> Node.js (Express), .NET Core ou Java (Spring).
- <b>Banco de Dados:</b> MySQL ou PostgreSQL
- <b>Autenticação:</b> JWT (JSON Web Tokens)

### Funcionalidades

<b>1. Autenticação de Usuário</b>

- <b>Registro:</b> O usuário deve ser capaz de se registrar com um nome, e-mail e senha.
- <b>Login:</b> Usuários autenticados recebem um token JWT para acesso às funcionalidades de reservas.
- <b>Restrição de Acesso:</b> Apenas usuários logados podem criar e visualizar reservas.

<b>2. Gestão de Mesas</b>

- <b>Listagem:</b> Listar todas as mesas disponíveis no restaurante.
- <b>Criar Mesa:</b> Administradores podem adicionar novas mesas ao sistema com um nome e capacidade de pessoas.
- <b>Status da Mesa:</b> Cada mesa pode estar disponível, reservada ou inativa.

<b>3. Sistema de Reservas</b>

- <b>Criar Reserva:</b> Usuários autenticados podem criar reservas para mesas específicas.
- <b>Verificar Disponibilidade:</b> A API deve verificar se a mesa está disponível no horário solicitado antes de confirmar a reserva.
- <b>Cancelar Reserva:</b> Usuários podem cancelar suas reservas, o que libera a mesa para novas reservas.

<b>4. Controle de Status</b>

- <b>Status das Mesas:</b> Mesas ficam reservadas automaticamente ao serem associadas a uma reserva.
- <b>Status das Reservas:</b> Reservas têm status ativo quando confirmadas e cancelado quando canceladas.

## Estrutura do Banco de Dados

- <b>Usuários</b>
  - `id`: Identificador único.
  - `nome`: Nome do usuário.
  - `email`: E-mail do usuário (único).
  - `senha`: Senha do usuário, armazenada com hash.
  - `role`: Papel do usuário (ex.: cliente ou administrador).

- <b>Mesas</b>
  - `id`: Identificador único.
  - `nome`: Nome ou número da mesa.
  - `capacidade`: Quantidade máxima de pessoas que a mesa comporta.
  - `status`: Status atual da mesa (disponível, reservada, inativa).

- <b>Reservas</b>
  - `id`: Identificador único.
  - `usuario_id`: ID do usuário que fez a reserva.
  - `mesa_id`: ID da mesa reservada.
  - `data_reserva`: Data e horário da reserva.
  - `status`: Status da reserva (ativo, cancelado).

## Endpoints da API

### Autenticação

- `POST /usuarios/registrar` — Cadastro de novos usuários.
- `POST /usuarios/login` — Login de usuários e geração de token JWT.

### Mesas

- `GET /mesas` — Lista todas as mesas e seus status.
- `POST /mesas` — Adiciona uma nova mesa (apenas administradores).
- `PATCH /mesas/:id` — Atualiza informações de uma mesa.
- `DELETE /mesas/:id` — Remove uma mesa (apenas administradores).

### Reservas

- `POST /reservas` — Cria uma nova reserva, validando disponibilidade e a capacidade da mesa.
- `GET /reservas` — Lista todas as reservas do usuário autenticado.
- `PATCH /reservas/:id/cancelar` — Cancela uma reserva ativa.

## Regras de Negócio

<b>1. Verificação de Disponibilidade</b>
  - Antes de criar uma reserva, verifique se a mesa está disponível no horário desejado.

<b>2. Validação de Capacidade</b>
  - O sistema deve validar a capacidade da mesa para atender o número de pessoas indicado na reserva.

<b>3. Cancelamento de Reserva</b>
  - Quando uma reserva é cancelada, o sistema deve atualizar o status da mesa para disponível.

<b>4. Permissões de Usuário</b>
  - Apenas administradores podem adicionar, atualizar ou remover mesas.
  - Apenas o usuário que criou uma reserva pode cancelá-la.

## Validação de Dados

- <b>Datas e Horários:</b> A reserva só pode ser feita para horários futuros dentro do horário de funcionamento do restaurante.
- <b>Campos Obrigatórios:</b> Valide a presença de todos os campos obrigatórios em cada endpoint.
- <b>Formatos:</b> E-mails e datas devem estar em formatos corretos.

## O Que Você Pode Aprender Com Isso
Esse projeto cobre habilidades importantes para o desenvolvimento backend e simula situações reais de um sistema de reservas. Ao implementá-lo, você poderá aprender:

<b>1. CRUD Completo:</b> Como construir e organizar uma API com operações básicas (criação, leitura, atualização e exclusão) para recursos, como usuários, mesas e reservas.<br>
<b>2. Autenticação e Autorização:</b> Uso de JWT para proteger rotas e controlar permissões de usuários.<br>
<b>3. Validação de Dados:</b> Como validar entradas para garantir a integridade das informações, como horário, capacidade e status.<br>
<b>4. Controle de Disponibilidade:</b> Gerenciamento de reservas e status para impedir duplicidade de reservas no mesmo horário e mesa.<br>
<b>5. Modelagem de Banco de Dados:</b> Estruturar um banco relacional para representar relacionamentos e garantir consistência entre as entidades.<br>
<b>6. Boas Práticas de API REST:</b> Aprender padrões e organização de rotas e respostas HTTP para melhorar a qualidade do código e documentação.