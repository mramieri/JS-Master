const busqueda = document.querySelector(".busqueda");
/*
busqueda.addEventListener("cut" , () => { //Keydown se ejecuta cuando presiono una tecla
        console.log("cortando....");
} );
*/

busqueda.addEventListener("input" , (evt) => {  
  if (evt.target.value === "") {
    console.log("hey, falló la validacion");
  }
    
} );