//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas", // En ves de poner = se pone : 
    precio : 300,
    disponible : true,
}

// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto} = producto; //Sempre se tienen que agregar las llaves

console.log(precio);
console.log(nombreProducto);
