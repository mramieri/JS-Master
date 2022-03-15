//filter: crea un nuevo arreglo, basado en el parametro que es evaluado. filter permite hacer muchas operaciones sobre los arreglos.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//este se usa BANDA. reduce tmb.
//filter tmb sirve para quitar 1 elemento de un carrito de compras:
let resultado;
resultado = carrito.filter( producto => producto.precio > 400); //me crea un nuevo arreglo con la condicion que este revisando en ese momento
resultado = carrito.filter( producto => producto.precio < 600);
resultado = carrito.filter( producto => producto.nombre === 'Audifonos') // asignarle al resultado todos menos 'filter'.

console.log(resultado);