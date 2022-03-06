const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2);
console.log(boolean1 === true);
console.log(boolean1 === "true");
// en este ultimo me da false, porque cuando hablo de Booleans xq este es un string. Y el comparador con el tipo de dato no es exactamente igual aca. distinto es con los numeros y strings.
