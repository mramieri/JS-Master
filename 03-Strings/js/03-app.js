//Concatenar strings:
const producto = 'Monitor de 20 pulgadas ';
const precio = '30 USD ';

//console.log(producto.concat(precio));
//console.log(producto.concat('En descuento'));

//Entonces estos son metodos disponibles...unicamente en los strings, si es un arreglo si es un objeto, un boolleano true/falsee. 
//cada uno tiene metodos propios. y tmb se pueden crear mis propias funciones.

console.log( producto + "Con un precio de: " + precio);

//console.log("El producto + producto + tiene un precio de " + precio );
//concatenar con coma en vez de +:
console.log("El producto , producto , tiene un precio de " , precio );
  
//comillas inclinadas: `
//LA MAS nueva y la mejor:
console.log(`El producto ${producto} tiene un precio de $ ${precio}`)