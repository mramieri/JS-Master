const diaHoy = new Date();


let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); //Ojo: en JS, este siempre inicia en 0, febrero en el mes 1.
valor = diaHoy.getMinutes(); 
valor = diaHoy.getHours(); 
valor = diaHoy.getTime(); //Mili segundos transcurridos desde el 01/01/1970 hasta ahora

//'Get' sirve para extraer el valor y 'Set' sirve para modificar el valor del objeto de fechas.

valor = diaHoy.setFullYear(2020); 

console.log(valor);


//Si tengo que crear un sitio web de examenes en linea, donde como deadline la entrega es 23.59, NO VALIDAR CON JS sino con el servidor.
//porque cualquiera podria modificar la fecha de su computadora y presentar el examen despues