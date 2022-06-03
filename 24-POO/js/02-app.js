//Class Declaration (+ popular)
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo};`
    }

    static bienvenida(){
        return `Biendenid@ al cajero!`
    }
}

const maru = new Cliente("amarula", 400);
console.log(maru.mostrarInformacion());
console.log(maru)

console.log(Cliente.bienvenida());




//Class Expression

const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }   

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const maru2 = new Cliente2("amarula", 400);
console.log(maru2.mostrarInformacion())
console.log(maru2)
