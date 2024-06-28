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

//-------------------------------------------------------------------------

// Class
//Tambien se puede crear con la palabra class y añadiendo el constructor 
class Direccion {
    constructor(puerta, calle, colonia, ciudad, cp) {
        this.puerta = puerta;
        this.calle = calle;
        this.colonia = colonia;
        this.ciudad = ciudad;
        this.cp = cp;
    }
}
// Prototypes 
// Es una funcion que este asociada a un tipo de objeto
Direccion.prototype.formatearDireccion = function() {
    return `La colonia: ${this.colonia} esta en la ciudad: ${this.ciudad}`
}
const direccion1 = new Direccion(2, 'Troya', 'Belvedere', 'GTO', 80020);

console.log(direccion1.formatearDireccion());

//-------------------------------------------------------------------------
 
//Esta funcion la pueden utilizar todos los objetos lo cual no es recomendable
const direccion2 = new Direccion(15, 'Tetiz', 'Pedregal', 'CDMX', 14100);

function formatearDireccion(direccion) {
    return `La colonia: ${direccion.colonia} esta en la ciudad: ${direccion.ciudad}`
}

console.log(formatearDireccion(direccion2));




