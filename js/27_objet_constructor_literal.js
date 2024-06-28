// POO

/** Objet Literal **/
const producto = {
    nombre : 'Tablet',
    precio : 500,
}


/** Objet Constructor **/
// Un class es una forma de almacenar los datos que va a tener un objeto en especifico 
function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
}
const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);


//Tambien se puede crear con la palabra class y a~adiendo el constructor 
class Producto2 {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto4 = new Producto2('Telefono', 600);
console.log(producto4);

class Direccion {
    constructor(puerta, calle, colonia, ciudad, cp) {
        this.puerta = puerta;
        this.calle = calle;
        this.colonia = colonia;
        this.ciudad = ciudad;
        this.cp = cp;
    }
}

const direccion1 = new Direccion(15, 'Tetiz', 'Pedregal', 'CDMX', 14100)
console.log(direccion1)

