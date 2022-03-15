//.loop -  se ejecuta hasta que el codigo deje de cumplir una funcion
// for es palabra reservada.
//el for loop consta de 3 partes: la primera: el inicializador (en que lugar empieza a contar o repetirse el codigo). solo le ponemos una i.
// la segunda parte es la condicion (i < 10) que vamos a revisar
//la tercer parte: es el incrmento: i++ (vamos a ir incrementando de uno en uno)


//Codigo:
//for ( let i = 0; i <= 10; i++ ) { // o sea este código se ejcuta mientras 1 sea < a 10. cuando i ya sea = a  10, tonces ya no se ejecuta. 
//    console.log(`Numero: ${i}`)
//}

//pregunta de entrevista: En un loop, ¿como se identifican los numeros que son pares y los que son nones?. As{:

// for (let i = 1; 1 <= 20; i++) {
    // if( i % 2 === 0 ) { // divido 2 (con el "modulo")
            // console.log(`El número ${i} es PAR`);
    // }
// }

//Arreglo de emi
//var text;
//for (let i = 0; i < 5; i++) {
//    text += "The number is " + i + "<br>";
//    console.log(text);
//  }



const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio : 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },

]

//console.log ( carrito.length) ;

//for ( let i = 0; i < carrito.length; i++ ) {
//    console.log(carrito[i]);
//}