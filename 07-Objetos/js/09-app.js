//con Seal si bien se sella, se puede modificar lo que existe adentro del objeto
//lo que si, a diferencia del freeze, es que no puedo agregar algo nuevo. si intento agregar algo, me va a decir la consola error-objeto no extensible.

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}


Object.seal( producto );

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio; 

console.log(producto);

 //con freeze no se puede hacer nada, deja el objeto tal cual esta
 //seal si me permite modificar las llaves existentes de un objeto, pero no me permite añadir nuevas. ni tampoco eliminarlas.

 //¿como saber si un objeto esta sellado?:

 console.log(Object.isSealed(producto));