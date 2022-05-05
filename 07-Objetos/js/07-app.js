
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}



 //const nombreProducto = "Monitor";
 //nombreProducto = "Tablet"; // Esto NO se puede hacer porque no se puede reasignar una variable con CONST.
 //Sin embargo, en los objetos si se puede reasignar! Eso pasa porque a pesar de que una variable sea CONST, al estar en un objeto, sus llaves si se pueden reescribir.

 //si aca modifico el valor de disponible y lo mando a false;

 producto.disponible = false;

 delete producto.precio; // Acá inclusive lo puedo eliminar!
 console.log(producto);  // Efectivamente la consola me devuelve disponible = false.

