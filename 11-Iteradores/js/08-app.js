/*
const pendientes = ["tarea", "comer", "proyecto", "JavaScript"];  //Array tradicional

for ( let pendiente in pendientes) { // Nos reporta los indices del array!
       console.log(pendiente);
}

//for of itera sobre arrays mientras que for in itera sobre objetos.
*/
const automovil = {  
       modelo: "camaro",
       año: 1996,
       motor: "9.6"
}
/*
for (let propiedad in automovil) {   
       console.log(`Compra ${automovil[propiedad]}`);  
}
*/
 //ECMA Script 7

 for (let [llave, valor] of Object.entries(automovil) ){
       console.log(llave);
       console.log(valor);
 } //Así puedo iterar sobre los valores de un objeto (automovil)
 //Mientras que for in itera sobre los valores de un array (carrito)