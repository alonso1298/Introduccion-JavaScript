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
meses.forEach(function(mes){
    if(mes = 'Marzo') {
        console.log('Marzo si existe')
    }
});

// Includes
let resultado = meses.includes('Marzo'); // Funciona bien en un arreglo plano
console.log(resultado); //Devuelve un booleano True (si esxiste), False (No existe)

//En un arreglo de objetos NO funciona includes
// const resultado2 = carrito.includes('Celular'); 

// Some ideal para arreglo de objetos
let resultado2 = carrito.some(function(producto){
    return producto.nombre == 'Celular' //Si el nombre esta en el arreglo este retorna un booleano
}); 
// console.log(resultado); 

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(resultado)

// fiter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
}) 
console.log(resultado)

resultado = carrito.filter(function(producto) {
    return producto.nombre == 'Celular'
}) 
console.log(resultado)

