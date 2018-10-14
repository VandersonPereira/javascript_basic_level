alert('Parabéns! criando_removendo_elementos_html.js está conectado.');

/* Alguns exemplos de como criar e remover elementos do HTML */

// Removendo elementos HTML.
document.querySelector('button').remove();

// Criando elementos em memória.
var tagLi = document.createElement('li');
tagLi.innerText = 'Estudo';

// Passando o elemento para o HTML.
document.querySelector('div').appendChild(tagLi);

// Passando o elemento para antes de outro elemento HTML.
document.querySelector('.list-item:first-child').insertAdjacentHTML('beforebegin', tagLi.outerHTML);

// Passando o elemento para depois de outro elemento HTML.
document.querySelector('.list-item').insertAdjacentHTML('afterend', tagLi.outerHTML);

// Inserindo um elemento antes do primeiro elemento já existente.
var tagUl = document.querySelector('ul');
tagUl.insertBefore(tagLi, tagUl.firstChild);

// Clonando um elemento existente.
document.querySelector('#myInput').cloneNode(true);

// Pegando os elementos filhos.
var elementosFilhos = document.querySelector('ul').children;
// ou
elementosFilhos = document.querySelector('ul').querySelectorAll('li');

// Pegando um filho em específico.
elementosFilhos = document.querySelector('ul').querySelectorAll('li')[1];

// Pegando o elemento Pai.
elementosFilhos.parentElement;

// Pegando o próximo elemento.
elementosFilhos.nextElementSibling;

// Pegando o elemento anterior.
elementosFilhos.previousElementSibling;



