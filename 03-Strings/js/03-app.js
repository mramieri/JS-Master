/*
Si quiero unir o concatenar 2 variables:

puedo utilizar .concat()
*/

const producto = ' Monitor de 20 pulgadas ';
const precio = ' 30 USD';

//console.log(producto.concat(precio));
//console.log(precio.concat(producto));
//console.log(producto.concat('En descuento'));
/*
Reminder: Estos son métodos unicamente disponibles en Strings. 

Por otro lado, si es un array, un object, un boolean (true/false). Cada uno tiene sus propios metodos.
Yo le puedo pasar funciones propias . Yo tmb puedo crear mis propias funciones.


con un + tambien puedo concatenar:
*/

//console.log(producto + " con un precio de " + precio);

//console.log("El producto" + producto + "tiene un precio de " + precio);
console.log("El producto" , producto , "tiene un precio de " , precio); //Si se reemplaza el + por una , el resultado es exactamente el mismo.

/*

Como se soluciono el tema de esta sintaxis en EcmaScript 6. fue un gran paso para javascript.
una mejor forma de concatenar variables. se conoce entonce como "template strings" o "template literals".

*/

//console.log(`El producto ${producto} tiene un precio de $ ${precio} `);

/*
acento grave (backtick alt + 96).
La caracteristica de estos template strings es que las variables se agregan adentro de ${} siempre. Toodo lo demas sigue siendo una cadena de texto.

Y esta sintaxis es un poco mas facil de leer tmb
*/
