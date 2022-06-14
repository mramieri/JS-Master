const ciudades = ["Londres", "Nueva York", "Madrid", "Paris"];
const ordenes = new Set ([123, 231, 131, 102]);
const datos = new Map();  //Esos 3 se pueden iterar con un forEach

datos.set("Nombre", "Mariel");
datos.set("Profesion", "Estudiante");

//Default
for (let ciudad of ciudades){ 
    console.log(ciudad);
}

for (let orden of ordenes){ //me trae los valores
    console.log(orden);
}

for (let dato of datos){ //me trar llave y valor
    console.log(datos);
}

//Entries iterator
/*
for (let entry of ciudades.entries() ){

    console.log(entry);
}

for (let entry of ordenes.entries() ){  
    
    console.log(entry);
}

for (let entry of datos.entries() ){  
    
    console.log(entry);
}
*/

//Values iterator
/*
for ( let value of ciudades.values()) {
    console.log(value);
}

for ( let value of ordenes.values()) {
    console.log(value);
}

for ( let value of datos.values()) {
    console.log(value);
}
*/
/*
//Keys Iterator
for (let keys of ciudades.keys()){
    console.log(keys);
}

for (let keys of ordenes.keys()){
    console.log(keys);
}

for (let keys of datos.keys()){
    console.log(keys);
}
*/