
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
             //color:  .... Puedo agregar más propiedades adentro de mi objeto, como "color" 
}

//1. Puedo agregar más propiedades adentro de mi objeto" como "color"
//2. Tmb puedo querer agregar una propiedad más, si, pero luego, ya en la ejecución de mi proyecto.

//Agregar nuevas propiedades en el objeto, se hace utilizando la sintaxis de punto:
//Puedo usar cualquier nombre, siempre que no esté ya prexistente porque sino lo voy a reescribir
producto.imagen = "imagen.jpg";          //Acá como estoy FUERA del objeto SI uso el =, no : los dos puntos.

 

//Supongamos que ahora quiero eliminar una propiedad, por ejemplo el "disponible:
//para ello uso delete + el objeto en cuestion y .la propiedad que deseo eliminar

delete producto.disponible;
console.log(producto);
//Si guardo cambios, en la consola ya eliminé la propiedad "disponible".