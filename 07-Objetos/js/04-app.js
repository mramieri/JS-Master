
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
   
}
//const nombre = producto.nombre;
//console.log(nombre);

//EdmasCript --> Object distructuring. me extrae la variable todo en un solo paso y tambien crea la variable:
//Esta es la sintaxis de "distructuring"
const {nombre, precio, disponible, noExiste} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);