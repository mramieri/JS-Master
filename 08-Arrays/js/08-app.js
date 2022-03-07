
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
   
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructing:

const {disponible} = producto;
console.log(disponible);

//creo la variable y extraigo el valor, todo en un mismo paso. bueno para Arrays tmb existe eso


//Distructuring con ARRAYS: (nota, no se puede crear una variable que mencione al arreglo y a la posicion, en el mundo de los arrays..)

const numeros = [10,20,30,40,50];
//entonces, la sintaxis es esta:

const [ primero, segundo, ...tercero ] = numeros; 

console.log(tercero);

//se usan las comas para saltear los primeros valores hasta llegar al que necesito
//esto se usa bastante. en react ni hablar
//esta sintaxis extrae valores de un arreglo, de otro lugar.