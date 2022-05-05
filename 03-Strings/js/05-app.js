
const producto = 'Monitor de 20 pulgadas';


console.log(producto);
console.log(producto.replace('pulgadas', '"')); // Asi reemplazo pulgadas con el signo de comillas. a las " las tengo que poner dentro de otro par de ''.-
console.log(producto.replace('Monitor', 'Monitor curvo')); // Acá estoy reemplazando el primer elemento (monitor), seguido de una , que seria el "por", y agrego al lado la data nueva por la que se reemplazará (monitor curvo)

//Asi voy modificando texto que ya existe, con estos nuevos metodos, que son muy utiles.

//para cortar:

//console.log(producto.slice(0, 10)); // "indicando desde y hasta": Le indico el index desde donde, o sea la posicion 0, hasta la n° 10 por ejemplo, INCLUSIVE.//Esto me devuelve "Monitor de".

//console.log(producto.slice(8)); //empieza a contar desde la posicion 8 en adelante. todo lo previo lo ELIMINA, si es que no le paso el segundo valor.
//console.log(producto.slice(2, 1))
//Si el n° de posicion que le paso va hacia atras y supera el 0, entonces JS no hará nada, la consola no me devolverá nada,solo espacios en blanco.

//Alternativa a Slice:

//console.log(producto.substring(0, 10)) // Se comporta IGUAL que slice 
console.log(producto.substring(2, 1)) //pero si lo trato de engañar como con Slice, JS interpreta y cambia el orden de lugar para que no me devuelva blank.
//va desde el numero de posicion 2 (hasta la n, y regresa 1 lugar , por eso me devuelve "o")

/*
Pregunta para conseguir un trabajo!
cual es la principal diferencia entre Slice y substring?
que si le paso un n| mayor de inicio y la extension, slice no hace nada pero substring lo modifica y trata de hacer algo.
*/

//Otro ejemplo: si en mi código HTML quiero mostrar la primer inicial del nombre de un usuario:
const usuario = "Maru"
console.log(usuario.substring(0, 1)); //"y que corte de la posición 0, 1 caracter nada mas" = me devuelve "M".

//Hay otro método tambien que se llama .chartAt():
console.log(usuario.charAt(0)); //Aca corta la primer letra, y el resultado es el mismo. Le digo que me corte solo la letra de la posicion 0, y me devuelve "M".
