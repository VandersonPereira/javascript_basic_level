alert('Parabéns! eventos_listeners.js está conectado.');

/* Alguns exemplos de como utilizar eventos com Javascript */

// Adicionando um Listener a um input.
var myFunc = function(){console.log('Houve um clique no input.');}
document.querySelector('#myInput').addEventListener('click', myFunc);

// Removendo um Listener de um input.
document.querySelector('#myInput').removeEventListener('click', myFunc);

// Site com vários eventos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

