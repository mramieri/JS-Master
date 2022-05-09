//Voy a crear un arreglo que será un objeto:
const carrito = [ // Esto es un array
    { nombre: "Monitor 27 pulgadas", precio: 500}, // Esto es un objeto  productos
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];
//Antes habiamos iterado con el for sobre un elemento plano (una linea con enero, febrero, marzo..)
/*
for (let i = 0; i < carrito.length; i++) {
       console.log(carrito[i].nombre); // Esto irá iterando sobre cada objeto.
    }
*/
    //Y si quiero acceder al nombre y al precio:

    
for (let i = 0; i < carrito.length; i++) {
    console.log(`nombre ${carrito[i].nombre} - Precio ${carrito[i].precio}`); // Esto irá iterando sobre cada objeto.
 }

 //.forEach    -- el más común de todos los que voy a usar:

 //se coloca el nombre del array y luego .foreach(); (al estar con un punto y luego el nomreb, eso lo hace un método)

 //si tengo hola(); --> esto es una funcion
 //Si tengo "hola".foreach(); --> esto lo hace un método.
 //El for de arriba y el .foreach hacen basicamente lo mismo:
/*
 //Acá tengo el array (carrito) punto el iterador y adentro de esto pongo la función
 carrito.forEach( function () {

 } )
 la funcion va a hacer lo mismo que tengo adentro del for
 en lugar de meter a carrito en mi funcion, puedo poner una variable un poco más descriptiva con lo que estoy haciendo.
 lo voy a nombrar producto
 */

 carrito.forEach( function ( producto ) {

} )

/*
O sea, carrito es el plural de todo el array inicial const carrito = [ etc...
    y "producto" es c/u de esos objetos (Tablet, Monito, CPU, etc)
    ese .foreach va a ir iterando sobre c/u de esos objetos. Y yo les voy a poner ese nombre que se llama producto

    ahora ya no estoy iterando sobre carrito, sino sobre producto
*/
/*
carrito.forEach( function ( producto ) {
    console.log(`nombre ${carrito[i].nombre} - Precio ${carrito[i].precio}`);
} )
//Y como yo estoy iterando sobre producto, puedo reemplazar a carrito por producto.
//Y si quiero ver el nombre tengo la sintaxis de punto

*/
carrito.forEach( function ( producto ) {
    console.log(`nombre ${producto.nombre} - Precio ${producto.precio}`);
} ) //El resultado en la console es el mismo que el de antes!
//Ese foreach y ese for hacen lo mismoo. ambos son iguales.