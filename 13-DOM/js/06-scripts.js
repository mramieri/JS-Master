//102
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//console.log(encabezado.innerText); //Si en el CSS - visibility: hidden;, no lo va a encontrar.
//console.log(encabezado.textContent);//si lo va a encontrar
//console.log(encabezado.innerHTML); // Se traer el HTML.

//cual es la diferencia entre innerText e innerContent


//Chaining o encadenamiento , como el .textContent (selecciono asi diferentes elementos).


//mopifico por ejemplo el encabezado actual que tengo.. en JavaScript son asi interacciones sobre el DOM.
//document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

//Depende de mi estilo de programacion, tmb puedo hacerlo asi:
//asi puedo tener un control sobre mi HTML. es una de las caracteristicas de JS. nacio como una lenguaje de la erb y nowadays incluso consulta bases de datos
//con NODE pero nacio de esta forma.

//const nuevoHeading = 'Nuevo Heading';
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//usar fireforx developer edition! me va a dar mas informacion de mis selectores.

//ahora, para seleccionar una imagen e inclusive modificarla:
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'