//Declaracion de funcion (Function Declaration) hay que mandar a llamar a la funcion ademas de declararlas!
function sumar () {
    console.log(2 + 2);
}; 
sumar();


//Expresion de funcion (Function Expression)
const sumar2 = function () {
    console.log( 3 + 3);
}
sumar2();

// En ambos tipos de funciones, estoy llamandolas primero y creandolas despues, pero solo funciona si hago el llamado primero con Function Declaration.

// en el claso de la Expression, no es como una funcion digamos como tal xq esta declarada como una variable
//Hoysting es lo que hace las diferencias (la 2da por tema "dos vueltas". el primer codigo funciona y el segundo NO.)