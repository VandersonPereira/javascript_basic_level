alert('Parabéns! alterando_elementos_html.js está conectado.');

/* Alguns exemplos de como alterar elementos HTML */

// Recupera o conteúdo (texto) do primeiro elemento 'li' encontrado.
document.querySelector('li').textContent;

// Recupera o conteúdo (texto) do primeiro elemento 'li' encontrado.
document.querySelector('li').innerText; 

// Recupera o conteúdo (todo o elemnto) do primeiro elemento 'li' encontrado.
document.querySelector('li').innerHTML; 

// Recupera o conteúdo (todo o elemnto) do primeiro elemento 'li' encontrado.
document.querySelector('li').outerHTML; 

// Alterando o conteúdo (todo o elemnto) do primeiro elemento 'li' encontrado.
document.querySelector('li').innerHTML = '<b>Tag alterada</b>';

