const producto = '                 Monitor de 20 pulgadas            ';

console.log(producto);
console.log(producto.length);



//eliminar del incicio muchos espacios (en formularios x ej)
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log ( producto.trimStart().trimEnd() );
//ese es el que va! el ultimo borra adelante y atras a los espacios, me ayuda a eliminar espacios en una direccion o en otra.

console.log( producto.trim() );
//esta ultima borra TODOS, cuando no es necesario borrar en ambas direcciones
