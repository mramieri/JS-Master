 //Object literal

 const cliente = {
     nombre: "Maru",
     saldo: 500
 }

 console.log(cliente);
 //console.log(typeof cliente);

 function Cliente(nombre, saldo){  
    this.nombre = nombre;
    this.saldo = saldo;

 }

 const maru = new Cliente("Maru", 500)   

 console.log(maru)
// console.log(typeof maru)