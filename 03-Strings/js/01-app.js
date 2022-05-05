const producto = "Monitor de 20 pulgadas \" "; //Esta es mas forma más comun de crear Strings en JavaScript - 1er forma.
const producto2 = String('Monitor de 24 pulgadas " ') // 2da forma: a String() le paso el valor que tendrá este String.
const producto3 = new String("Monitor de 27 pulgadas");   // 3ro: Este es el menos comun, casi ni hay ejemplos.
        //new String () <-- Eso es lo que se conoce como "crear nuevo objeto    "

console.log(producto);
console.log(producto2);
console.log(producto3);

/*
Reglas:
reglas para crear Strings:
1. no se pueden mezclar las "" dobles con las '' simples.. igual que con las variables.
2. Uso de comillas dobles para representar pulgadas o segundos/minutos.
//Se pueden escapear las comillas con una barra invertida (alt+92)

Los Strings son, entonces, representaciones de texto. cuando me llega un invite por instagram, su nombre es un String, quienes tenemos como amigos en comun, todo lo que sea texto.
Basicamente todo termina siendo un String.
*/