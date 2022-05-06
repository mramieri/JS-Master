const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros);
//Hay otra forma de ver los arreglos en la consola:
console.table(numeros); // Esta es bastante recomendada para los arrays!    

//Acceder al arreglo:  por ejemplo al n° 30:
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]); // Si trato de acceder a una posición que no existe, la consola me marcará undefined. Porque estoy creando la variable, pero ese valor no está definido en ella.
//Entonces , siempre que quiera acceder al valor de un arreglo, debe ser por medio de su posición. por eso el index o indice es importante.

console.log(numeros[5][1]); //Así acceso a la posición 5, y a la sub-posición 1
//La posición es lo que determina como accederé en el array.