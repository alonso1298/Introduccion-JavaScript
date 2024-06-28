
function sumar(num1, num2) { // um1, num2 son Parametros
    console.log(num1 + num2);
}

sumar(10, 10); // Argumentos o valores reales
sumar(3, 3);
sumar(5, 9);
sumar(20, 30);

sumar(10, 10); // Argumentos o valores reales

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);

function sumar3(x = 0, y = 0) { // x = 0, y = 0 son Parametros por default
    console.log(x + y);
}

sumar3(5); // En caso de que no este presente elguno de los argumentos este tomara el que esta por default
