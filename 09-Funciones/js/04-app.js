const numero1 = 20;
const numero2 = "20";

//metodos y funciones son practicamente lo mismo. la cuestion tiene que ver con el CONTEXTO en el que son utilizadas.

console.log( parseInt(numero2)) ; //Esto es una funcion. el String -->Se convirtio correctamente (azul)
//nombre seguido de un parentesis
//"numero2" seria un "argumento"


console.log( numero1.toString () ); // Esto significa que es un m´étodo.

//Al final, ambas terminan haciendo el trabajo de una funcion, ambas son reutilizables, etc. Su sintaxis implica el ()

function sumar () { // Aca le estoy grabando un "parametro"
    console.log(2 + 2);
}; 

sumar();

