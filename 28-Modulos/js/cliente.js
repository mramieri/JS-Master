export const nombreCliente = "Marula";
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente:${nombre} - Ahorro: ${ahorro}`;
};


export function tieneSaldo (ahorro){

    if (ahorro > 0){
        console.log("Sí, tiene saldo");
    } else {
        console.log("Nop, el cliente no tiene saldo");   
    }

}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;  
        this.ahorro = ahorro;
    }

    mostrarInfo(){
        return `Cliente:${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){

    console.log("Este es el export");

}