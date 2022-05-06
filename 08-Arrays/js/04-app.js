/*
Al igual que los objetos, los Arrays se pueden modificar a pesar de que estén declarados con const
(sin tener que ir manualmente a meter mano al arreglo en si)
para modificar por ejemplo "Enero", que está en la posición 0, 


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo mes"; //Para ello, puedo acceder a la posición 0 desde aca, y reasigno el valor. Reemplazo "Enero" por "Nuevo mes". Porque estoy accediendo a la posición y le estoy asignando un nuevo valor.

console.table(meses);


Es decir, a pesar de que un array esté declarado como CONST, sus valores SI se pueden modificar.

Entonces: pregunta de entrevista - 
en que valores una variable declarada en CONST se puede modificar sus valores? en objetos y en arreglos. Salvo que utilice o selle el objeto, los arreglos no tienen algo como eso.
*/

//Y si quiero agregar un nuevo elemento al arreglo? por ejemplo liego de la posición #6

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

meses[0] = "Nuevo mes"; 
meses[7] = "Ultimo mes";  // Y en la #7, estoy agregando "ultimo mes". Porque es una posición que no tienen ningun valor, no va la a rescribir, y como no está definida, desde acá la estoy creando y asignandole un valor! // Entonces esta sintaxis tmb es valida.

console.table(meses);

//Estas son formas de modificar una array, pero Hay muchos otros métodos, igual que con los objetos y strings. hay metodos bastante utiles. ver proxima hoja!