/*
const autenticado = true;

if (autenticado) {
    console.log("Autenticadoo");
}
*/

const puntaje = 500;

function revisarPuntaje (){

    if (puntaje > 400) {
        console.log("Excelentee!");
        return;
    } 
    
    
    if (puntaje > 300) {
        console.log("Buen puntaje, felicitaciones!");
        return;
    } 

}

revisarPuntaje(); // Mando a llamar a la función y ya el return frena en excelente,
// porque si no tuviera ambos return, recibiria todos los mensajes. (porque estoy mandando a llamar a la funcion entera)

