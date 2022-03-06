//Object Literal:

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
 
    }

//Object Constructor:

function Producto (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log (producto2);

//This hace que no pierda la referencia

const producto3 = new Producto('Television', 100);
console.log(producto3);

//el THIS los almacena dentro del objeto, no los busca por fuera del objeto. esto es OBJECT CONSTRUCTOR. es mas dinamico.
//el object literal no es tan dinamico. esto era antes la programacion orientada a objetos en JS .
//igual el object literal se utiliza mas que el constructor.