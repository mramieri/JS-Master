//111. Evento Submit a un formulario
//cual es el evento que sucede en un formulario?
//primero: tengo que seleccionar el ID o la clase. 

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario); //*


// (e) => { //el evento de "e" es lo que sucede cuando hago click en 'buscar'
   
    // e.preventDefault(); //prevengo la acción que realizaria ese elemento por default (ej: enviar el formulario o entrar a un enlace)
    // console.log('Buscando...');

    // console.log(e.target.action);

// }

//por default en el codigo esta declarado para que por el method "POST" se envie la accion del formulario (ver script)
// luego, eso tratara de abrirme un enlace. es lo que hace esa accion. (tratar de enviar el formulario)

//preventDefault: basicamente que el navegador prevenga lo que tiene que hacer normalmente

//esto de arriba fue una funcion anonima. pero tmb puedo hacer esto con una declaracion de funcion.


function validarFormulario (e){ //*
    e.preventDefault(); //prevengo la acción que realizaria ese elemento por default (ej: enviar el formulario o entrar a un enlace)
    console.log('Consultar Api');

    console.log(e.target.action);


}

//prevenir una accion por default para consumir una api
//* el eventListener sabe que tiene que buscar una funcion entonces le pongo la E de evento entre los (), lo que hará que el prevent default funcione

//prevent default: que no se abra lo que está en el action y que no env{ie los datos ia metodo post o metodo get, sino que yo pueda
//realizar validacion de un formulario o enviar los datos hacia un end-point de alguna API