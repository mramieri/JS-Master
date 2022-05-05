/*
Tenemos 3 métodos para objetos:
.keys

.values y 

.entries
*/


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    
    }

console.log(Object.keys(  producto  )); // Y acá le paso el objeto del cual deseo obtener sus llaves
//La sintaxis de Keys es console.log( Object.keys() );

//Esto me retorna un array con las llaves del objeto (nombre, precio y disponible)

console.log(Object.values(  producto  ));

console.log(Object.entries(  producto  ));