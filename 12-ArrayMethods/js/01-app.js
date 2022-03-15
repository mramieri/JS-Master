//Array methods: hacen todo el trabajo pesado por mi. y de la forma manual: lo haria con un iterador.
//.some
//Hay metodos muy utiles para los arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//usualmente utilizaré un .foreach o .map si quiero acceder a c/u de los elementos.
//comprobar si un valor existe en un arreglo, de forma manual:

//meses.forEach( mes => {
//      if (mes === 'Enero'){
//          console.log('Enero si existe')
 //     }
//});


//comprobar si un valor existe en un arreglo, con una array method
//const resultado = meses.includes('Diciembre');
//console.log(resultado);
//el array method "includes" revisa si un valor existe existe en un arreglo.
//en caso de que lo encuentre retorna un booleano, en caso lo encuentre o no, en el arreglo.

//.includes funciona si se tiene un incide o un valor basado en un indice. si quiero revisar si un
//valor existe en un arreglo con objetos, el .includes no funca tendria que usar .SOME

//en un arreglo de objetos se usa .SOME

const existe = carrito.some( producto => producto.nombre === 'Monitor curvo')
console.log(existe);

//Nota: en arrow functions -->el return se da por implicito. no es necesario que lo deje en el codigo y sus llaves.

//En un arreglo tradicional o de indices con .some
//nota: cuando hay un paramentro solo, el () no es necesario. y un par de llaves tampoco son necesarias cuando tenemos una sola linea.
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);

//entonces ., .some soporta arreglo de indices o un arreglo de objetos. mientras que 'includes', solamente un arreglo de indice, no de objetos.