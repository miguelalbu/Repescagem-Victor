# Weather App

Este é um projeto simples de uma **aplicação web** para consulta de clima utilizando duas APIs externas: **OpenWeatherMap** e **Weatherstack**. O objetivo principal do projeto é demonstrar como implementar um sistema de **redundância e balanceamento de carga** para garantir que, caso uma API falhe, a outra seja acionada automaticamente.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

- **app.js**: Backend que utiliza o framework Express.js para expor uma API que consulta o clima de uma cidade.
- **index.html**: Frontend simples que permite ao usuário digitar o nome da cidade e visualizar o clima.
- **script.js**: Script responsável por fazer a requisição ao backend e exibir o resultado na interface do usuário.
- **styles.css**: Estilo simples para melhorar a interface do frontend.

## Funcionalidade

A aplicação funciona da seguinte forma:
1. O usuário informa o nome da cidade na interface web.
2. O frontend faz uma requisição ao backend (que está rodando na porta 3000).
3. O backend tenta buscar as informações de clima usando a **OpenWeatherMap API** (API primária).
4. Caso a API primária falhe, o sistema tenta buscar os dados da **Weatherstack API** (API de backup).
5. O resultado é retornado ao frontend e exibido para o usuário, mostrando a temperatura atual e a descrição do clima.

## Tecnologias Utilizadas

- **Node.js** com **Express.js** para o backend.
- **Axios** para realizar requisições HTTP.
- **HTML/CSS** para a construção da interface do usuário.
- **JavaScript** para interação com a API e atualização dinâmica da página.

