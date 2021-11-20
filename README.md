![GitHub repo size](https://img.shields.io/github/repo-size/CristianoDaSilvaFerreira/controle-de-despesas-javascript) 
![GitHub](https://img.shields.io/github/license/CristianoDaSilvaFerreira/controle-de-despesas-javascript)
![GitHub language count](https://img.shields.io/github/languages/count/CristianoDaSilvaFerreira/controle-de-despesas-javascript)
![GitHub top language](https://img.shields.io/github/languages/top/CristianoDaSilvaFerreira/controle-de-despesas-javascript)

<img src="https://img.shields.io/static/v1?label=Deveoper&message=CristianoFerreira&color=7159c1&style=for-the-badge&logo=ghost"/>

<h1>Controle de Despesas JavaScript</h1>

<h1 align="center">
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">🔗 JavaScript</a>
</h1>
<p align="center">🚀 Uma aplicação para controle financeiro, controle de despesas. Feita com HTML5, CSS3 e JavaScript puro. Na qual o usuário poderá inserir as informações de suas transações financeiras, tanto quando ganhos como despesas que irão sair. E serão refletidas na tela do navegador.</p>
<p>E ainda essa insformações estão salvar no browser, por meio da API do localStorage, na qual irá manter as informações salvas, mesmo que feche o navegador, ou reinicie ele (F5)</p>


## Features

Pode-se aplicar alguns conhecimentos adquiridos nesse projeto com o **JavaScript**, que são:
 - [x] Hight-order Functions
  * map: <p>percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, **map()** retorna o novo array com todos os elementos “traduzidos”.</p>
~~~JavaScript
const transactionAmounts = transactions.map(({ amount }) => amount);
~~~
  * filter: <p>percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado deve ser um booleano que indica se o elemento será mantido ou descartado. Depois de todos os elementos terem sido analisados, filter() retorna um novo array com todos os elementos que retornaram como verdadeiro.</p>
~~~JavaScript
const getIncome = transactionAmounts => transactionAmounts
  .filter(value => value > 0)
  .reduce((accumulator, value) => accumulator + value, 0)
  .toFixed(2);
~~~
  * reduce: <p>percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado é o valor acumulado passado de callback para callback. Depois de todos os elementos terem sido avaliados, reduce() retorna o valor acumulado/concatenado.</p>
~~~JavaScript
const getTotal = transactionAmounts => transactionAmounts
  .reduce((accumulator, transaction) => accumulator + transaction, 0)
  .toFixed(2);
~~~
***
  - [x] Destructuring
<p>A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

Antes de aplicar o Destructuring

~~~JavaScript
const addTransactionIntoDOM = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+';
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
  const amountWithoutOperator = Math.abs(transaction.amount);
  const li = document.createElement('li');
~~~
Após a aplicação do Destructuring
~~~JavaScript
const addTransactionIntoDOM = ({ amount, name, id }) => {
  const operator = amount < 0 ? '-' : '+';
  const CSSClass = amount < 0 ? 'minus' : 'plus';
  const amountWithoutOperator = Math.abs(amount);
  const li = document.createElement('li');
~~~
Com a aplicação do Destructuring, pode-se eliminar a sintaxe de objeto ponto propriedade. Que cópia do objeto que estava sendo passado por parâmetro o valores da propriedade **amount, name, id**
  
### Pré-requisitos

Para pode começar a usa-lo, poderá fazer de duas formas diferentes
  * clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/CristianoDaSilvaFerreira/controle-de-despesas-javascript.git

# Acesse a pasta do projeto no terminal/cmd
$ cd controle-de-despesas-javascript

# Execute a aplicação (caso use o VSCode - e tenha essa função)
$ code .

# O VSCode irá abrir com os arquivos necessários para fazer alterações caso haja
    
# O site irá roda localmente no Browser
```
  
Ou poderá acessa-lo diretamente na hospetagem do meu repositório no GitPage [Controle de Despesas JavaScript](https://cristianodasilvaferreira.github.io/controle-de-despesas-javascript/)

![Vídeo-Desmostrativo](https://github.com/CristianoDaSilvaFerreira/controle-de-despesas-javascript/blob/main/expensedemo.gif)

![image](https://user-images.githubusercontent.com/68359459/128270251-f4050d70-c53d-4c98-9ef3-73b7c52d6206.png)
  
 ### 🛠 Tecnologias

  As seguintes ferramentas foram utilizadas para construção desse projeto:
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [HTML5](https://www.w3schools.com/html/)
  - [CSS3](https://www.w3schools.com/css/)
  

  
 ### Autor
---

<a>
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/68359459/128278200-0cba229d-615d-410c-8800-ef09d0367c35.jpg" width="100px;" alt=""/>
 <sub><b>Cristiano da Silva Ferreira</b></sub></a>🚀


Feito com ❤️ por Cristiano da Silva Ferreira 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Cristiano-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/cristiano-da-silva-ferreira/)](https://www.linkedin.com/in/cristiano-da-silva-ferreira/) 
[![Gmail Badge](https://img.shields.io/badge/-cristianodevsystemo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cristianodevsysten@gmail.com)](mailto:cristianodevsystem@gmail.com)


<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuicao">Contribuição</a> • 
 <a href="#licenc-a">Licença</a> • 
 <a href="#autor">Autor</a>
</p>



<h4 align="center"> 
	🚧  Construindo mais funcionalidades...  🚧
</h4>
