// Asyc / Await

/*
Supongamos 2 personas van a un restaurante, una persona pide un corte de carne y la otra persona un vaso de agua;
la orden de la persona que pidio el corte tardara 30 minutos y la persona que pidio el vaso de agua se lo pueden traer en 20 segundos;
No nos esperaremos a que este el corte para que traigan el vaso de agua, ese es la idea del codigo Asincrono (Asyc) 
*/

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000); 
    });
} 

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... Espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000); 
    });
} 



async function app() { // Se agrega Async antes de una funcion para indicar que es asincrona
    try {
        // const clientes = await descargarNuevosClientes(); //Se agrega el await antes 
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); // Con esto ambas funciones se ejecutan al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea');

