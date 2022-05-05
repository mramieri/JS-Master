const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); // False. El dato/valor como tal no es el mismo. El tipo de dato si es el mismo.
console.log(boolean1 === true);  // me retorna True.
console.log(boolean1 === "true");  // me retorna false, porque el tipo de dato no es exactamente igual, que como lo que si pasa entre números y strings (ver hoja anterior). Aunque el comparador sea el flojo (==).

console.log(boolean1 !== "true"); // Si pregunto por ej si son diferentes, me devuelve que si.  