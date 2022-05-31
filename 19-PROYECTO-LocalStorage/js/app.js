//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];



//Event Listeners
eventListeners();
function eventListeners(){
    //Cuando user agrega nuevo tweet
    formulario.addEventListener("submit", agregarTweet); 
    
    //Cuando el documento está listo:
    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets")) || []; 

        console.log(tweets);

        crearHTML();
    });

}



//Funciones
function agregarTweet(e){
    e.preventDefault();

    //Text area donde el user escribe
    const tweet = document.querySelector("#tweet").value;
    
    
    //Validar formulario
    if(tweet === ""){
        mostrarError("Un msj no puede ir vacio");
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    };

     //Añadir al array de tweets
     tweets = [...tweets, tweetObj];

     //Una vez agregado, creo el HTML:
     crearHTML();

     //Reiniciar el formulario
     formulario.reset();
}


//Mostrar msj de error
function mostrarError(error){
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    //Insertarlo en el div contenedor
    const contenido = document.querySelector("#contenido")
    contenido.appendChild(mensajeError);

    //Elimina alerta dsp de 3 segs
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los tweets:
function crearHTML(){

    limpiarHTML();

        if(tweets.length > 0){
        tweets.forEach(tweet => {
            //Agrego delete button   1.
            const btnEliminar = document.createElement("a")
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.innerText = "X";

            //Añadir la funcion de eliminar 3.
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id); 

            }
                        
            //Creo el HTML
            const li = document.createElement("li");

            //Añadir el texto:
            li.innerHTML = tweet.tweet;

            //Asignar el boton  2.
            li.appendChild(btnEliminar);

            //Inserto en HTML
            listaTweets.appendChild(li);

        })

        
    }

     sincronizarStorage();
}

//Agrega los tweets actuales a local storage:

function sincronizarStorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id){
     tweets = tweets.filter( tweet =>  tweet.id !== id); 
     
    crearHTML(); 
}


//Limpiar HTML:
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}