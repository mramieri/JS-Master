// Diferente entre número y string:
/*
const numero1 = 300;   //Este es un tipo de dato número
const numero2 = "300";  //Este es un tipo de dato String

console.log(numero1);
console.log(numero2);
*/
//En JavaScript todos los números se crean de la misma forma. (en otros lenguajes si hay muchas diferencias)

//Creación de números: 

const numero1 = 20;   
const numero2 = 30;   
const numero3 = 20.20;   //Número que no es entero: es flotante o es una fracción, o tiene decimal . En otros lenguajes tendria que ponerle el tipo de dato (float por ejemplo). por suerte en JS eso no es necesario
const numero4 = .102030;  //Tmb puedo crear números con esta sintaxis. No tengo que especificar cuando es entero, con coma, pequeña fraccion, etc.
const numero5 = -20;

console.log(numero1);
console.log(numero2);
console.log(numero3); // Y aca el resultado en consola es 20.2
console.log(numero4); 
console.log(numero5); 


//Entonces: todos los números se crean de la misma forma.

//Otra sintaxis no muy comun para crear números:

const numero6 = new Number(80);  //Esto se conoce como la creación de un objeto, en este caso un numero. De hecho, en la consola lo veo como entre {}
console.log(numero6)