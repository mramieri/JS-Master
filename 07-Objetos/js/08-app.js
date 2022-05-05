"use strict";

//Métodos para objetos:
//Esto nos permite modificar las llaves de un objeto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

//Recapitulando en las hojas anteriores:
//Yo asi puedo modificar las propiedades de mi objeto "producto":


Object.freeze(producto); // Aca ahora la consola me devuelve un error message, diciendome que no se puede modificar al producto
//De esta manera, estoy haciendo que mi objeto tenga un comportamiento más similar a lo que tenemos con CONST 

//producto.disponible = false;
//producto.imagen = "imagen.jpg"; 
//De esta manera no me deja modificar a producto!

//delete producto.precio;

console.log(producto);

//Y cómo hago para que un objeto se comporte como una constante? Es decir, que no pueda ser modificado?
//Bueno, para eso tenemos que habilitar el "modo estricto". Para eso, colocamos "use strict"; al inicio de mi hoja pp.js
// Si yo intento hacer

/*
x = 20;
console.log(x); // la consola me va a decir "no creaste la variable pero yo lo hago po vos", y se imprime ese 20. En cambio, si habiluto el 
// "use strict"; no me deja hacer malas prácticas!
*
*/


console.log(Object.isFrozen(producto)); // Y me devuelve true! o sea que si está freezado.
//Por lo tanto, ya se que no lo voy a poder modificar.

// Lo más seguro es que tengamos que clonarlo para moder modificar la otra copia.
//Entonces es útil porque ya le da un comportamiento más similar al de CONST