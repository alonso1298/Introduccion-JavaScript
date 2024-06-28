
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

// ForEach
//Si queremos iterar en un arreglo y mostrar los elementos en pantalla o enviarlos a la consola se utiliza ForEach
carrito.forEach( producto => console.log(producto.nombre))

// map
//Crea un nuevo arreglo
// Si se quiere crear un nuevo arreglo se utiliza map
carrito.map( producto => console.log(producto.precio))
