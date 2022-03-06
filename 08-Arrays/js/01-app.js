//Sirven para agrupar elementoS, varios, del mismo tipo.
//Mientras que un objeto sera una variable que agrupara informacion de un objeto/elemento.
//Un array puede tener multiples objetos que sean iguales

//Misma sintaxis para crear ya sea una variable, un objeto, los cuales se crean con llaves. los arrays se crean con corchetes.
// aca no se usa la llave como en objetos ni valores, solo una coma y el corchete.

const numeros = [10, 20, 30];

//esta forma no es tan conocida de Arrays:
const meses = new Array('Enero', 'Febrero', 'Marzo');

console.log(numeros);   
console.log(meses);  

//los arrays tienen indices: es el indicador de la posicion en la que se encuentra ese arreglo. los arreglos incian en 0.

//se pueden crear arreglos con todo tipo de datos!
//ARRAY este contiene datoe de todo tipo:    

const deTodo = ["Hola", 10, true, "si", null, { nombre: " Mariel", trabajo: "Programadora"}, [1, 2, 3]];

console.log(deTodo);
