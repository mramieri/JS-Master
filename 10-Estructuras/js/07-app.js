const efectivo = 300;
const credito = 400;
const diponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalAPagar || credito > totalAPagar || diponible > totalAPagar){ // Acá revisa la primer condición O la segunda condición
    console.log("Si podemos pagar");

} else {
    console.log("Fondos insuficientes");
}