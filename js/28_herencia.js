//Herencia

class Ave {
    constructor(nombre, volar) {
        this.nombre = nombre;
        this.volar = volar;
    }
    formatearAve() {
        return `El ave se llama: ${this.nombre} y puede volar: ${this.volar}`
    }
}

// Herencia
//Podemos heredar tanto el constructor como las funciones de la clase
class Gallo extends Ave {
    constructor(nombre, volar, cresta) {
        super(nombre, volar); //Para heredar el constructor de la clase padre le tenemos que poner un super
        this.cresta = cresta;
    }
    formatearGallo() {
        return `${super.formatearAve()}. y cuenta con cresta: ${this.cresta}`
    }
}

const gallo = new Gallo('Claudio', false, true);
console.log(gallo);
console.log(gallo.formatearAve());
console.log(gallo.formatearGallo());