//remplazar texto en cadenas. es el famoso "replace" para strings
const producto = 'monitor de 20 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitor curvo'));

//.slice: cortar una parte de un texto

console.log(producto.slice(0, 10) );
//console.log(producto.slice(8) );
//console.log(producto.slice(2, 1) );
// linea 12: si el primero n° es > al 2do, JS no va a hacer nada



// Alternativa a slice: substring (subcadena)
console.log(producto.substring(0,10));

//la diferencia hasta aca es la misma. substring a dif de slice, si interpreta si el primero n° de inicio tiene una extension mayor que a la del 2do,, entonces slice no hace
//nada pero string lo modifica y trata de hacer algo

console.log(producto.substring(2,1));

const usuario = "Maru";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
//chart at es un poco mas corta que substring y mismo result
//para armar en google ponele un cvirculo con la incial de un nombre, usan charAt y muestran solo era letraq (renglon 28);


