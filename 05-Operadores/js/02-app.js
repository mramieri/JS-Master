const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


//Revisar si 2 numeros son iguales. Ojo, el = a es solo para asignar valores! es lo que uso para las variables (ver pestaña variables.)
// Si uso 2 iguales == entonces si ya esta comparando

console.log(numero1 == numero3);
console.log(numero1 == numero2); 
//este es un comparador no muy estricto; se fija solamente que 20 y 20 sean iguales nada mas, solo le fija en el valor

//Otroso comparador: el estricto (con TRES iguales). La dif con el anterior es que se fija en el valor y en el tipo de dato. 
//numero1 es un numero y numero2 es un string
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//el operador estricto me indica que no son iguales (uno es un string entonces me lo marca como false)


//Diferente
const password1 = "admin";
const password2 = "Admin";


console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== parseInt (numero2));

