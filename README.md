# Clean Pokédex React
<img src="./public/logopoke.png" alt="Uma imagem relacionada ao projeto">
 
# Sobre
 
Projeto realizado para aplicar conceitos acerca de :
* Solid
* Clean Arch
* Design Patterns
* TDD e DDD
 
# Ferramentas e Bibliotecas
 
 * React
 * Node
 * Webpack
 * Sass
 * Jest
 * Faker
 * Typescript
 * Eslint
 * Express
 * Lintstaged
 * Husky
 * Axios
 * Recoil
 * Vscode
 * IntersectionObserver
 
# Links importantes
  * Api para pokémon - [https://pokeapi.co/api/v2 ](https://pokeapi.co/api/v2)
  * Projeto - [https://king-prawn-app-awqf4.ondigitalocean.app/ ](https://king-prawn-app-awqf4.ondigitalocean.app/)
  *  Repositório - https://github.com/mateusflorencio/clean-pokedex
 
# Resumo
 
Desenvolvi o seguinte projeto abaixo não apenas focando em consumir a API do Pokémon, mas sim para aplicar conhecimentos adquiridos.
 
 
 
Foi realizado o desacoplamento das regras de negócio, utilizando na primeira etapa DDD e o TDD para me guiar no desenvolvimento.
 
 
 
### Criei quatro casos de usos:
 
  1. Carrega todos os dados da api, incluindo dados da paginação
 
2. Carregar um ou vários pokemons
 
3. Lista todos os pokémon com suas devidas informações utilizando  o caso de uso 2
 
4. Busca um pokémon pelo nome
 
 
###  httpClient
Criei também um httpClient que implantei com o axios que foi possível ser utilizado por todos os casos de usos assim, apenas passado de forma correta a url. Com isso ele pode se tornar reutilizável.
 
O httpClient recebe como parametro uma url e um método *(get ou post)*
 
### Princípios
Foi respeitado dentro dos conhecimentos atuais os princípios do Solid.
 
 
 
Dentre os quais eu quero destacar o Single Responsability e o Interface Segregation.
 
### Test
 
Sendo assim, ficou fácil realizar os testes nos casos de uso. Utilizei o Jest para fazê-lo
 
## FrontEnd
 
Usei nesse primeiro momento o React para desenvolver o front-end.
Para os estados utilizei o recoil.js que usei como contexto e estado.
 
### Rolagem infinita
 
Para implantar a rolagem infinita utilizei a própria api do javascript : **IntersectionObserver**. Assim não precisei instalar nenhuma outra biblioteca.
 
 
 
 

