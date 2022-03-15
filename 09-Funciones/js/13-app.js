//Ventajas de arrow functions CON métodos de propiedad:

const reproductor = {
    cancion: '',
        reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
        pausar: () => console.log('Pausando...'),
        borrar: id => console.log(`Borrando canción..${id}`), // la coma es propia de los objetos, por eso la dejamos ahi
        crearPlaylist: nombre => console.log(`Nueva playlist de ${nombre}`),
        reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist de ${nombre}`),
        
        set nuevaCancion(cancion) { //Set es una forma de agregar valores.  es un metodo de propiedad.
            this.cancion = cancion;
            console.log(`Añadiendo ${cancion}`);
        },

        get obtenerCancion() {  // forma de obtener de vuelta esos valores. es un metodo de propiedad.
            console.log(`${this.cancion}`)
        }           
       
 }

reproductor.nuevaCancion = 'Enter La Cancioncita'; //solamente se usan parentesis cuando se definen de esta forma: pausar: ()
reproductor.obtenerCancion;

    reproductor.reproducir(30);
    reproductor.reproducir(20);
    reproductor.pausar(); //mando a llamar a mi método
    reproductor.borrar(30);
    reproductor.crearPlaylist('Fiestera');
    reproductor.crearPlaylist(`lentos`);
    reproductor.reproducirPlaylist(`lentos`);