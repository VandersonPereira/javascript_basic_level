alert('Parabéns! recuperando_elementos_html.js está conectado.');

/* Alguns exemplos de como pegar elementos do HTML */

// Pegando elementos pelo nome da Tag.
document.getElementsByTagName('button');

// Pegando elementos pelo nome da classe.
document.getElementsByClassName('list-item');

// Pegando elementos pelo nome do 'name'.
document.getElementsByName('input-test');

// Pegando elementos pelo nome do id.
document.getElementById('myInput');

// Selecionando elementos, usando a sintaxe CSS.
// Recupera o primeiro elemento.
document.querySelector('li');

// Selecionando elementos, usando a sintaxe CSS.
// Recupera todos os elementos.
document.querySelectorAll('li');

// Selecionando elementos, usando a sintaxe CSS.
// Recupera todos os elementos.
document.querySelectorAll('.list-item');

// Selecionando elementos, usando a sintaxe CSS.
// Recupera todos os elementos.
document.querySelectorAll('#myInput');