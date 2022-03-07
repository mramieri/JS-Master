//const meses = ['Enero', 'Febrero', 'Marzo'];


//Agregar al final del arreglo. Sin conocer la extension del arreglo, puedo agregar cosas al final del arreglo. 
//Entonces, agregar al final del arreglo:

//meses.push('Abril');
//meses.push('Mayo');

//console.table(meses);


//Los ARRAYS pueden tener OBJECTS
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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);


console.table(carrito);

//.push agrega al final de un arreglo (renglon 32)
//.unshift desplaza para el pimer lugar (es la onda del ultimo que llega, ultimo que sale. primero que llega, primero que sale.).