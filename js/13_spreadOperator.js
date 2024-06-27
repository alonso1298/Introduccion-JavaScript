//Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas", // En ves de poner = se pone : 
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : '1kg',
    medida : '1n',
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);
