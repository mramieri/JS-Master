const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },

]



for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - precio:${carrito[i].precio}`);
    }

    //esto itera (repite) sobre cada objeto.
    //el array method de JS tiene una sintaxis mas simple y directa que este for loop.

    //voy a hacer un array method con .ForEach) lo mismo que el for loop de la fila 13:
//le pongo un .  a la funcion y despues la accion eso lo hace un metodo:    
    carrito.forEach(function (producto) {
        console.log(`${producto.nombre} - precio:${producto.precio}`)
    });

    //el for loop y el foreach hacen lo mismo.

