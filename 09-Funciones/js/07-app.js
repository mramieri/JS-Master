//¿como mandar a llamar a las distinas funciones?
//si tengo que tener 200 funciones, ¿como hago? deben estar divididas en pequeñas partes , luego realicen una operacion, y por ultimo mande
///a llamar a otra funcion, para que se comuniquen unas con otras.


iniciarApp();


function iniciarApp () {
    console.log('Iniciando app...');

    segundaFuncion(); //la mando a llamar a la 2daFun. dentro de la primera, una vez que la |ra se haya iniciado.
}

//entonces, una vez que finaliza el 1er codigo, manda a llamar a la 2da funcion
function segundaFuncion() {
    console.log('Desde la segunda funciónn...');

    usuarioAutenticado('Maru');
}
//asi, las diferentes funciones 'se van encadenando', a medida que se van llamando.

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario...Espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

//entonces, siempre tiene que haber una funcion que inicie todo. y de esto se trata, una funcion inicia adentro de otra funcion.
//es como una pc, pa' prender tiene un boton que le da arranque. manda a llamar a todos los diferentes elementos que componen el sistema operativo.