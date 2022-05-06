const carrito = []; 

//Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 800
}

const producto4 = {
    nombre: "celularr 2",
    precio: 100
}

//.push Agrega al final de un array

carrito.push(producto2); 
carrito.push(producto); 
carrito.push(producto4); 

const producto3 = {
    nombre: "Teclado",
    precio: 50
}
/*
carrito.unshift(producto3);  
console.table(carrito);

/*
//Eliminar último elemento de un arreglo
//En este caso el monitor, agarro y llamo a mi array y le paso .pop()


carrito.pop();
console.table(carrito);


//Eliminar elementos del inicio del array. (con unshift se agregaba un elemento al inicio del array. Bueno, ahora shift lo elimina, tmb en el inicio del array)
//llamo al array .shift(); 
carrito.shift();
console.table(carrito);
*/


carrito.splice(0, 1); 
console.table(carrito);