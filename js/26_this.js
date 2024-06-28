// This
// Hace referencia al objeto sobre el cual esta haciendo llamara a la funcion 
const reservacion = {
    nombre : 'Alonso',
    apellido : 'Sagrero',
    total : 5000,
    pagado : false,
    informacion : function () { //No se puede usar la funcion flecha ya que function hace referencial al objeto y la funcion flecha a la ventana global
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

const reservacion2 = {
    nombre : 'Pedro',
    apellido : 'Pascal',
    total : 8000,
    pagado : true,
    informacion : function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion()
reservacion2.informacion()