//Operaciones básica: suma, resta, multiplicación, división y MODULO, con números en Javascript

const numero1 = 30;   
const numero2 = 20;

let resultado;


//Suma
resultado = numero1 + numero2; // Primero que nada, estoy usando "resultado" para almacenar el resultado de la operacion. Ojo que es let, NO const.
                                // Luego, como son dos numeros y no strings, y el operador "+" me concatena, directamente me devuelve el resultado en número , NO en string.



//Resta
resultado = numero1 - numero2; // Para restar es lo mismo. uso el - y el resultado se almacena en la variable "resultado". Nota: ahora en la consola de este resultado sólo, NO el de la suma anterior.

//Multiplicación
resultado = numero1 * numero2; // con la *


//División
resultado = numero1 / numero2; // Para dividir se una la /



//Módulo

resultado = numero1 % numero2; 

 //Acá se utiliza el operador "%". No es que sea un porcentaje como tal, sino que el razonamiento seria el siguiente. Si divido a 30 por 20, cuanto es lo que me queda de resto? en este caso es 10
//El modulo se utiliza mucho para algoritmos, estructuras de datos, y lo voy a ver bastante en ejercicios de programacion. 

//Si en la consola escribo "math" y apreto enter, me sale el objeto de Math, y en el un monton de funciones enfocadas a las matematicas que tiene Javascript.
//haremos ejemplos con algunas de ellas, como con la funcion "pi"



console.log(resultado);