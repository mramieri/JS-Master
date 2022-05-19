const encabezado = document.querySelector(".contenido-hero h1").textContent; //Y de esta manera ya selecciono directamente el contenido!
console.log(encabezado); 

/*
Diferencias
console.log(encabezado.innerText);
console.log(encabezado.textContent); //Respeta los espacios en blanco
console.log(encabezado.innerHTML); // Me trae el texto y tmb el HTML.
*/

//document.querySelector(".contenido-hero h1").textContent  = "un nuevo heading";

/*
2da forma
const nuevoHeading = "Nuevo heading"
document.querySelector(".contenido-hero h1").textContent  = nuevoHeading;
*/
 
 //Modifico una imagen

 const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg" // accedo a la imagen y la modifico poniendole = a la nueva imagen en cuestion.
