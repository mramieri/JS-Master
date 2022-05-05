//Casos de uso para los números:

//Diferencia entre el ++ adelante y el ++ atrás:


//Se muestra y luego se incrementa con puntaje++
//Si quiero que se incremento primero y que luego se muestre, deberia hacer ++puntaje

//Si uso el ++ al final, se incrementa de a uno, pero tengo que volver a llamar a puntaje para que me aparezca el resultado incremetado.
//en cambio, si hago ++puntaje, ya se me devuelve el resultado incrementado de entrada y no tengo que volver a llamar a puntaje.

let puntaje = 5;
/*
puntaje++;  // Me devuelve 5, la vuelvo a llamar y ahi me retorna 6
++puntaje;  // Ya desde el inicio me retorna 6

let puntaje2 = 5;
//La misma lógica funciona para puntaje--; o --puntaje;
puntaje2--; // Me devuelve 5, la vuelvo a llamar y ahi me retorna 4
--puntaje2;  // Ya desde el inicio me retorna 4


//Se pregunta en entrevistas: ¿cual es el resultado de este codigo puntaje++;? (siendo let puntaje = 5;). Y mucha gente dice 6, pero en realidad en 5! 

console.log(puntaje);
console.log(puntaje2);

// Y si estoy haciendo un videojuego de Tenis o basketball donde el aumento de goles no es de 1 a 1, sino de a 2 o de a 3.
//En esos casos puedo usar
*/
puntaje += 3; //Esto me retorna 8 -- toma los 5 que ya tengo + los 3 nuevos.
puntaje += 3;
puntaje += 3;
puntaje += 3; //Y si lo mando a llamar muchas veces, el valor se va acumulando! Hasta aca me devuelve 17! Se acumula sobre el valor ya existente.

//y con el -=3 funciona de la misma forma:

let puntaje2 = 10;
puntaje2 -= 3;
puntaje2 -= 3;
puntaje2 -= 3;
puntaje2 -= 3; // Hasta aca quedé en -2. Va en decremento de 3 en 3.

// Si estoy creando un videojuego y quedo dar un estimulo mayor o menor por responder una pregunta X, puedo hacerlo de esta manera.


console.log(puntaje);
console.log(puntaje2);