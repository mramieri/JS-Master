//105. Eliminar elementos en el DOM
//JS es un lenguaje que me permite agregar elementos a mis sitios y aplicaciones web: incluye Traversing the DOM.
//y en este caso se puede eliminar un elemento por si mismo o bien, se lo puede eliminar desde el padre. por ejemplo: si elimino una foto de FB

//const primerEnlace = document.querySelector('a');
//primerEnlace.remove();
//console.log(primerEnlace);

//Tmb hay otra forma que es encagrgar una referencia desde el padre (desde donde se elimina al hijo)

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children); //asi de esta manera puedo ver en que posicion está el elemento que quiero eliminar

navegacion.removeChild( navegacion.children[2] );

//el .children me permite identificar el indice del elemento 
//y luego lo puedo eliminar con .removeChild

//entonces el .Remove elimina un elemento por si mismo y sino a removeChild le paso la referencia del elemento que quiero eliminar

//Cómo crear HTML desde JavaScript (MUY COMUN)
//cuando estoy trabajando con el DOM es la creacion desde el HTML