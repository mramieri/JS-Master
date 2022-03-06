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

//aca le estoy diciendo que me interesa mas que anda acceder a Fabricacion. no esta creando la variable de informacion
//const { nombre, informacion: { fabricacion } } = producto
//console.log(nombre);
//console.log(fabricacion);


const { nombre, informacion, informacion: { fabricacion, fabricacion: {pais} } } = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);