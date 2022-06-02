// Tipo de objeto "Cliente"
function Cliente(nombre, saldo){  
    this.nombre = nombre;
    this.saldo = saldo;
 }

 Cliente.prototype.tipoCliente = function(){
    let tipo;

    if ( this.saldo > 10000) {
        tipo = "Gold"

    } else if (this.saldo > 5000) {
        tipo = "Platinum"

    } else {
        tipo = "Normal"
    }

        return tipo;
 }


Cliente.prototype.nombreClienteSaldo = function(){   

    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`

}

Cliente.prototype.retiraSaldo =  function(retira){  
    this.saldo -= retira;      
}

//Tipo de objeto "Persona"
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//Herncia funciones
Persona.prototype = Object.create( Cliente.prototype ); 
Persona.prototype.constructor = Cliente; 


//Instanciarlo
const maru = new Persona("Amarula", 5000, 47935334) 
console.log(maru);
console.log(maru.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta personita es ${this.telefono}`
}
//y asi lo muestro:
console.log(maru.mostrarTelefono());