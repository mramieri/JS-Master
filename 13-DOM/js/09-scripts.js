//eliminar elementos del DOM
/*
const primerEnlace = document.querySelector("a");
primerEnlace.remove();
*/

//Eliminar desde el padre:

const navegacion = document.querySelector(".navegacion"); // 1er paso es seleccionar a la clase contenedora del elemento que quiero eliminar
console.log(navegacion.children); // 2. con esta propiedad podré encontrar los "hijos" de la clase seleccionada. 3. Así sabré la posición de indice para poder eliminar el elemento.

navegacion.removeChild(navegacion.children[2]);//4. Supongamos quiero eliminar "registro", de la posición n° 2. Uso el método removeChild. Y le paso el nodo que quiero eliminar