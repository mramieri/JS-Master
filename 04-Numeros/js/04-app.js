//El orden en el que se ejecutan las operaciones, en lo que son los números

//Multiplicaciones y divisiones se ejecutan primero. Sumas y restas despues.

let resultado;

resultado = 20 + 30 * 2; // Primero se hace la operacion de multiplicacion (30*2), y despues 20 + ese resultado.
resultado = (20 + 30) * 2;  // Al tener el parentesis, primero se ejecuta lo que está dentro del (), y luego se multiplica por 2.


// 20% de descuento en mi carrito de compras

resultado = (20 + 30 + 40 + 50 + 60) * 0.2;  // Entonces entre parentesis pongo todos los valores que están en mi listado de carrito, los sumo y sobre eso le hago el 20% de dto. Haciendo "* 0.2" // Si en vez de poner "0.2", le dejo solo ".2", se interpreta igual como un 0
//Entonces si, el 20% de 200 es 40

resultado = (20 + 30) * 1.16; // con 1.16 le agrego el 16%  Entonces 50 + 8 (porque es el 16% de 50) y el resultado es = 58.- como precio final que deberia pagar con ese recargo.


console.log(resultado);