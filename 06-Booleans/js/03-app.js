//Error muy comun en Booleans:

const autenticado = true;
/*
if (autenticado) // [esto (autenticado === true) NO se hace!] No necesito revisar si autenticado es True, porque ya está implicito que autenticado es true, ya lo definí arriba. mejor dejo solo el [if (autenticado)], sin el === true.
        { console.log("si puedes ver Netflix");

} else {
    console.log("no, no puedes verlo");
}
*/
// Si cambio el valor de autenticado a "false", entonces la respuesta cae del otro lado del codigo, en el esle. --> y ahi me devuelve "no, no puedes verlo".-

//Entonces, REMINDER: Siempre que use un if e iguale a un boolean, usar solo la variable definida, no poner todo el choclo adentro de los parentesis.


//Operador Ternario:  - acá ya cuando voy teniendo más experiencia..

console.log( autenticado ? "si, está autenticado" : "no, no está autenticado");

//Estos ejemplos se ven sencillos pero en realidad es la misma forma en la que puedo likear una foto en instagram de una persona que es mi amiga, o quizas no puedo ver pelis de netflix si no pague o si no estoy autenticada. no puedo comprar nada en Meli si no cree un cuenta!
//Es muy comun, se utiliza mucho