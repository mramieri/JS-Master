//Operador Menor que y Mayor que

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if( dinero >= totalAPagar ) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log ('Si tengo un cheque')
} else if (tarjeta) {
    console.log ('Si puedo pagar porque tengo la tarjeta')

} else {
    console.log('Fondos insuficientes')
}

//aca se va a ejecutar la primera condicion que se cumpla en los IF, y por lo tanto no se ejecutan las posteriores
//El else se ejecutará si ninguna de las condiciones previas se ejecuta