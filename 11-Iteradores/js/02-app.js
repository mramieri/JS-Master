/*
for ( let i = 0; i <=20; i+=2 ) {

    if (i === 10) {      
        console.log("This number is TEN");
        continue;
      
    }
    console.log(`Numero es ${i}`);
}
*/

const carrito = [   
    { nombre: "Monitor 27 pulgadas", precio: 500},  
    {nombre: "Tablet", precio: 100, descuento: true},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];

//Primer paso: listar todos los elementos de mi carrito:
for (let i = 0; i < carrito.length; i++) {
    if( carrito[i].descuento ) { // Desde el IF voy a llamar a mi carrito y apuntar específicamente a descuento
            console.log(`El articulo ${carrito[i].nombre} está de descuento`); // Desde el console.log, listo al articulo con descuento. Entonces, lo puedo destacar en la interfaz y de esta manera conseguir que lo comprenn
            continue; // Es para que NO liste ese elemento en el carrito
    }
    console.log("Productos disponibles : " ,carrito[i].nombre); // Desde acá listo a todos los articulos del carrito
} 