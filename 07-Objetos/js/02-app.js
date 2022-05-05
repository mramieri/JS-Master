//Un objeto es como si fueran múltiples variables en una sola:

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponbile: true,
}

console.log(producto);

/*
Cómo puedo acceder al "nombre" que dice "Monitor de 20 pulgadas" ?
Bueno, los objetos tienen algo que se llama "La sintaxis de punto".
Si yo pongo console.log(producto. ); puedo acceder con ese . a Nombre, Precio y disponible
*/

//Forma 1: Si quiero acceder al nombre: la más común
console.log(producto.nombre); // Y en la consola me devuelve el valor, justamente "Monitor de 20 pulgadas".

//Forma 2: que no es muy común: En vez de acceder con un . le pongo [' '] y ahi adentro le pongo la llave a la que quiero acceder. Por ejemplo:
console.log(producto["nombre"]); 

//Forma 1: Entonces si quiero acceder al resto de las llaves de mi objeto:
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponbile);