alert('Parabéns! eventos_timers.js está conectado.');

/* Alguns exemplos de como utilizar eventos com Javascript */

// Usando setTimeout
var mySetTimeout = setTimeout(function(){
    console.log('Depois de 2 segundos...');
}, 2000);

// Limpando um setTimeout
clearTimeout(mySetTimeout);

// Usando setInterval
var mySetInterval = setInterval(function(){
    console.log('Depois de 2 segundos...');
}, 2000);

// Limpando um setTimeout
clearInterval(mySetInterval);

// Debouncing - técnica utilizada para minimizar o número de requisições efetuadas.
var textoDigitado = document.querySelector('#myInput'), 
    textoReplicado = document.querySelector('h2'),
    timeOut;

textoDigitado.addEventListener('keyup',
    function(){
        clearTimeout(timeOut);
        setTimeout(()=> {
            textoReplicado.textContent = this.value; 
        }, 5000);
    });

    // Validando formulários
    function submitForm(){
        var myForm = document.forms.myForm;
        if(myForm.message.value === ''){
            alert('A mensagem é obrigatória!')
        }
        return false;
    }
