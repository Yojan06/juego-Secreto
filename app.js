let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    console.log (intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertaste, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero es menor');
        } else{
            asignarTextoElemento('p', 'El numero es mayor ');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';;
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
        

    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo} por favor`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    //generar nuevo numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);


    
}



condicionesIniciales();