
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //Array con índices

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 }, //Array con objetos
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Use case:
//Comprar si un valor existe en el array "meses":


meses.forEach( ( mes ) => { 
    if ( mes  === "Enero") {
        console.log("Enero existe!");
    }
   
}) 


const resultado = meses.includes("Diciembre"); //1. Creo una variable que vaya a almacenar el resultado de mi array method. // 2. Le paso al array .includes() que buscará por el elemento que yo le asigne. // 3. Le paso "Enero", para buscar así el elemento en cuestión. 
console.log(resultado);  //4. Le paso un console.log a resultado y me devolverá true o false.

//Nota: .includes();
//Sólo funciona si tiene un array con índices o valores basado en indices (como const meses)
//Y si quiero comprobar si existe un valor con un array de objetos?

const existe = carrito.some( producto =>  producto.nombre === "Celular"  // Es más, con el arrow function se da por IMPLICITO el RETURN. Entonces puedo eliminarlo y borrar tmb las llaves! Y tener un código asi de compacto.
 );

console.log(existe);

//Es más, .some() tmb sirve para comprobar arrays traidicionales /con indices!!

const existe2 = meses.some(mes => mes === "Febrero");
console.log(existe2);