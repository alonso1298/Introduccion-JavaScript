// Funcion flecha o arrow fuctions

const sumar = function(n1, n2) { // Solo funciona cuando tenemos una expresion de funcion en la declaracion de funcion no funcionara
    console.log(n1 + n2);
}
sumar(5, 10);

//Funcion Flecha
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`); //Cuando solo pasamos un parametro el () es opcional
aprendiendo('JavaScript');


// Array Methods

//Arreglo plano
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Arrego con objetos
const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

// Verificar si un elemento existe en un arreglo
// forEach
meses.forEach( mes => {
    if(mes = 'Marzo') {
        console.log('Marzo si existe')
    }
});

// Some ideal para arreglo de objetos
let resultado = carrito.some(producto => producto.nombre == 'Celular'); 

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// fiter
resultado = carrito.filter( producto => producto.precio > 400) 

resultado = carrito.filter( producto => producto.nombre == 'Celular') 


