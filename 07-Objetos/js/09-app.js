"use strict";


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

Object.seal(producto); // Sellar el objeto.
//A diferencia de freeze, no se puede agregar y eliminar propiedades, pero si se pueden modificar las existentes. Como es el caso de 
//producto.disponible Ahi si que me deja editarlo, porque seria modificar una existente.

//producto.disponible = false;
//producto.imagen = "imagen.jpg"; // Pero aca me da error! esta es agregar y ahi si que no me deja.
delete producto.precio; // Aca me da error! esta es quitar y ahi tampoco me deja.


//console.log(producto);
 
//Entonces si me hacen esa pregunta para un trabajo: cual es la diferencia entre freeze y seal?
//Freeze no me deja hacer nada, deja el objeto tal cual está
// Y seal me permite modificar las llaves ya existentes de un objeto. pero no me deja añadir nuevas no tampoco eliminarlas.

//Si quiero saber si un objeto está sellado:

console.log(Object.isSealed(producto)); // Y le paso el objecto que quiero comprobar, usando "object.isSealed"