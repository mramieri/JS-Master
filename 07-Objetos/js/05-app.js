const producto = {                          //Estas llaves es un buen indicativo de que esto es un OBJETO.
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    informacion: {
          Medidas: {
            peso: "1 kg",
            medida: "1 metro",
        }, //Acá tiene que ir una coma luego del objeto "Medidas"
          Fabricacion: {
            pais: "China",

            }
    }
    
}
/*
console.log(producto);

//De la misma manera puedo acceder al sub-objeto (o sea a información) utilizando la sintaxis de punto:

console.log(producto.informacion); // Y acá en la consola ya me muestra todo lo que tiene el objeto "informacion":

//Y si qusiera acceder a peso o a medida:
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
*/

console.log(producto.informacion.Fabricacion.pais);