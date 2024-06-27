"use strict"; //Ejecuta el codigo de JavaScript de forma estricta 
//Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas", // En ves de poner = se pone : 
    precio : 300,
    disponible : true,
}

Object.freeze(producto) //Congela el objeto para que no se puedan agregar mas valores

//producto.imagen = 'imagen.jpg';

//Para saber si un objeto esta cellado existe un metodo llamado isFrozen
console.log(Object.isFrozen(producto));

//Seal no te permite eliminar, agregar pero si te permite modificar las propiedades existentes
console.log(Object.seal(producto));


console.log(producto);