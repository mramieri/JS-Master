
/*
const navegacion = document.querySelector(".navegacion");

console.log(navegacion);
console.log(navegacion.childNodes); // Me trae esa especie de array. Y me muestra todo. Los espacios en blanco so considerados elementos. Los saltos de línea o el enter que le pongo al código en el HTML
console.log(navegacion.children);


console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);
*/
/*
const card = document.querySelector(".card");

card.children[1].children[1].textContent = "Nuevo HEADING desde Traversing the DOM"

console.log(card.children[1].children[1].textContent);


//cambiar una imagen:

const card = document.querySelector(".card");

card.children[1].children[1].textContent = "Nuevo HEADING desde Traversing the DOM"

card.children[0].src = "img/hacer4.jpg";

console.log(card.children[0]); 



//Traversing del hijo al padre

const card = document.querySelector(".card");

//console.log(card.parentNode); // Y es verdad! me aparece como "padre" a div class contenedor-cards
//console.log(card.parentElement.parentElement.parentElement);

//Hermanos
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling); // Este me permitirá seleccionar el siguiente, y el siguiente, mientras siga habiendo elementos (obvio que de arriba hacia abajo)


//Traversing hacia arriba 

const ultimoCard = document.querySelector(".card:nth-child(4)");

console.log(ultimoCard.previousElementSibling); //Este me trae el último card que tengo en ese div
//Existe la propiedad de .previousElementSiblings
*/

const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

 