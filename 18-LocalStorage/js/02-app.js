const nombre = localStorage.getItem('nombre');  //Si pongo un elemento que no existe, me marcara "null"
console.log(nombre); 

const productoJSON = localStorage.getItem('producto'); //Necesito convertir un string a un objeto (cuando tenga la forma de objeto)
console.log(JSON.parse(productoJSON));
//Lo convierte en un objeto siempre que tenga la forma adecuada 
//asi puedo obtener un objeto grande y convertirlo

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses) // Tmb lo puedo asignar como una variable y enviar a la consola el arreglo convertido
console.log(mesesArray)