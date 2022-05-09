const carrito = [ // Esto es un array
    { nombre: "Monitor 27 pulgadas", precio: 500}, // Esto es un objeto  productos
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];
/*
carrito.map( function ( producto ) {
    console.log(`nombre ${producto.nombre} - Precio ${producto.precio}`);
} )


carrito.forEach( function ( producto ) {
    console.log(`nombre ${producto.nombre} - Precio ${producto.precio}`);
} )
*/
/*
.map(); método que existe tmb en los arreglos. Es muy similar con foreach.
con .foreach son practicamente iguales.
carrito.map(  si uso ahi map en vez de foreach el resultado es el mismo, no cambia nada.
  
*/


const nuevoArray = carrito.map( function ( producto ) { // creo una nueva variable = al array
    return `nombre ${producto.nombre} - Precio ${producto.precio}`; // Elimino el console.log(); y reemplazo por return
} )
//Acá se crea un nuevo array y me aparece todo en la consola

const nuevoArray2 = carrito.forEach( function ( producto ) {   // creo una nueva variable = al array
    return `nombre ${producto.nombre} - Precio ${producto.precio}`; // Elimino el console.log(); y reemplazo por return
} )
//Acá me devuelve undefined en la consola.

console.log(nuevoArray);
console.log(nuevoArray2);


//Usos: Quizás a veces necesite crear un nuevo Carrito, donde se me acumulen los productos de > a $300 y para ello, .map es una buena opcion. todo eso aparece igual en array


