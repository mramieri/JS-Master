//Diferencias entre let y CONST: la mas importante, CONST no puede ser reasignada

/*let producto = "Tablet";
  //1. una constante no se puede reasignar
    producto = "Monitor";

    console.log(producto);
*/
    //2. las variables con CONST deben siempre inicializar con un VALOR

    //esto no se puede:
//const precio;
//precio = 20;

const precio = 20;  

console.log(precio);
//no se puede inicializar el valor despues. si por algun motivo el valor cambia despues, o si en el momento aun no conozco el valor, debo utilizar LET