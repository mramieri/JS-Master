//110. Eventos sobre los Inputs (suceden en el teclado, o sea cuando escribo en un formulario y lo voy llenando)

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evt) => { //Si en el parentesis este le paso el evento que está sucediendo, podre consultar luego a una base de datos x ejemplo con un evento que este sucediendo (evento, event, evt)
    if(evt.target.value === ''){
        console.log('fallo la validacion');
    }
    
    //console.log(evt.target.value); //hay mucha info adentro del evento.
})

//keydown
//keyup
//blur (muy comun para validacion de formularios)
//copy, paste, cut, input

//salvo el blur. si salgo, no se ejecutará. pero los demas si

//el .type me dice sobre qué evento estoy trabajando.
//si le digo .target le digo que me explique qué input en especifico     

//target.value: ideal pa una busqueda, cuando entro a un sitio web x ej


//todos los proyectos incluyen MUCHO este tipo de eventos.

//en el proximo video, lo que sucede con el evento cuando haglo click en 'buscar'