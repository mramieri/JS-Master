//101. Existe una VARIANTE que se llama "querySelectorAll"
//si tengo multiples elementos, y necesito que me retorne varias cosas, existe un elemento.
//actua similar a queryselector, misma sintaxis pero SI me retorna todos los elementos que cumplan la condicion  del selector.

//Es esta una sintaxis tipo CSS:
// El. para las clases
//El # para los IDs o tmb puedo seleccionar una etiqueta HTML. Tmb puedo ser especifica con mis selectores.

const card = document.querySelectorAll('.card');
console.log(card);

//los nodos son cada renglon, cada parrafo, todo

const formularios = document.querySelectorAll('#formulario'); // Ojo con el tema del ID, si lo uso mas de una vez, JS no me avisará
console.log(formularios);

//si el elemento no existe

const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);
//me retorna un NodeList vacio (como si fuera un array). no me marcará error, solo retornara algo que esta vacio.
//es es la diferencia entre querySelector y querySelectorAll