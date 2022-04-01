//querySelector funciona similar a getElementbyID, retorna maximo un elemento. o ninguno, si no encuentra.

const card = document.querySelector('.card');
console.log(card);

//Sinoexiste no me va a retornar nada


//podemos tener selectores especificos como en CSS:
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de "hospedaje". en CSS se puede hacer esto:

const segundoCard= document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//y querySelector mtb me permite utilizarlo para IDs con la misma sintaxis que css

//Seleccionar formulario

const formulario = document.querySelector('contenido-hero #formulario');
console.log(formulario);



//Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);