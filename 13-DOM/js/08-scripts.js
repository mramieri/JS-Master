//104. Traversing the DOM (recorriendolo)

const navegacion = document.querySelector('.navegacion'); // o nav.navegacion o .navegacion (el ; no es necesario)

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
//console.log(navegacion.childNodes); //los espacios en blanco son considerados elementos 
//console.log(navegacion.children);  //muestra unicamente elementos de HTML , o sea los reales
//estos serian NODOS, que estan conectados al DOM. todo esto esta relacionado


//console.log(navegacion.children[1]); //esto me retorna el HTML Collection
//console.log(navegacion.children[1].nodeName); //me duelve A (la etiqueta)
//console.log(navegacion.children[1].nodeType); // me devuelve 1 (lo busco en la documentacion de firefox) --> Me permite identificar los distintos elementos que tengo

//SEGUN FIREFOX ELEMENT_NODE (1) los elementos son como las etiquetas de HTML

const card = document.querySelector('.card'); //elijo un selector: CARD y comienzo a navegar sobre sus distintos elementos (hijos. los children). // esto es traversing the DOM

card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM' // Asi puedo modificar el titulo

//console.log(card.children[1].children[1].textContent);

//asi 'voy encontrando mi camino' sobre los diferentes nodos o los diferentes elementos HTML de mi sitio/aplicacion web

//card.children[0].src = 'img/hacer3.jpg'; // Asi cambio la imagen
//console.log(card.children[0]);

//esto es traversing the DOM. voy navegando los distintos elementos.



//Traversing the DOM del hijo al padre

//console.log(card.parentNode); //nota: estos nodes toman en cuenta los espacios en blanco.
//console.log(card.parentElement.parentElement.parentElement); //verifica elementos validos en el HTML. el resultado es el mismo pero es una forma mas segura

//con Children voy recorriendo los hijos. con parentElement voy recorriendo hacia el padre del elemento en el que estoy.

//para recorrer 'hermanos:'
//console.log(card);
//console.log(card.nextElementSibling); //de esta manera reviso el 'hermano', y al siguiente, y al siguiente. de arriba hacia abajo.
//console.log(card.nextElementSibling.nextElementSibling); 


//pero hay una manera de ir de abajo hacia arriba:
//const ultimoCard = document.querySelector('.card:nth-child(4)');
//console.log(ultimoCard.previousElementSibling); //esto me devuelve un elemento antes. revisa el n°2 por ejemplo.