/*
const diaHoy = new Date();

let valor;

 
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
 
valor = diaHoy.setFullYear(1992);
*/

const diaHoy = new Date().toLocaleDateString();

console.log(diaHoy);