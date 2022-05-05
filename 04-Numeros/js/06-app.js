//Serie de métodos muy utiles cuando trabajo con números:

const numero1 = "20"; // Negro, String
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;   // Azul, número

/*
console.log(numero1); // Me devuelve un string 2 (en negro)
console.log(typeof numero1); // Puedo ver qué tipo de dato es, en la consola. me devuelve "string".
*/

//Number es una palabra reservada, se encuentra disponible en la ventana global de la consola. Number tmb es un objeto, igual al de Math.

//Método para convertir el string al número es: "parseInt".  // Convierte un string a un número entero.

console.log(numero1); // Negro - String
console.log(Number.parseInt(numero1)); // Al convertirlo con parseInt, la consola me retorna el número 20, en azul. 

//el Number.parseInt convierte a un numero pero siempre entero:

console.log(Number.parseInt(numero2)); // Este lo convierte a entero -  si el n° tenia coma, aca me devuelve un n° entero --> para eso uso otro método, para decimales:

console.log(Number.parseFloat(numero2)); // Este lo convierte a decimal - Este sí me devuelve un n° con coma 20.2 en azul.


console.log(Number.parseFloat(numero3)); // me devuelve error porque es un string. para saber si es entero o no consultar, lo siguiente:


//Revisar si un n° es entero o no, con isInteger (significa "entero"):

console.log(Number.isInteger(numero3)); // Me retorna si el n° es entero o no. Me retorna true o false. // En este caso me retorna NaN porque es un String.
console.log(Number.isInteger(numero4));

//entonces, primero puedo comprobar si es un número, si es convertible. y luego convierto. Son buenas formas o funciones que me van a permitir esto.
//Y luego utilizo parseFloat o parseInt para convertirlos en números.

