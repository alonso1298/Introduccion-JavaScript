// Areglos o Arrays
//Los arreglos son un conjunto de datos relacionados 

const numeros = [10,20,30,40,50];
console.table(numeros);
//Acceder a los valores de un arreglo
console.log(numeros[4]) //Se accede con los indices
//Para acceder a todos lo elementos es con un forEach
numeros.forEach( function(numero){
    console.log(numero)
});

//Constructor 
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses)
//Conocer la extencion de un arreglo
console.log(meses.length);

// No pasa nada si son diferentes tipos de datos
const arreglo = ['Hola', 125, true, 'si', null, {nombre: 'Juan', trabajo: 'programador'}, [1,2,3]];
console.table(arreglo);


