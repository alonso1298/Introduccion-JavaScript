// Clases o Class

class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto = new Producto('iPhone', 12000 )
console.log(producto.nombre)

