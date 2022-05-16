
const pendientes = ["tarea", "comer", "proyecto", "JavaScript"];  //Array tradicional
const carrito = [   //Array de objetoS
    { nombre: "Monitor 27 pulgadas", precio: 500},  
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];


for ( let pendiente of pendientes) {
        console.log(pendiente);
}


for (let producto of carrito) { //Y esto me va a dar acceso a cada uno de los productos:
    console.log(producto);
}