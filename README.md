# SOLID REST API
![License](https://img.shields.io/static/v1?label=license&message=MIT&color=blue) &nbsp;
![Npm version](https://img.shields.io/static/v1?label=npm&message=v10.1.0&color=blue&style=flat-square) &nbsp;
![Repository size](https://img.shields.io/github/repo-size/bush1D3v/solid_rest_api?color=green&style=flat-square) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=green) &nbsp;

## Tecnologias e Ferramentas Utilizadas
<div>
    <img align='center' height='50' width='70' title='JavaScript' alt='javascript' src='https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' />
    <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg' />
    <img align='center' height='55' width='70' title='PostgreSQL' alt='postgresql' src='https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg' />
    <img align='center' height='49' width='49' title='Express' alt='express' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/ba645c20-1f19-4914-8ad0-de6c7f83ba2e' /> &nbsp;
    <img align='center' height='53' width='49' title='Nodemon' alt='nodemon' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/fd586348-7781-4e02-a4f0-fe7410ef43fb' /> &nbsp;
    <img align='center' height='53' width='55' title='JsonWebToken' alt='jsonwebtoken' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/d23ffb9d-aedc-4d68-9209-7268d7f41ce6' /> &nbsp;
    <img align='center' height='48' width='48' title='Bcrypt' alt='bcrypt' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/5863bac1-a591-4776-82a4-f427681934be' /> &nbsp;
    <img align='center' height='48' width='48' title='Insomnia' alt='insomnia' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/75a3fffd-792e-4250-8ef5-2abb615e38a0' /> &nbsp;
    <img align='center' height='53' width='49' title='Beekeeper' alt='beekeeper' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/0d5b4b55-546c-4bc0-a25c-dfc9116fe993' /> 
</div> <br>

## Sobre o Projeto
<strong>API Rest</strong> com integração a <strong>banco de dados</strong>, <strong>autenticação</strong> de usuário e <strong>criptografia</strong> de senha. <br> Tentando levar em consideração alguns princípios de <strong>SOLID</strong>. 


Tabela de Rotas da API
=================
<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/c4eb0f2d-c51e-4900-a5e8-6bce7a640752" />
</div>

* [http://localhost:3000/register](#register)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/a212a503-ae5c-4bc3-84c7-5f8542997f04" />
</div>

* [http://localhost:3000/login](#login)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/7f0d970c-db46-4c23-8912-e162592493cf" />
</div>

* [http://localhost:3000/pokemon/register](#pokemon-register)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/e1b57fee-f381-4863-8d9e-56534eeb03ed" />
</div>

* [http://localhost:3000/pokemon/nickname/:id](#pokemon-nickname-id)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/bd99a804-a60e-4354-ac90-b64b3c4e7ce7" />
</div>

* [http://localhost:3000/pokemon](#pokemon)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/6068ab68-ad1d-4937-8ddd-08cf3f7a2d23" />
</div>

* [http://localhost:3000/pokemon/:id](#pokemon-id)

<div>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/6a292cc5-b11d-4057-b2b7-391996eec7f7" />
</div>

* [http://localhost:3000/pokemon/delete/:id](#pokemon-delete-id)

# Como executar esse projeto?

Para executar esse projeto localmente, você vai precisar:

- Instalar dependências

```zsh
npm install
```

- Executar projeto com:

```zsh
npm run dev
```

# Rotas

<details open>
    <summary> <strong> Todas as rotas de pokemon necessitam de envio de token no "Auth", sendo do tipo "Bearer" </strong> </summary> <br>
    <img src="https://github.com/bush1D3v/solid_rest_api/assets/133554156/cb156856-2a75-4eea-8f7f-dcd2b7de3450" />
</details>

* ### register

![register](https://github.com/bush1D3v/my_portfolio/assets/133554156/0c6b8343-967a-4fed-8452-5eb480524710)

* ### login

![login](https://github.com/bush1D3v/my_portfolio/assets/133554156/d1cd72be-0ff2-4ff5-8abe-1998e340d383)

* ### pokemon-register

![pokemon_register](https://github.com/bush1D3v/my_portfolio/assets/133554156/d549c1ed-ff4c-4a3e-972c-c5349647699e)

* ### pokemon-nickname-id

![pokemon_nickname_id](https://github.com/bush1D3v/my_portfolio/assets/133554156/42208414-74e9-4201-a2a7-53baac23a61d)

* ### pokemon

![pokemon](https://github.com/bush1D3v/my_portfolio/assets/133554156/1890162f-c1c5-4845-afe3-86beb52b1bf8)

* ### pokemon-id

![pokemon_id](https://github.com/bush1D3v/my_portfolio/assets/133554156/446d83f0-4059-4fe9-8e8d-53d2fc922087)

* ### pokemon-delete-id

![pokemon_delete_id](https://github.com/bush1D3v/my_portfolio/assets/133554156/086f3bb0-4b1c-4bfa-adb5-c1001b283330)
