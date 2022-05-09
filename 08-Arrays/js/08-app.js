
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring
const { nombre } = producto;

console.log(nombre);

//Destructuring con Arrays
/*
const numeros = [10, 20, 30, 40, 50];
//console.log(numeros);

//Si quiero aplicar Destructuring, necesito acceder a través de la posición, pero no puedo crear una varible
//que se llame const arreglo[0] = "hola"; --> esto no es posible. No puedo aplicar destructuring con el nombre del array (numeros) y su posicion (arreglo[0]).
//En los Arrays se hace Destructuring con esta sintaxis: const numeros = [10, 20, 30, 40, 50];

const [primero, , tercero] = numeros;
//Si quiero extraer el 10, puedo hacer un console.log a primero
console.log(tercero);
console.log(primero);

//Y automaticamente acceso al primer valor, creo la variable y ya obtengo el valor. (la consola me devuelve 10)

*/
/*
const numeros = [10, 20, 30, 40, 50];
const [ , , , , quinto] = numeros;
console.log(quinto);
*/

const numeros = [10, 20, 30, 40, 50];
const [primero, ...tercero] = numeros; // Esta sintaxis se utiliza mucho trabajando con React.
console.log(tercero);
 