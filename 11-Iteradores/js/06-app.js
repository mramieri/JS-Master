//.forEach
/*
const pendientes = ["tarea", "comer", "proyecto", "JavaScript"]; 

pendientes.forEach( (pendiente, index) => {  
    console.log(`${index}: ${pendiente}`);
}
);
*/
//Array con objetoS. También puedo ir iterando sobre mi carrito.

const carrito = [ 
    { nombre: "Monitor 27 pulgadas", precio: 500},  
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];

const nuevoArray = carrito.forEach( producto => producto.nombre); 
const nuevoArray2 = carrito.map( producto => producto.nombre); 

console.log(nuevoArray);  // Como está utilizando un foreach, no va a retornar nada 
console.log(nuevoArray2); // Mientras que nuevoArray2, como utiliza .map(), va a ir "llenando" al array nuevoArray2 = en cada iteración: