//como hacemos para que un objeto se comporte como una constante? o sea que no pueda ser modificado? se usa el MODO ESTRICTO
//me permite evaluar el codigo de JS de forma estricta. sin malas practicas. me exige que este cumpliendo con ciertas reglas al momento de escribir mi codigo de JS.
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}


Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = "imagen.jpg";

//delete producto.precio; 

console.log(producto);

console.log(Object.isFrozen(producto));
