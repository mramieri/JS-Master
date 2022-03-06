//Unir objetos: ejemplo un ID con
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}


const medidas = {
    peso: ' 1kg',
    medida: '1m',
}
  

console.log(producto);
console.log(medidas);

//como ubo ambos objetos? asi
const resultado = Object.assign(producto, medidas);
//esto asigna a ambos objetos (prod y med) y los asigna a "resultados"

//otra forma: "SPREAD OPERATOR o REST OPERATOR"
const resultado2 = {...producto, ...medidas }

console.log(resultado);
console.log(resultado2);

//ambas formas me dan el mismo resultado. los 3 puntos toman una copia de producto, y me medidas lo asignan adentro del objeto