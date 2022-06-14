const carrito = new Set(); 

carrito.add("Camisa"); 
carrito.add("Disco #1"); 
carrito.add("Disco #2"); 
carrito.add("Camisa"); 


//console.log(carrito.has("Camisaa"));

//console.log(carrito.delete("Disco #2"));

//carrito.clear();

carrito.forEach( (producto, index, pertenece) => {
   // console.log(producto);
   // console.log(index);
    console.log(pertenece);
});


console.log(carrito.size);

console.log(carrito);


//Del siguiente array, eliminar los n°s duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);