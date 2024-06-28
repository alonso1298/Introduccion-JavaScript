// Clases o Class

class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`
    }
    obtenerPrecio(){
        return `El precio es: ${this.precio}`
    }
}

const producto = new Producto('iPhone', 12000 )
console.log(producto.formatearProducto())
console.log(producto.obtenerPrecio())

