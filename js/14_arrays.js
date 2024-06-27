// Areglos o Arrays
//Los arreglos son un conjunto de datos relacionados 

const numeros = [10,20,30,40,50];
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

//Para añadir un elemento al arreglo por medio del indice
numeros[5] = 60;

//Para añadir un elemento con el metodo push
numeros.push(100) //Siempre se agregara al final del arreglo
numeros.push(120, 150) //Se pueden agregar multiples elementos separados por comas

//Para añadir un elemento con el metodo unshift
numeros.unshift(-10,-20,-30) //Se agrega al inicio del arreglo
console.table(numeros);

// // Para eliminar elementos de un arreglo 
// mayo = meses.pop(); //Elimina el ultimo elemento del arreglo
// console.log(mayo);
// meses.shift(); //Elimina el primer elemento de un arreglo

// meses.splice(2, 1)//El primer elemento que recibe es el indice y el segundo es cuantos quieres eliminar apartir de ahi
// console.table(meses);

//Rest Operator o Spread operator
const nuevoArreglo = [...meses, 'Junio']; //Los ... significa que haga una copia de un arreglo y despues le pasamos un elemento para que lo agregue
//Si quisieramos agregar el elemento al inicio seria ['Junio', ...meses]
console.log(nuevoArreglo);


