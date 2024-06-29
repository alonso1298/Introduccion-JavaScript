const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if (auth){
        resolve('Usuario Autenticado'); // El promise se cumple
    }else {
        reject('No se pudo iniciar sesion'); //El promise no se cumple
    }
});

// De esta forma se imprime en consola el resultado
usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// En los Promises existen 3 valores posibles

// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ah rechazado o no se puede cumplir