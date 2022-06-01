//Variables
const formulario = document.querySelector("#formulario");
const misTweets = document.querySelector("#lista-tweets");
let bolsaTweets = [];


//Eventos
formulario.addEventListener("submit", agregarTweet);
document.addEventListener("DOMContentLoaded", () => {
    bolsaTweets = JSON.parse(localStorage.getItem("bolsaTweets")) || [];
    console.log(bolsaTweets);

    crearHTML();
});


//Funciones:

//Agrego un tweet
function agregarTweet(e){
    e.preventDefault();

    const msj = document.querySelector("#tweet").value;
   
    //Validación text area
    if(msj === ""){
        mostrarError("El msj no puede estar vacio");
        return;
    }

    //Agrego el tweet
    const tweetObj = {
        id: Date.now(),
        dice: msj,
    };

    //Añado array de tweets
    bolsaTweets = [...bolsaTweets, tweetObj];
   

    //Una vez agregado, genero HTML:
   crearHTML();

   //Reseteoo
   formulario.reset();
}

//Mostrar error
function mostrarError(error){

   const mensajeError = document.createElement("p");
   mensajeError.textContent = error;
   mensajeError.classList.add("error");//este error es la classlist

    //Insertar en HTML:
    const contenedor =  document.querySelector("#contenido") 
   contenedor.appendChild(mensajeError);

   //Alerta error msj
   setTimeout(() => {
    mensajeError.remove();
   }, 3000);
}

//Muestra listado de tweets
function crearHTML(){

    //Limpio el HTML
    limpiarHTML();

    if(bolsaTweets.length > 0){
        bolsaTweets.forEach( texto => {
        //Agrego Btn de eliminar
        const btnEliminar = document.createElement("a");
        btnEliminar.classList.add("borrar-tweet");
        btnEliminar.innerText = "X";

        //Añadir la funcion de eliminar
        btnEliminar.onclick = () => {
            borrarTweet(texto.id);
        }


        //Creo el HTML
        const li = document.createElement("li");
       
        //Añado el texto
        li.innerText = texto.dice;

        //Asigno el btn
        li.appendChild(btnEliminar)

       //Inserto en HTML
        misTweets.appendChild(li);

        })        
    }
    sincronizarStorage(); // Reminder: una vez que se crea el HTML, siempre estamos sincronizando con el storage
}


function sincronizarStorage(){
    localStorage.setItem("bolsaTweets", JSON.stringify(bolsaTweets))
}


//Elimina un Tweet:
function  borrarTweet(id){
 bolsaTweets = bolsaTweets.filter(texto => texto.id !== id);
    console.log(bolsaTweets);
    crearHTML();
}


function  limpiarHTML(e){
    while(misTweets.firstChild){
        misTweets.removeChild(misTweets.firstChild)
        
    } 
}

