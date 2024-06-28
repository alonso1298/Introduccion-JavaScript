//Funciones 

//Declaración de función 
function sumar() {
    console.log(10 + 10);
}

sumar();

//Expresión de la función 
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE son funciones que no necesitan mandarse a llamar porque se mandan a llamar ellas mismas
//Los IIFE son utiles para proteger las variables o que no se mezclen las variables y funciones con las de otros archivos
(function () {
    console.log('Esto es una función');
})();  // Ese parentesis es para mandarlo a llamar


