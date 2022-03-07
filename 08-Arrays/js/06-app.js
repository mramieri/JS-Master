const carrito = [];

//definit un producto:
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400,
}

const producto2 = {
    nombre: "Celular",
    precio: 800,
}

const producto3 = {
    nombre: "Teclado",
    precio: 50,
}



//formas declarativas y formas imperativas - bastante comun en JS.
//las imperativas las vimos en el video 6 (se agregan elementos al inicio y al final del carrito). esa forma imperativa modifica la variable original,
//sobre ella misma la trabajaba, reescribe, modifica los datos.
//declarativa: aca no queda tan claro que hace el codigo, y no modifica directamente ese objeto original. sino que crea una variable nueva.


//nueva variable y utilizaré spread o rest operator:
let resultado;

resultado = [...carrito, producto];
//no queda muy claro como funciona la forma declarativa - apunta programacion funcional

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado ];

console.table(resultado);