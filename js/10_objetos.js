// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas", // En ves de poner = se pone : 
    precio : 300,
    disponible : true,
}

// console.log(producto.precio); //Para acceder a las propiedades es con un punto seguido del nombre de la propiedad
// console.log(producto.disponible);
// console.log(producto.nombreProducto);
// console.log(producto["precio"]); //Este metodo no es tan usado 

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'; //Se pueden agregar propoedades que no existen en el objeto 

//Eliminar propiedades
delete producto.disponible; 

console.log(producto); 

