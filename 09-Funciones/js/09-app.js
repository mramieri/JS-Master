const reproductor = { 
    reproducir : function(id) {                    
        console.log(`Reproduciendo canción con el ${id}`);
    },
    pausar: function(){            //En los objetos, a medida que voy agregando más propiedades, voy poniendole una ,coma
        console.log("pausando...");

    }, 
    borrar: function (id) {
        console.log(`Borrando cancion.... ${id}`);

    }, 
    crearPlaylist: function (owner) {
        console.log(`Creando la Playlist de ${owner}`);

    },  
    reproducirPlaylist: function (playlist) {
        console.log(`Reproduciendo canción ${playlist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();  
reproductor.borrar(30);  
reproductor.crearPlaylist("Marus");
reproductor.reproducirPlaylist("It's raining man");