# AbcEvoTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Cadastro de Usuário

Este projeto é uma aplicação Angular que permite o cadastro de usuários, validação de dados e exibição de informações salvas. A aplicação inclui uma página de cadastro e uma página de exibição de dados, utilizando localStorage para persistência.

## Requisitos

> Angular (versão mais recente), Node.js e npm

## Funcionalidades

1. Formulário de cadastro com campos para nome, e-mail e senha.
2. Validação de e-mail e senha (mínimo de 8 caracteres).
3. Persistência de dados no localStorage.
4. Renderização condicional para exibir uma mensagem de erro se não houver dados salvos.
5. Mensagem de erro ao tentar acessar rota sem preencher o form

## Instruções de Instalação

1. git clone <URL do repositório>
2. cd nome-do-projeto
3. npm install
4. ng serve

## Uso

1. Na página de cadastro, preencha os campos obrigatórios (nome, e-mail e senha).
2. Após preencher, clique no botão "Cadastrar" para salvar os dados.
3. Você será redirecionado para a página que exibe os dados salvos.
4. Se não houver dados salvos no localStorage, uma mensagem de erro será exibida.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
