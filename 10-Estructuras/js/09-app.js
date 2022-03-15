//Operador Ternario: me sirve para saber si una condicion se cumple,
//me da un poco mas simplificado mi codigo,

//miuy similar al IF pero todo en una sola linea,
//primera parte se cumple? (se usa el signo de preg). sino, se usa lo que sigue despues de los : (: es como el esle)

//como revisar 2 condiciones en un ternario?     
const autenticado = false;
const puedePagar = false;

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado y no puede pagar' : 'No no esta autenticado' );
     
//ternario anidado