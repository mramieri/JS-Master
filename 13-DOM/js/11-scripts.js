
const btnFlotante = document.querySelector(".btn-flotante"); 
const footer = document.querySelector(".footer");


btnFlotante.addEventListener("click", mostrarOcultarFooter); 

function mostrarOcultarFooter () {
    
    if (footer.classList.contains("activo")) { 
                                                  
        footer.classList.remove("activo");    
        this.classList.remove("activo");   
        this.textContent = "Idioma y moneda ";// 8. Cosa de que cuando esté cerrado, vuelva a su nombre original
   } else {
         footer.classList.add("activo");   
         this.classList.add("activo");   
         this.textContent = "X Cerrar ";// 7. como es un botón, a btnFlotante le pongo un texto! cosa de que cuando se active el cartel, se le cambie el nombre
   }     
}