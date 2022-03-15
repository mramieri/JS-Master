//Switch case (es para comprobar un valor que quiero comprobar, en vez de IF pongo Switch)
//Switch es un método para revisar por múltiples condiciones. esto se hace a través de cases.
//Depende de el valor es la acción que realizará.


const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo': // este no es obligatorio
        pagar(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque': 
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta': 
        console.log(`Pagaste con ${metodoPago}`);
    default: // sirve en caso de que no se ejecute el case ni el break. lleva : no ;    
        console.log(`Aun no has seleccionado un método de pago o método de pago no soportado`);
        break;  
}   


function pagar() {
    console.log('Pagando...')
}