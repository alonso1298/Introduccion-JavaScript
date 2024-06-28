// Metodos de propiedad 
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar : function() {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`La Playlist: "${nombre}" se creo exitosamente`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo: "${nombre}"`)
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(652);
reproductor.crearPlaylist("BadBunny");
reproductor.reproducirPlaylist("BadBunny");