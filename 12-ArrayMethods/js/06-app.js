//.Every: es un array method. todos los elementos de un arreglo deben cumpplir esa condicion para que nos retore un true


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 500 ); //me retorna true; solo si 1000 se cumple en todos los objetos. EN TODOS se deben cumplir.
console.log(resultado);

const resultado2 = carrito.some( producto => producto.precio < 500 ); //me retorna true si al menos 1 se cumple. al menos 1 se debe cumplir.
console.log(resultado2);