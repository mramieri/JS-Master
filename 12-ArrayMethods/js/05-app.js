const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },  
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un .forEach

//Aca verifico por ej la Tablet; si la encuentro en mi carrito, quiero extraer todo el objeto de Tablet y asignarle a la varible resultado todo lo que tiene el objeto tablet (nombre y precio). Justamente eso hace .find
let resultado = "";

carrito.forEach( (producto, index) => {
    if ( producto.nombre === "Tablet") {
        resultado = carrito[index]
    }
});
console.log(resultado);

//con un .find

const resultado2 = carrito.find( producto => producto.precio === 100 ); //Esto sigue siendo un arrow function, son bastante consistentes en eso.
console.log(resultado2);

//Accedo a CADA objeto de producto (que sería el carrito). Y compruebo con producto.nombre qué elemento se llama "Tablet". Entonces, como esto está dentro de una const resultado 2, el resultado se lo asignará a resultado2.
//resultado2