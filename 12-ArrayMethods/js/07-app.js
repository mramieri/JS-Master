
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; 

const meses2 = ["Agosto", "Septiembre"];

const meses3 = ["Octubre", "Noviembre", "Diciembre"];

//.concat();

const resultado = meses.concat(meses2, meses3, "otro mes");  
console.log(resultado);

//concatenar con Spread opertador

const resultado2 = [...meses, ...meses2, ...meses3, "otro mes" ]; 
console.log(resultado2);