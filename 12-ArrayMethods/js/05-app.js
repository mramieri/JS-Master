//find: me crea un nuevo arreglo, basado en la condicion que estoy revisando.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Con un ForEach
let  resultado = '';
carrito.forEach((producto, index) => {
        if(producto.nombre === 'Tablet') {
            resultado =  carrito[index]
        }
    });
console.log(resultado)



//Con un con .find

const resultado2 = carrito.find( producto => producto.precio === 1000) // nota: .find me retorna el primer elemento que cumple la condicion
console.log(resultado2);