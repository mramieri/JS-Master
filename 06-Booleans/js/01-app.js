//Booleans: Unicamente puede tener 2 valores: True or False. Una tecla: prendido o apagado. En un examen, algo da verdadero o da falso.

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

//console.log(boolean1);
//console.log(boolean2);
console.log(boolean3);

console.log(typeof boolean1); // Esto me devuelve que es un tipo de dato "boolean".

 /*
// Si aca uso el comparador == para comparar boolean 1 y 3, no me da true... aca se comporta de una forma diferente al ser un boolean
console.log(boolean1 == boolean3);    

//En el caso de números y strings, si se puede usar el ==. Pero en lo que es el tipo de dato de booleans, nop


//Existe una manera de crear booleans 

const boolean4 = new Boolean(true);
console.log(boolean4); // eso envia a la consola el valor de true, que es lo que yo le pasé. me devuelve un boolean.

//Pero ahora, si yo envio a al consola un typeof

console.log(typeof boolean4); // Me devuelve que es un object! no será un boolean como tal, sino un objeto
//el tipo de constructores "new" usualmente crean objetos, no crean digamos el valor primitivo.

*/