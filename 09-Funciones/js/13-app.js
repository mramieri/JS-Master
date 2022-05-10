// Llevar estas funciones a arrow functions:


const reproductor = {reproducir: id => console.log(`Reproduciendo canción con el ${id}`),    
    cancion: "",    
    pausar: () => console.log("pausando..."), // Acá si o si le tengo que poner los () vacios porque no hay parámetro 
    borrar: id => console.log(`Borrando cancion.... ${id}`), 
    crearPlaylist: owner => console.log(`Creando la Playlist de ${owner}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo canción ${playlist}`),

    //Otras 2 firmas de agregar! set y get     

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    }, 

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = "Dale don dale"
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();  
reproductor.borrar(30);  
reproductor.crearPlaylist("Marus");
reproductor.reproducirPlaylist("It's raining man");

 