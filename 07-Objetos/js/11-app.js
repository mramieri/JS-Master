const nombre = "Hola";
const precio = 20;

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    mostrarInfo: function () { // Y esto será una funcion
         console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

//Y si aca pongo
producto.mostrarInfo(); //  y mando a llamar a la función, 
//la consola me tira un error message, que "nombre" no está definida

//Si creo otro objeto, con this. puedo ver que los valores no se mezclan:

const producto2 = {
    nombre: "Tablet 20 pulgadas",
    precio: 3000, 
    disponible: true,
    mostrarInfo: function () { // Y esto será una funcion
         console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}
producto2.mostrarInfo();