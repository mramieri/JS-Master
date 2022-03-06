//Un objeto y adentro hay un 2do objeto:
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    informacion : {
             medidas :{
             peso :'1kg',
            medida: '1m',  
            },
                fabricacion : {
                    pais : 'china',
                }
   }
}
//console.log(producto);
console.log(producto.informacion.fabricacion.pais);

//asi puedo ir accediendo adentro de un objeto, y a su subobjeto