//Agregar nuevos arreglos a un array, para estar evitando tocarlo a cada rato para agregarle cosas 

//los arreglos se pueden modificar, a pesar de que esten declarados con "const"

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

meses[0] = 'Nuevo Mes';
meses[7] = 'Ultimo Mes';

console.table(meses);

//se puede modificar en OBJETOS y ARREGLOS, salvo que lo selles el objeto. los Array no tienen la chance del freeze.
//si quiero agregar un nuevo elemento al arreglo (ej: linea 8). es una forma de agregar elementos en ARRAYS. sintaxis valida. posicion que NO tienen ningun valor
//entonces no la va a reescribir. no existe y no esta definida. la estoy creando y le estoy asignando un valor (linea 8). 