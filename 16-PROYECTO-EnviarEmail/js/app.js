//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario =  document.querySelector("#enviar-mail");

// Variables de campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            

//Eventos
eventListeners();
function eventListeners(){

  //Cuando la app arranca:
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //Enviar email
  formulario.addEventListener("submit", enviarEmail);
  
  //Reinicia el formulario
  btnReset.addEventListener("click", resetearFormulario);

}

//Funciones
function iniciarApp(){
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}


//Valida el formulario (Para, Asunto y msj)
function validarFormulario(e) {
  
      //Validación de campos vacios o no
    if (e.target.value.length > 0) {

           //Elimina los errores..
            const error = document.querySelector("p.error");
            if(error){
              error.remove();
            }
            

      e.target.classList.remove("border","border-red-500");
      e.target.classList.add("border","border-green-500");

      } else {
        e.target.classList.remove("border","border-green-500");
        e.target.classList.add("border","border-red-500");
        mostrarError("Todos los campos son obligatorios");
      }
        //Validación del e@mail en Para:
        if(e.target.type === "email"){
              
            if (er.test( e.target.value )){
                  //Elimina los errores..
                const error = document.querySelector("p.error");
                   if(error){
                  error.remove();
                   }

        e.target.classList.remove("border","border-red-500");
        e.target.classList.add("border","border-green-500");
        
            } else {
        e.target.classList.remove("border","border-green-500");
        e.target.classList.add("border","border-red-500");
                  mostrarError("E-mail invalido, intenta nuevamente");
            }
          }      
    
            if (er.test( email.value ) && asunto.value !== "" && mensaje.value !== "") {
              btnEnviar.disabled = false;
              btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
            } 
    }


    function mostrarError(mensaje) {
      const mensajeError = document.createElement("p");
      mensajeError.textContent = mensaje;
      mensajeError.classList.add("border","border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error" );

        const errores = document.querySelectorAll(".error"); //si ya hay un mensaje previo, no me agregues más avisos
          if (errores.length === 0) {
            formulario.appendChild(mensajeError);
          } 
    
    }

//Envia el email
      function enviarEmail(e){
        e.preventDefault();

        //Mostrar el spinner
        const spinner = document.querySelector("#spinner");
        spinner.style.display = "flex";

          //Dsp de 3'', ocultar el spinner y mostrar un msjito:
          setTimeout(() => {
              spinner.style.display = "none";

              //Msj "envio de exito"
              const parrafo = document.createElement("p");
              parrafo.textContent = "El mensaje ha sido enviado de manera exitooosaa";
              parrafo.classList.add("text-center", "my-10", "p-2", "bg-pink-100", "text-black", "font-bold", "uppercase");
              
              //Inserta el parrafo antes del spinner
              formulario.insertBefore(parrafo, spinner)

              setTimeout(() => {
                parrafo.remove(); // Elimina msj de exito
                resetearFormulario(); //dsp de 5''
              }, 5000);

          }, 3000);
 }

 //Funcion que resetea el formi
 function resetearFormulario() {
  formulario.reset();
  iniciarApp();
 }