const autenticado = true;
//no es necesario ponerle el === porque ya definimos que es autenticado es true
if(autenticado){
    console.log('El usuario es autenticado');
}

const puntaje = 450;
function revisarPuntaje() {

if (puntaje > 400) {
        console.log('Excelente!');
     return; // el return es importante porque cumple, ejecuta y se sale.
    }      
if (puntaje > 300 ) {
        console.log('Buen puntaje.. felicidades')
    return;      // y como pasa lo anterior (fila 12) entonces este ya no se ejecuta.
}
};
revisarPuntaje();

//el if si cumple, ssolo ejecuta la primera eh. nada mas