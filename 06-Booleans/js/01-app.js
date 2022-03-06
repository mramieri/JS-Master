//booleans: true o false. o.. esta ON u OFF? es un si o no.- 2 valores.
//boolean o booleano: Que solo admite dos posibles respuestas:

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";


//console.log(boolean1);
//console.log(boolean2);

//console.log(typeof boolean1);


//aca el comparador, cuando es boolean, se comporta de una forma diferente. aca el comparador y el comparador estricto, ambos funcionan como el estricto.
//no asigna un valor similar como si hace con los valores o strings

console.log(boolean1 == boolean3);


const boolean4 = new Boolean(true);
//el tipo de constructor "new" crea objetos.
console.log(boolean4);
