const producto = 'Monitor de 20 pulgadas  ';

console.log(producto.toUpperCase()); //Así lo paso todo a mayúsculas

console.log(producto.toLowerCase()); //Así lo paso todo a minuscula

//Esto es muy util cuando en los sitios web el usuario coloca su email en mayuscula y debo convertilo a minuscula:

const email = "CORREO@CORREO.COM"
const email2 = "Maru@correo.com"
const email3 = "maru@correo.com" //Ojo que en una base de datos, a estos dos correos se los marcará como diferentes!
//Entonces, para evitar email e email 2, lo que deberia hacer antes de pasar esto a una base de datos, es siempre pasar todo a minúsculas.

console.log(email.toLowerCase());
console.log(email2.toLowerCase());

//Por otro lado, cuando creo una variable (como la de producto), le pongo comillas dobles o simples.
//Cuando creo una variable con un n°, no lleva:

const precio = 300; //Esto pasa porque este es un número

//Si yo quiero convertir un número a un String:

console.log(precio); // si lo mando a la consola y en ella veo que mi 300 sale en color azul, eso significa que es un NUMERO.
//Pero si quiero convertirlo a String, puedo usar el metodo

//.toString();
console.log(precio.toString()); //Y ahi ya el valor devuelto estará en color negro en la consola, lo que significa que ya es un String.

//Mas adelante estaremos viendo que para JS, esos "300" en número y en String no son lo mismo!
