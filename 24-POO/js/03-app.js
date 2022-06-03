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
        return `Bienvenid@ al cajero!`
    }
}

//Herencia
class Empresa extends Cliente {
   constructor(nombre, saldo, telefono, categoria){//Acá reescribo el constructor

    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;

   }

   static bienvenida(){
    return `Bienvenida al cajero, señorita!`
}

} 

const maru = new Cliente("amarula", 400);
const Organizacion = new Empresa("Marielita", 1000, 47935334, "senior");
console.log(Organizacion.mostrarInformacion());
console.log(Organizacion);

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());


