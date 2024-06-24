// Tipos de datos 

//String o Cadenas de texto
const producto = 'Monitor de 20 Pulgadas'; //str
const producto2 = String('Monitor de 30 Pulgadas'); //str
const producto3 = new String('Monitor de 50 Pulgadas'); //objeto

// length es para la extencion 
console.log(producto.length); //Este metodo permite ver el numero de caracteres

// IndexOf
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

// Includes (Retorma True o False)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
