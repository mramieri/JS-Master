//Mayusculas y minusculas . se puede pasar a mayusculas desde CSS pero tmb desde JS se puede hacer:
//UpperCase

const producto = 'monitor de 20 pulgadas';
console.log(producto.toUpperCase());
// ese lo transforma todo a mayusculas.

//A minisculas: este es mas comun
console.log(producto.toLowerCase());

const email = "CORREO@CORREO.COM";


//antes de insertarlos a la base de datos, lo puedo transformar a minisculas:
console.log(email.toLowerCase());
//no hay 2 emails uno en MAY y uno en MIN. los convierto a minuscula y ya quedan en la base. asi me puedo asegurar que ese usuario ya está registrado.

const precio = 300; 
//en el renglon 4 lleva comillas y el 18 no porque es un numero. si en la consola me aparece en -azul- es poprque el dato es tipo numero.
console.log(precio);
console.log(precio.toString());
//a String (para JS no son iguales.. uno es un numero y el otro es un string.-
