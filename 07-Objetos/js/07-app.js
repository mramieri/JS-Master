
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

console.log(producto);

producto.disponible = false;
delete producto.precio;

console.log(producto);

//eso me da falso, a pesar de que se encontraba adentro de un objeto ya descripta como True. 
//eso pasa porque justamente, si estan dentro de un objeto, yo luego a la const la puedo rescribir.