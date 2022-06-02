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

//retira saldo

Cliente.prototype.retiraSaldo =  function(retira){  
    this.saldo -= retira;  

    
}
//Instanciar
const pedro = new Cliente("Pedrito", 6000);
console.log(pedro.tipoCliente());  
console.log(pedro.nombreClienteSaldo());  
pedro.retiraSaldo(1000) //retira mil
console.log(pedro.nombreClienteSaldo());  

console.log(pedro);