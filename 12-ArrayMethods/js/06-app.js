const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },  
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Mientras este revisa POR TODOS - esta es la versión del && - . O sea TODOS se deben cumplir.
const resultado = carrito.every( producto => producto.precio < 500); 
console.log(resultado); // Y me devolverá un boolean

//Si necesito confirmar si AL MENOS uno cumple la condicion, debo utilizar .some();
//.some(); este revisa que AL MENOS UNO cumpla la condicion: - esta es la version del || - Al menos uno se debe cumplir.

const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);