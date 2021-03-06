<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./img/1.png" alt="Project logo"></a>
</p>
<h3 align="center">apiRest - Teste BLD</h3>
<br>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/tukpedro/Web-Development-Studies/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tests](#tests)
- [Built Using](#built_using)
- [Author](#authors)
<br><br>

## 🧐 About <a name = "about"></a>
API Rest de busca e cadastro de dados de veículos e motoristas.<br><br>
Consome API <a href="https://viacep.com.br/">ViaCep</a> para adicionar a localidade.<br><br>

## 🏁 Getting Started <a name = "getting_started"></a>

### Pré - Requisitos

Para rodar o projeto local, instalar o yarn:

```
npm install -g yarn
```

### Instalação

Execute este comando para instalar todas as dependências automaticamente:

```
yarn install
```
<br>


## 🔧 Tests <a name = "tests"></a><br>

É possível testar, cadastrar mais usuários e veículos utilizando <a href="https://www.postman.com/">Postman</a> através das rotas:<br>

<hr>
<p style="color: #f7f77e">GET -  All drivers:</p>




```
http://161.35.103.204:8000/drivers
```
<hr>
<p style="color: #f7f77e">POST - Create New Driver:</p>

```
http://161.35.103.204:8000/drivers
```


Passar no body do JSON esta estrutura de parâmetros:


<p style="color:#00fffa">{
    "id": 3,
    "name": "Motorista 3",
    "postalCode": "99999-999"
}</p>

<hr>

<p style="color: #f7f77e">POST - Create New Vehicle:</p>

```
http://161.35.103.204:8000/vehicle
```
Passar no body do JSON os parâmetros:

<p style="color:#00fffa">{
    "id": 3,
    "plate": "ABC-1234",
    "driverId": 2
}</font></p>


<hr>
<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Yarn](https://yarnpkg.com/) - Package Manager
- [Express](https://expressjs.com/) - Server Framework
- [MYSQL](https://www.mysql.com/) - Database
- [Postman](https://www.postman.com/) - HTTP requests
<br><br>


## ✍️ Author <a name = "authors"></a>

- [@tukpedro](https://github.com/tukpedro)
