
//document hace referencia a todo el documento html
//querySelector cuando se le pasa un ID hace referencia a ese elemento con ese ID
const boton = document.querySelector('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
});


if (Notification.permission = 'granted') { 
    new Notification('Hollow Knight', { // new Notification recibe 2 parametros, 1 - El titulo 2 - objeto con algunas opciones
        icon: 'img/Hornet.png', //Imagen de la notificacion
        body: 'El mejor personaje' //Texto de la notificacion
    })
}
