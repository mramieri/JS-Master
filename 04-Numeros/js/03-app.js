//Si bien aún no vimos objetos,

// el objeto te Math tiene un montón de funciones adentro.
//Por ejemplo: si en la consola escribo Math.floor(2.4)
//El resultado en consola es: 2. Me devuelve el número redondeado. Si lo pruebo con 2.9, es lo mismo.

/*
existe en la ventana global de JS.
tiene una serie de operaciones que pueden ser utiles

ejemplos:
*/

let resultado;

//PI
resultado = Math.PI;

//Redondear
resultado = Math.round(2.8); // Me redondea a 3 - hacia arriba

resultado = Math.round(2.4); // Me redondea a 2 - hacia abajo
resultado = Math.round(2.5); // Me redondea a 3 - hacia arriba

//Redondear hacia arriba siempre - de forma forzosa (mientras el n° sea mayor a 2.0)
resultado = Math.ceil(2.1) // Me redondea a 3 - hacia arriba 
resultado = Math.ceil(2.5) // Me redondea a 3 - hacia arriba


// Redondea hacia abajo - de forma forzosa (mientras el n° sea mayor a 2.0)
resultado = Math.floor(2.4);  // Me redondea a 2 - hacia abajo
resultado = Math.floor(3.0);  // Me redondea a 2 - hacia abajo

//Valor absoluto  (o sea si yo coloco "-200", lo que hace el valor absoluto es traerme el número, ignorando el menos, y me trae solo el "200"). Es decir, ignora el negativo y trae el número.
resultado = Math.abs(-200);


//Raiz cuadrada (este mucho no se usa)
//resultado = Math.sqrt(144);

//Potencia
resultado = Math.pow(8, 3); // Acá le estoy pasando el 8 a la potencia de 3. Siempre en ese orden.

//Mínimo                --- Por ej: Tengo una serie de números y quiero saber cuál es el valor mínimo:
resultado = Math.min(555, 3, -3, 5); // Quiero saber cuál es el mínimo entre estos números: Bueno el resultado es -3

//Máximo                    ---- La misma lógica que con el mínimo, pero acá con el máx.
resultado = Math.max(33, -3, 555, 5); //  Quiero saber cuál es el máximo valor entre esta serie de números: Bueno el resultado es -3


//Aleatorio                --- Este se comporta muy raro. porque pocas veces me devuelve números enteros. No se recomienda mucho.
//resultado = Math.random();  // Si recargo siempre me trae un numero 0 distinto y con decimales.
//resultado = Math.random()*20;  // Si recargo siempre me trae un numero ya mayor a uno generalmente, tambien random y con decimales


//Aleatorio dentro de un rango... (mezclo algunos valores ponele) //quiero generar un número random del 0 al 30
resultado = Math.floor(Math.random () * 30); // .floor() o sea redondeo hacia arriba y le paso adentro de los () a Math.random  (recordar la M siempre en mayusculas en estos casos)
// De esta manera, siempre tendré un resultado que vaya del 0 al 30 y redondeado (entero!) el *30 en realidad es que si, lo multiplicado y el tope es hasta 30.00

resultado = Math.floor(Math.random () * 20);
//Esto me sirve para un sorteo!


console.log(resultado)


