// Switch

const metodoPago = 'cheque';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarejeta');
        break;
    case 'cheque':
        console.log('El usuario pagara con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}
