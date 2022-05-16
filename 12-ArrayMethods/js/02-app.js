const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];  

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 100 },  
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Buscar un valor en meses con .forEach
/*
meses.forEach( (mes, index) => { //En el .forEach el elemento que está luego de la ,coma es el index (índice del elemento actual)

    console.log(index); // Esto me devuelve los números de las posiciones de esos elementos (0, 1, 2..)
    console.log(mes); // Esto me devuelve los elementos del array
    //De esta forma y en este orden tendré el indice y el valor. Son valores que se pasan en automático (mes, index) y son valores que toma el .forEach
})
*/
//Quiero revisar en que posición se encuentra Abril
/*
meses.forEach( (mes, i) => { //Es re importante que le pase ese segundo parámetro porque me permitirá buscar la posición de un valor!
    if ( mes === "Abril"){
        console.log(`El mes de abril tiene la posición n° ${i}`);
    }
});

//Encontrar el indice de Abril

const indice = meses.findIndex(mes => mes === "Enero");
console.log(indice);
//En caso de que no lo encuentre, tendré un -1
//Si tengo un array con un listado de valores que quiero comprobar:
 */

//Validar un indice en un array de objetos con findIndex:

const indice3 = carrito.findIndex( producto => producto.precio === 100) // Va a iterar sobre los elemenetos del carrito, entonces le paso "producto" como parámetro y el arrow function. Y ahora quiero ver qué elemento/s cuestan $100. entonces acceso al parámetro producto y .precio con la sintaxis de punto! por ser un array de objetos.
console.log(indice3);  //Me devuelve 1!







/*
const indice2 = carrito.findIndex( (name, prec) => {
    console.log(prec);
    console.log(name.nombre);
    console.log(name.precio);

   

});

*/