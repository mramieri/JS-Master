
const carrito = [ // Esto es un array
    { nombre: "Monitor 27 pulgadas", precio: 500},  
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];

const nuevoArray = carrito.map( producto => `nombre ${producto.nombre} - Precio ${producto.precio}` );
 

carrito.forEach( producto =>  console.log(`nombre ${producto.nombre} - Precio ${producto.precio}`) ) 

console.log(nuevoArray);
