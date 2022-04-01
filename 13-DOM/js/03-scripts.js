//Los ID's se utilizan una sola vez con un nombre por documento

const formulario = document.getElementById('formulario');
console.log(formulario);


//const noExiste = document.getElementById('no-existe');
//console.log(noExiste);

//Si tengo dos IDs o "2 formularios x ejemplo", el getElementByID va a buscar el primer ID que encuentre, leyendo de arriba hacia abajo en el html.
//solo me retornara un elemento

//Si tengo getElementsByClaseeName me retorna todos los elementos que sean iguales, pero porque las clases si se pueden utilizar mas de 1 vez x documento   
//es mas usado el query selector