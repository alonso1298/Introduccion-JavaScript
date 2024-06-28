// Loop For

for( let i = 0; i <= 10; i++) { //Primero inicializamos el index, luego se crea el codigo que se ejecutara y al ultimo el incremento
    console.log(i);
}

for( let i = 1; i <= 100; i++) { //Primero inicializamos el index, luego se crea el codigo que se ejecutara y al ultimo el incremento
    if (i % 2 === 0) {
        console.log(`${i} Es par`);
    }else {
        console.log(`${i} Es impar`);
    }
}

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre );
}

//While Loop

let i = 0; //Indice

while (i < 10) { // Condicion
    console.log(i);
    i++; // Incremento
}

let j = 0;

while(j < carrito.length){
    console.log(carrito[j].precio);
    j++;
}

// Do While Loop
//Este ejecuta el codigo almenos una vez y despues evalua si la condicion se cumple
let k = 100;

do {
    console.log(k);

    k++;
} while(k < 10){

}


