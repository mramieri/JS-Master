// For, while y do while existen en casi todos los lenguajes de programacion
// en JS no se usan tanto.
//en JS no se utilizan tanto. se usan los arrau methods.

//ahora: mayor enfoque en JS. el ForEach es el que mas se usa. es ideal para recorrer arreglos. Se ejecutará al menos una vez, por CADA vez que haya arreglos en el elemento.
//si en el arreglo hay 20 elementos, se ejecutará 20 veces.,

//forEach: es el IDEAL para recorrer una arreglo.

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar', 'JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoArreglo = carrito.forEach ( producto => producto.nombre);

const nuevoArreglo2 = carrito.map ( (producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

//la unica diferencia con estos dos: es que map crea un arreglo nuevo. foreach no.

