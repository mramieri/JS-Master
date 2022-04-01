//Seleccionar elementos por su clase: get elements by class name

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');

console.log(hero);



//Si las clases existen mas de una vez
// las clases se pueden utilizar mas de 1 vez en el html
const contenedores = document.getElementsByClassName('contenedor');

console.log(contenedores);


//Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);