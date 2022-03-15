//¿Que son los métodos de propiedades? otra manera de ver funciones, pero dentro de un objeto.
//los métodos de propiedad son: funciones con una sintaxis que al utilizarla, es lo mismo que un método. 
//llegan a ser muy comunes sobretodo porque es un objeto puede contener muchas funciones!

//const reproductor = {
        //reproducir: function (id) {
                //console.log(`Reproduciendo canción con el id ${id}`); // hasta aca: es un objeto pero en su propiedad existe una función
        //},
        //pausar: function() {
            //console.log('pausando...')
        //},
            //borrar: function(id) {
            //console.log(`Borrando canción.. ${id}`)
            //},
            
        //crearPlaylist: function (nombre){
            //console.log(`Creando playlist de ${nombre}`)
        //},
        
       // reproducirPlaylist: function (nombre) {
           // console.log(`Reproduciendo la playlist ${nombre}`);
        //}
        
//}

 //reproductor.reproducir(30); //Siempre debo utilizar la sintaxis de punto, cuando estoy trabajando con objetos.
 //reproductor.reproducir(20);
 //reproductor.pausar();

 //es una funcion con una propiedad = se los conoce como métodos de propiedad.
 //Tmb toman parámetros y argumentos.

 //reproductor.borrar(30);
 //reproductor.pausar();
 //reproductor.crearPlaylist('Fiestera');
 //reproductor.crearPlaylist('Rock 90s');
 //reproductor.reproducirPlaylist('Fiestera');
 
 //PRACTICA N°2: crear un reproductor de música

 const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
        },
        pausar: function() {
            console.log('Pausando...');
        },
        borrar: function(id) {                       //"borrar" es el nombre del nuevo método de propiedad. // y 'id' Es un parámetro de argumento.
            console.log(`Borrando canción..${id}`);
    },
        crearPlaylist: function(nombre) {
            console.log(`Nueva playlist de ${nombre}`);
        },
        reproducirPlaylist: function (nombre) {
                console.log(`Reproduciendo la Playlist de ${nombre}`)
        }
       
 }

    reproductor.reproducir(30);
    reproductor.reproducir(20);
    reproductor.pausar(); //mando a llamar a mi método
    reproductor.borrar(30);
    reproductor.crearPlaylist('Fiestera');
    reproductor.crearPlaylist(`lentos`);
    reproductor.reproducirPlaylist(`lentos`);