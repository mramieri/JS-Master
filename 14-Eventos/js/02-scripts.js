//109. Eventos con el Mouse

const nav = document.querySelector('.navegacion'); //primero selecciono la clase

//registro un evento (espero a que se ejecute el codigo primero) // click es uno muy comun que voy a usar con el mouse
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegación');   //  nav.style.backgroundColor = 'transparent';

    nav.style.backgroundColor = 'transparent';
});

//Entonces: 1. se registra el evento. 2. espero a que suceda. 3. se ejecuta el codigo.
//este mousenter y mouseout

nav.addEventListener('dblclick', () => {
    console.log('Entrando en la navegación');
    nav.style.backgroundColor = 'white';
});

//mousedown - es similar a click
//click
//dblclick = doble click
//mouseup - cuando sueltas el mouse
