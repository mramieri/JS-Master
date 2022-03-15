//operador OR, se cumple una u otra.

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const TotalPagar = 600;

if ( efectivo > TotalPagar || credito > TotalPagar || disponible > TotalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

//este es el OR ||
//con 1 solo que este vacio, en un formulario, le puedo decir al socio que todos los campos son obligatorios.. y debe llenarlos 