//Break: Corta la ejecucion de un ForLoop
//Continue: Nos permitirá inteceptar un elemento, identificarlo y continuar la identificacion. -- pregs para obtener un trabajo.

//for ( let i = 0; i <= 10; i++ ) {
 //       if (i===5 ) { 
 //       console.log ('Cinco, bebé');
   //     continue; // rompe la linea y break ya corta todoo y rompe el bucle
    //}
    //        console.log(`Numero: ${i}`)
    //}


   //break; //pregunta comun de entrevista.

   //cuando usar continue?

   
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

for ( let i =0; i< carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue; // para que no lo liste 
    }
    console.log(carrito[i].nombre)
}