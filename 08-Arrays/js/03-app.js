//cada posicion del Array esta definido por esa coma - Reminder.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

//cuanto mide el arreglo?

console.log(meses.length);
//acá, la lectura en Length se inicia en 0, no en 1.

//podemos escribir un codigo que se ejecute la cant. de veces que hay en un arreglo. para no poner 100 veces console.log
//para ello usaré el ITERADOR

for(let i = 0; i < meses.length; i++) {
console.log(meses[i] );
}
//El "for" tiene 3 partes adentro del parentesis
//no puedo reasignar un const, entonces uso un let. aparte el "i" con el cont, me irá incrementando el "i++" de una vez en vez, cada vez que se ejecute esta funcion 

// ese codigo de lenght que puse es importante que se ejecute (linea 18)  MIENTRAS sea menor al tamaño del arreglo (fila12)


//asi es como funciona un carrito de compras