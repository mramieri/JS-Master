//.map es lo mismo que .foreach son practicamente iguales en sintaxis:
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },

]


   
    const nuevoArreglo = carrito.map(function (producto) {
        return`${producto.nombre} - precio:${producto.precio}`
    });

    const nuevoArreglo2 = carrito.forEach(function (producto) {
        return`${producto.nombre} - precio:${producto.precio}`
    });


   
//1° diferencia: .map te crea un array nuevo. llena una variable con un arreglo nuevo.
//

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


//.map crea un nuevo arreglo y foraeach no.