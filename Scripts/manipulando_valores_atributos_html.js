alert('Parabéns! manipulando_valores_atributos_html.js está conectado.');

/* Alguns exemplos de como manipular atributos e valores dos elementos HTML */

// Recuperando o valor do input
document.querySelector('#myInput').value;

// Alterendo o valor do input
document.querySelector('#myInput').value = 'Valor alterado!';

// Recuperando o valor de um atributo de um elemento.
document.querySelector('#myInput').getAttribute('type');

// Alterando o valor de um atributo de um elemento.
document.querySelector('#myInput').setAttribute('type', 'number');

// Listando classes de um elemento.
document.querySelector('#myInput').classList;

// Adicionando classes a um elemento.
document.querySelector('#myInput').classList.add('teste-classe');

// Procurando classes de um elemento.
document.querySelector('#myInput').classList.contains('nome-classe');

// Removando classes de um elemento.
document.querySelector('#myInput').classList.remove('nome-classe');

// Adicionando e removendo classes de um elemento, automaticamente (ele mesmo verifica se existe ou não a classe).
document.querySelector('#myInput').classList.toggle('nome-classe');

// Listando estilos css.
document.querySelector('#myInput').style;

// Alterando estilos css.
document.querySelector('#myInput').style.backgroundColor = 'red';