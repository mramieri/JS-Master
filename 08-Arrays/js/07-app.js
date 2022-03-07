//Forma imperativa: modifica el objeto actuañ
//Declarativa: no hace eso.

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

carrito.push(producto2);
carrito.push(producto);

const producto4 = {
    nombre: "Celular2",
    precio: 100,
}

carrito.unshift(producto2);
carrito.unshift(producto);
carrito.unshift(producto4);

const producto3 = {
    nombre: "Teclado",
    precio: 50,
}

//Eliminar un objeto del ultimo arreglo (con .pop):

//carrito.pop();
//console.table(carrito);

//carrito.pop();
//console.table(carrito);
//de nuevo: va al ultimo elemento y elimina el ultimo elemento.


//si quiero eliminar un elemento del inicio del arreglo, el metodo se parece a UNSHIFT:
//carrito.shift();
//console.table(carrito);


carrito.unshift(producto3);
console.table(carrito);

//y si quiero eliminar del medio?
carrito.splice(3, 1);
console.table(carrito);
//todo esto es la forma imperativa de eliminar!
