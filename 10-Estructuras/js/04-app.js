const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;  
const cheque = true;

if ( dinero >= totalAPagar ) { 
    console.log("si, podemos pagar");

} else if (tarjeta) {
    console.log("si, puedo pagar porque tengo la tarjeta.");

} else if (cheque ) { 
    console.log("si, tengo el cheque");

} else {           
    console.log("fondos insuficientes");
}