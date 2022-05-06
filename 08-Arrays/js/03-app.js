/*
Métodos, operaciones útiles con los arrays. Por ejemplo: agregar elementos, quitarlos, listarlos, etc.

La operacion mas importante: es cómo acceder a todos los elementos del Array
*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.table(meses);
// Y esto me devuelve toda la información del Array con todo lo que tiene dentro

//Si compro algo en Meli y voy agregando items al carrito, se ponen en lista, y puedo verlos asi
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]); // Pero tiene que haber alguna manera que me muestre todo de una, o sea acceder al array con un sólo codigo! (acceder al carrito por ejemplo con un solo codigo)

//porque habrá compradores que tengan 1 carrito, 0 carrito o 100 carritos! entonces como hago para recorrer un arreglo? que su distancia, tamaño puede ser variable.
//no todas las personas tienen la misma cantidad de amigos en facebook por ejemplo, no todas las personas compran la misma cantidad de cosas, etc

//Debe de haber alguna manera de recorrer un Arrary, de una manera más eficiente, cuando es grande: Para ello:
//1. Conocer cuanto mide el array
console.log(meses.length); // La consola me devuelve que mide 6. este lenght inicia en 1  no en 0
//De esta manera, puedo escribir un código que se ejecute SOLO la cantidad de veces que hay en un arreglo.
/*
O sea si tengo un arreglo con 2 o 3 posiciones, pongo console.log(meses[0]); y console.log(meses[1]);
pero si tengo 100 elementos no voy a escribir 100 veces console.log!

para recorrer un arreglo se una un ITERADOR (o sea un for loop)
*/
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

/*
el for loop es una function que tiene 3 partes en el (parentesis)
1. El primer valor que va en ese () es el valor donde iniciará el iterador. En mi caso, quiero que inciie en "enero", entonces es desde la posición 0. Coloco entonces una variable para ello:
let i = 0;

2. La 2da parte del for loop es, ¿cuántas veces quiero que se ejecute este código? Por ejemplo, si quiero que se ejecute 100 veces. Bueno no puedo hacer que se ejecute más veces de la que es necesario porque eso me arma ese blucle infinito! SOLO que corra tantas veces como la cantidad de elementos que hay en el arreglo.
Si yo sigo agregandole meses al array, entonces el for loop seguirá detectando el tamaño del arreglo, y seguirá corriendo el código todas esas veces.

entonces, en este caso coloco:
i < meses.lenght // Esto significa que i recorrerá el arreglo 6 veces (porque tengo 6 elementos en el arreglo). el Array meses tiene 6 elementos --> si es > a meses.lenght, ya estaría accediendo a partes del arreglo que no existen, y eso me marcaría undefined.

3. 3ra parte: Quiero ir recorriendo de uno en uno:
entonces debe ir incrementando de 1 en 1. para ello coloco i++
porque let y no const?
porque si dejo const, la variable "i" irá incrementando de 1 en 1, cada vez que se ejecute esta funcion, pero no se podrá reasignar su valor, entonces utilizo let.

por último, adentro del for loop, entre {las llaves} le pongo en console log a esa variable i

*/