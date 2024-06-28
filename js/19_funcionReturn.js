function sumar(num1, num2){
    return num1 + num2
}

console.log(typeof sumar(3,4)); //Como ahora solo retorna este retornara un number

const resultado = sumar(8,9); // Se puede asignar a una variable y posteriormente mostrarla
console.log(resultado);

console.log(sumar(5,6)); //O se puede mostrar de una sola vez


let total = 0;

function agregarCarrito(precio) {
    return total += precio
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total)

function calcularImpuesto(total) {
    return 1.15 * total
}

const totalApagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalApagar}`);