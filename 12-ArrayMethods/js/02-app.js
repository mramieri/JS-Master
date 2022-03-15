//findindex: para encontrar una posicion en ela rray:
//nos permite saber en que parte de nuestro indice se encuentra un arreglo:

//Escenario 1: arreglo de indices.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Escenario 2: arreglo de objetos.
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
}
)

//.con findindex se puede hacer mas sencillo

// Encontrar el indice de abril 8aca las llaves no son necesarias porque retorno ya un valodr 'al indice'.
const indice = meses.findIndex( mes => mes  === 'Diciembre');
console.log(indice);

//forma sencilla de ver si un elemento existe o no  
if (indice > 0) {

}

//Si me devuelve "-1" es porque no se encontró el Diciembre

//como comprobar un valor de un arreglo de objetos?
//Encontrar un indice de una arreglo de objetos...

const indice2 = carrito.findIndex ( producto => producto.precio === 100);
console.log(indice2);

//busca de a uno. y una vez que lo encuentra, devuelve o retorna el primer valor que encuentra.