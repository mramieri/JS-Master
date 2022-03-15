//.Reduce
//funcion reducer: reductora. es tomar una gran cantidad de datos y unirlos, y luego entregar un rdo.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach (uno .let y no .const porque no puedo ir sumando sobre const)
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

//con el reduce tmb se puede hacer, pero no es lo mismo. si sigue siendo un arrow function, pero tiene algo diferente.
//aca estoy creando neuvas variables.

//con reduce:
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado)
//0 es el valor sobre el cual inicia:
//no hay necesidad de ponerle += porque se va acumulando con la funcion 'total'. ya mantiene el valor previo.
//aca no toy creando nuevas variables       