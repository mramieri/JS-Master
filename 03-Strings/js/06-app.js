const producto = 'monitor de 20 pulgadas';

//repetear me permitirá repetir una cadena de texto...

const texto = ' en pr ' .repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!` );

//entonces: repetear me permite mostrar una cadena de texto muchas veces
//si a .repeat le paso un n° que no es entero, lo que hace es redondear el numero. y repite esa cant-. de veces.

//Split: divide un string
const actividad = "estoy aprendiendo JS Moderno"
console.log(actividad.split(" "));

//esto me sirve para x ej para una pagina donde quiero mostrar un listado de recetas
const hobbies = 'leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS Moderno #AprendiendoJSModerno";
console.log(tweet.split('#'));



