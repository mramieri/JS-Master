//No puedo tener variables que se llamen igual dentro del mismo nivel (scope). aunque sea 01app.js y otra este en 02app.js. // si se puede hacer eso dentro de un IF o dentro de una FUNCION, pero NO en el mismo NIVEL.
let producto = "Tablet";

//hoy en dia, las opciones son LET y CONST. (las reglas son las mismas). Aunque la mayoria de los ejemplos hoy en internet usan "var".

//let me permite inicializar una variable, tambien crear un valor. tambien me permite:
//Permite reasignar un valor

producto = "Monitor";
producto = 20;
//puedo REASIGNAR las variables cuando están definidas con "let"

producto = true; //tmb puedo asignarle un booleano
producto = null;

console.log(producto);

let precio; //Tmb puedo crear la variavle sin darle ningun valor en el momento que la creo
    precio = 300; // Le puedo pasar el precio despues a mi variable y funciona OK (sin volver a ponerle "let")

console.log(precio);


/*
la principal diferencia entre VAR y LET: es el scope justamente de las variables.
pero lo que está antes explicado para VAR aplica igual que para LET.
*/