
//Así creo con Object Literal:

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    
    } // Al objeto le paso un nombre, un precio y si está disponible o no.


    //Así creo con Object Constructor:
    //Acá lo voy a definir primero como una funcion:

    function Producto( nombre, precio) { //Si estoy creando nuevo producto, es porque está disponible (le tengo que poner un nombre, un precio )
        this.nombre = nombre; // This.nombre será igual al nombre que yo le voy a pasar
        this.precio = precio; // This.nombre será igual al nombre que yo le voy a pasar
        this.disponible = true;
    }
//con this. permite que no se mezclen los valores. Por lo tanto, cuando yo cree nuevos "Productos", quiero que se asocien a ese nuevo producto.


const Producto2 = new Producto("Monitor de 24 pulgadas", 500); // Entonces creo const Producto2 = a new y le pasamos Producto(). Y tengo que pasarle los valores de ( nombre, precio) en  naranjita, esos parametros.
console.log(Producto2);

    const Producto3 = new Producto("Television", 100);
    console.log(Producto3);