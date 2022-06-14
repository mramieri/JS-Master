const sym = Symbol("1");
const sym2 = Symbol("1");

if(sym === sym2){
    console.log("Son iguales!");
} else {
    console.log("Son diferentes");
}

//console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar propiedades - nombre y apellido (symbol) como llaves de objeto
persona[nombre] = "Maru";
persona[apellido] = "Ramieri";
persona.tipoCliente = "Advanced Premium";
persona.saldo = 1000;

console.log(persona);
//console.log(persona[nombre]);


//Las propiedades que utilizan un symbol no son iterables. Se mantienen de "forma privada"
for(let i in persona){
    console.log(i);
}

//Definir una descripcion del Symbol
const nombreCliente = Symbol("Nombre del cliente"); // la variable: "nombreCliente". La descripción de Symbol es "Nombre del cliente".
const cliente = {};

cliente[nombreCliente] = "Pedro" // A la variable cliente le agrego con [] un nombre.


console.log(cliente); // Me devuelve la descripcion entera
console.log(cliente[nombreCliente]); // Me devuelve el nombre
console.log(nombreCliente); // Me devuelve la descripcion del symbol