const producto = 'Monitor de 20 pulgadas  ';

//.repeat me permite repetir una cadena de texto. Mostrar un String multiples veces (segun la cantidad que le pase entre los () )

//const enPromo = "en promocion".repeat(3);
//console.log(enPromo);

//Y ahi se me va a repetir 3 veces mi String (lo que está dentro de las comillas).
//Tambien lo puedo mezclar un poco y usar Template Strings:

//console.log(` ${producto} ${enPromo} !!!`)

//Y si intento engañar a JS y le digo que repita un n° con coma,

const enPromo = "en pr".repeat(2.9); //Aca entonces JS redondea y lo muestra solo 2 veces
console.log(enPromo);

//Tmb me pueden preguntar en una entrevista: si a .repeat() le paso un n° con decimal, o sea no entero, que es lo que hace? Bueno, redondea para abajo. Si quiero que que me de 3 repeticiones, explicitamente tengo que poner 3, sino me devolverá siempre menos.


//Existe otro método: .split  me permite dividir un string
//const producto = 'Monitor de 20 pulgadas  ';
console.log(producto.split(" ")) // Y le tengo que pasar entre los (" ") por donde yo quiero que se me divida ese String. Si le coloco solo un espacio, me cortará palabra por palabra contemplando ese espacio.

//Otro ejemplo:

const hobbies = "caminar, leer, escribir, escuchar música" 
console.log(hobbies.split(", "));

const tweet = "aprendiendo a programar #JS Moderno"
console.log(tweet.split("#")); //con .includes tambien podria extraer de manera correcta el #