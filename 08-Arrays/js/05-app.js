const carrito = []; 

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 800
}



carrito.push(producto2); 
carrito.push(producto); 

//Supongamos que quiero agregar este producto3 al inicio  de mi arreglo, uso unshift();
//llamo a mi arreglo.unshifht(); y le paso el producto3
const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3); //Está declarado al final, si, pero unshift siempre lo tira para arriba de todo, a la posición 0

console.table(carrito);