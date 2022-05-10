
//Declaracion de funcion
sumar(); // --> Si llamo a la función antes de declarada, me devuelve el resultado de 2+2 en la consola igualmente.
function sumar () { 
console.log( 2 + 2 );                    
}



//Expresion de funcion
sumar2();  // --> Si llamo a la función antes de declarada, no me devuelve el resultado de 3+3 en la consola, me dice que no puedo inicializar una funcion antes de declararla (crearla)
const sumar2 = function() {
console.log( 3 + 3 );
}

//pero por que sí funciona con Declaration y no con la de expression? Esto pasa porque JavaScript se ejecuta en 2 vueltas. Es un tema más avanzado el de hoisting

//const sumar2; // Esto es una variable

//sumar2(); // Acá estoy llamando a una funcion, por eso me da el error message de que no se puede mandar a llamar antes de inicializar a la variable.

sumar2 = function () {

}
