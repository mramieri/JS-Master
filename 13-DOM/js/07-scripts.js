/*
Ej: Cuando lleno un formulario y dejo campos vacios, el campo se muestra en color rojo. Eso es porque tiene una clase basada en la  interaccion 
que yo estoy haciendo


//Modificar el color del encabezado


const encabezado = document.querySelector("h1"); 
encabezado.style.backgroundColor ="red";


const encabezado = document.querySelector("h1");
encabezado.style.backgroundColor = "red";
//Y si le quiero cambiar la fuente al encabezado

encabezado.style.fontFamily = "Arial";

//Y si le quiero cambiar la fuente a mayusculas
encabezado.style.textTransform = "uppercase";

Nota: esta sintaxis para cosas sencillas está ok, pero a ese ritmo mi código de JS va a ser muy grande!Igual, la aparencia es responsabilidad del código CSS. Entonces, es una buena práctica agregar o quitar clases.
*/

//1. Selecciono el 1er card que es "Musica Electronica"
/*
const card = document.querySelector(".card");
card.classList.add("nuevaa-clasee", "second-class-bb");  
console.log(card.classList);  
*/
 
/*
const card = document.querySelector(".card");
card.classList.add("nuevaa-clasee", "second-class-bb");  
card.classList.remove("second-class-bb");  
console.log(card.classList);  
*/

const encabezado = document.querySelector("h1"); 
encabezado.style.backgroundColor = "pink";
encabezado.style.fontFamily = "arial";
encabezado.style.textTransform = "uppercase";


const card = document.querySelector(".card");
card.classList.add("clasee-nuevitaa", "holaa");
card.classList.remove("holaa");
console.log(card.classList);
