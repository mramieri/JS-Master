//Red o Spread Operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//SpreadOperator con arreglo de indices
const meses2 = ['Agosto', ...meses, ]; //esta forma NO modifica el arreglo original. se evita hacer eso. 
console.log(meses2);

//como se utiliza el spread operator en un arreglo con objeto?

const producto = { nombre: 'Disco Duro', precio: 300 };
const carrito2 = [...carrito, producto] //sin el nombre del objeto
console.log(carrito2);


//el error comun de 'no es iterable' (no puede tomar una copia), puede ser porque le este asignando un spread (...) a un objeto.