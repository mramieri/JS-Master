//Class Declaration (+ popular)
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    
}

const maru = new Cliente("amarula", 400);
console.log(maru)



//Class Expression

const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }   

  
}

const maru2 = new Cliente2("amarula", 400);
console.log(maru2)
