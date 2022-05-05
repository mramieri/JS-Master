const numero1 = 20; 
const numero2 = "20";
const numero3 = 30;


//Revisar si 2 números son iguales:
//NO se hace con el signo =, porque de esa forma es como se asignan valores generalmente con variables!

console.log(numero1 == numero3); // para comparar uso el "==". me devuelve false, porque efectivamente no son iguales.
console.log(numero1 == numero2); // me devuelve true. Porque el comparador "==" no es muy estricto, revisa en los valores pero no se fija el tipo de dato (se puede comparar entonces un número con un numero en string)
//DUDA: A todo esto, los true/false que me devuelve son en azules, porque estamos hablando de numeros verdad?

//Comparador estricto:
console.log(numero1 === numero2); // me devuelve false. porque el "===" sí es un comparador estricto. Revisa por el valor y también por el tipo de dato!
// O sea el operador estricto si bien es verdad que 20 y 20 son el mismo numero, NO son el mismo tipo de dato, por eso da false.
console.log(numero1 === parseInt(numero2)); // //Si quisiera que numero1 y numero2 se marquen como iguales, debo convertir numero2 en un número. Y acá lo saco de String y lo paso a tipo número. todo en uno y tmb me lo compara ahi mismo y me devuelve true.


//Si quiero ver qué tipo de dato es numero1 y numero2, puedo validarlo con typeof:
console.log(typeof numero1);  //Me devuelve número
console.log(typeof numero2);  //Me devuelve string


//Comparador si es "Diferente a":

//supongamos que estoy creando un log in web, y coloco

const password1 = "admin";
const password2 = "Admin"; // Y acá le pido al sistema que me valide si esas passwords son iguales o diferentes. En este caso estoy EVALUANDO por DIFERENTES.

console.log(password1 != password2); //"!= significa es diferente a .." Y la consola me devuelve true, porque si, es cierto que son diferentes.
console.log(numero1 != numero2);     //Me devuelve false; es decir NO son diferentes. Si bien está comparando un n° y un string, este comparador no es estricto.
console.log(numero1 !== numero2);   // Me devuelve true; es decir, si, son diferentes. Porque este es un comparador ESTRICTO para ver "si es diferente a".. y tiene en cuenta los valores Y los tipos de datos.
console.log(numero1 !== parseInt(numero2));   // si lo convierto con el parseInt, me devuelve false, porque es falso, no son diferentes, son iguales.


