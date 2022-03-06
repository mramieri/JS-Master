//This: palabra reservada (no puedo nombrar a la variable this)
//busca en la propiedad del objeto, no en los de afuera. sino, la funcion me lee las propiedades del objeto que primero aparezcan:

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


const producto2 = {
    nombre: "Tablet",
    precio: 3000, 
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();

 //Asi los valores no se mezclan y no se salen del objeto.
 //This se mantiene dentro del ambito en el que fue declarado
 //asi, puedo tener muchos valores a la vez y no se mezclan.
 //Todo esto fue Object Literal