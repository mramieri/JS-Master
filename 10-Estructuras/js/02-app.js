/*
const puntaje = 1002; // Este = para asignar es FUNDAMENTAL

if (puntaje != 1000) {      // Dos == es para comparar, en casi todos los lenguajes de programación. != significa "es diferente a"
    console.log("si! es diferente a...");
}
*/


const puntaje = 1020; 

if (puntaje !== "1000") {      // No me devuelve nada en la consola porque no son lo mismo con este comparador estricto (si es que no le pongo el else)
    console.log("si! es difente...");
} else {
    console.log("no, no son diferentes");
}

//Con == es un operador más relajado y con === es un operador más estricto porque si revisa por el tipo de dato.