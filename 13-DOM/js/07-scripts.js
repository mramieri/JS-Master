// 101. Cambiando el CSS con JavaScript

//const encabezado = document.querySelector('h1');

//encabezado.style.backgroundColor = 'red'

//En Javascript
//justifyContent
//backgroundColor

//las mismas propiedades que estan en CSS las voy a encontrar en JS
//Diferencias: no lleva guin y las palabras pegadas van con MAYUS en la 1er inicial 

//encabezado.style.fontFamily = 'Arial';
//encabezado.style.textTransform = 'uppercase';

//pero esto sirve para cosas mas simples, necesito un codigo mas corto

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);

//classlist: me trae todas las clases como si fuera un arreglo
//y classnmae: que me los traerá como si fuera un string