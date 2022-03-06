
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
   
}


//Agregar nuevas propiedades al objeto: (puedo agregar nuevas propiedades que ya no est{en mencionadas, sino las voy a reescribir})
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto:
delete producto.disponible;

console.log(producto);