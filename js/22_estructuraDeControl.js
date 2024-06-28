//Estructuras de control 

// if
const puntaje = 100;

if (puntaje == 1000) {
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual')
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito){
    console.log('El usuario puede pagar');
} else{
    console.log('Fondos insuficientes');
}

// else if

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Aceeso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso')
}