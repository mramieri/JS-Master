const numero1 = 20;
const numero2 = "20";

//console.log( parseInt() ); // Esta es una función
console.log( parseInt(numero2) ); // Me devuelve 20 en color azul. o sea que se convirtió a número.

//Y la sintaxis de nombre seguido de un ();

//Si a const numero1 = 20; que está como número lo quiero convertir a String, para ello:
console.log( numero1.toString() ); // para convertirlo primero pongo el nombre de la variable y luego un .toString(); // Esto significa que es un método.
//Esta sintaxis es un método

//Entonces se pueden ver las diferencias entre los dos:
//Basicamdente son lo mismo. Ambas terminan haciendo el trabajo de una función.


function sumar () {   
    console.log( 2 + 2 );                        

}


sumar();
sumar();
sumar();