// 1. Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// 2. Event Listeners

eventListeners ();

    //Cuando el usuario agrega un nuevo tweet 
    function eventListeners () {
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; //"si me marca null, entonces asignalo como arreglo vacio"

        console.log(tweets);
        crearHTML();
    });
}

// 3. Funciones
function agregarTweet(e) { //Como es un formulario, le pasamos la e
    e.preventDefault(); //prevenir la accion por default     

    //Text area: donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validación 
    if (tweet === '') {
         mostrarError('Un mensaje no puede ir vacio');

        return; //Evita que se ejecuten más lineas de código. este RETURN funciona en un IF, siempre que se encuentre en una función
    }

    const tweetObj = {
        id: Date.now(),
        tweet            //cuando los dos objetos son = (tweet: tweet), se puede dejar uno solo
    }

    //Añadir al arreglo de tweets
      tweets = [...tweets, tweetObj];
      
         
    //Una vez agregado, vamos a crear el HTML 
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();       
}

//Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos  
    setTimeout ( () => {
        mensajeError.remove();
    },3000)  
}


    //Muestra un listado de los tweets
    function crearHTML(){

        limpiarHTML();

        if (tweets.length > 0 ) {
            tweets.forEach( tweet => {

                //Agregar un boton de eliminar
                const btnEliminar = document.createElement('a')
                btnEliminar.classList.add('borrar-tweet')
                btnEliminar.innerText = 'X';

                //Añadir la funcion de eliminar 
                btnEliminar.onclick = () => {
                    borrarTweet(tweet.id);
                }

                //Crear el HTML
                const li = document.createElement('li'); 

                //Añadir el texto
                li.innerText = tweet.tweet;

                //Asignar el boton
                li.appendChild(btnEliminar);

                //Insertarlo en el HTML 
                listaTweets.appendChild(li); //Mientras tenga un append no eliminara el registro de antes entonces aparece a, b, a, b, c, etc
            });
        }

            sincronizarStorage();
    }

    //Agrega los tweets actuales a local storage
    function sincronizarStorage() {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    //Elimina un tweet
    function borrarTweet(id) {
        tweets = tweets.filter( tweet => tweet.id !== id )
        crearHTML();
    }

    //Limpiar el HTML
    function limpiarHTML() {
        while(listaTweets.firstChild) {
            listaTweets.removeChild(listaTweets.firstChild);
        }
    }