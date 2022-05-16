//Como agregar un elemento al final de este array. 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//como haria para agregar Agosto al final de este array?

/*
const meses2 = ["Agosto", ...meses]; // La otra cosa es el ORDEN. si yo le pongo el string adelante de lo que vaya a replicar con el ...spread, eso entonces va a ir primero!
console.log(meses2);
*/
//Array con objetos

const producto = {nombre: "disco duro", precio: 300} // como agrego este producto al carrito?

const carrito2 = [producto, ...carrito]; // Reminder: la sintaxis del spread operator me creará un nuevo array Y en el caso de objetos, NO le pongo los ... solo le paso el objeto en cuestión (en este caso, producto).
console.log(carrito2);