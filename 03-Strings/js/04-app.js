
const producto = '                Monitor de 20 pulgadas           ';

//console.log(producto);
//console.log(producto.length);

//Eliminar espacios del inicio:

//console.log(producto.trimStart());
/*
Tendré muchos formularios mas adelante, y ahi los usuarios en gral, para pasar las validaciones, usaran espacios en blanco.
Asi me sirve para eliminar espacios en blanco y solo se pueda insertar caracteres reales.
*/

//Eliminar espacios del final:
//console.log(producto.trimEnd());

//en JS se pueden usar los metodos de forma encadenada. Se lo llama "chaining", colocar un metodo y luego el otro:
//console.log(producto.trimStart().trimEnd()); //Asi se eliminan los espacios en ambas direcciones.

//Antes existia .trim que era para ambas direcciones:
console.log(producto.trim());