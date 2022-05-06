//Entonces:
//Un Array posee información que esté relacionada. Se usa la misma sintaxis para crear una variable o un objeto (con CONST y el = )Los arrays siempre se crean con []
//Los objetos se crean con {} y los arrays con []

//const numeros = []; // Siempre que vea esta sintaxis de [] significa que es un array
/*
//Como son datos agrupados similares, podemos poner:
const numeros = [10, 20, 30]; //Ves? tenemos diferentes elementos en una misma variable. Y cada elemento está separado por una ,

//A diferencia de los objetos

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponbile: true,
}
*/
//Cada parte  del objeto está diferenciada por una llave y un valor. Mientras que en el arreglo solamente está diferenciados por
// esa coma, [10, 20, 30];
//Entnces, las diferencias son notorias en sintaxis entre objetos y arreglos: Uno se crea con llave , y el otro con corchete. Uno tiene llave y valor y el otro sólo tiene valores.

const numeros = [10, 20, 30];
//Hay una 2da forma de crear arreglos y no es tan comun: Acá como estoy usando un constructor, lleva () y comas, no corchetes. Es un constructor nuevo, como si fuera una funcion. Le estoy pasando valores.

const meses = new Array(10, 20, 30);

console.log(numeros);
console.log(meses);

/*
los arreglos utilizan indices, es decir, cual es la posicion que tiene ese elemento en el arreglo.
los arrays inician en posicion de 0. Se le conoce, entonces como "posición en el arreglo".

Bueno, y en un arreglo se le colocarán múltiples elementos relacionados. O sea, si, se le pueden crear multiples elementos .
Si bien se puede crear un arreglo de un solo elemento; (si compro algo por Meli, puedo agregar un elemento solo a mi carrito, no es que deba comprar si o si varios
minimo 1 o multiples elementos.
const numeros = [10];
Y tampoco es obligatorio que sean elementos relacionados. Puedo crear arrays con todo tipo de datos.

*/

//Un arreglo que contiene datos de todo tipo:

const deTodo = ["hola", 10, true, "si", null, {nombre: "Maru", trabajo: "aprender JS" }, ];
console.log(deTodo);

/*
Entonces, basicamente un arreglo es como una forma o una variable que contendrá múltiples elementos.
en lugar de ir creando una variable para diferentes cosas, puedo crear UNA que contenga por ejemplo: todos los mg de una publicación,
todas las personas que sigo en twitter o likearon mi foto de ig. todos esos son ejemplos de arreglos.

*/

//Y... un array puede estar adentro de otro array, obvio! y agrego , [1, 2, 3]
const deTodo2 = ["hola", 10, true, "si", null, {nombre: "Maru", trabajo: "aprender JS" }, [1, 2, 3]];
console.log(deTodo2);
//Así tendré un arreglo dentro de otro arreglo, de la misma forma donde puedo tener un objeto con otros objetos dentro