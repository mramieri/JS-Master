import nuevaFuncion, { nombreCliente , ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log( nombreCliente );
console.log( ahorro );

console.log( mostrarInformacion(nombreCliente, ahorro) );

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInfo());

//Importar empresa
const empresa = new Empresa("Codigo con juan", 100, "aprendizaje en linea");
console.log(empresa.mostrarInfo());


