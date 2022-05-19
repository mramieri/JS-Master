let elemento;

elemento = document; //Así selecciono todo el documento
elemento = document.all; //Acá viene todo los elementos que conforman el HTML
elemento = document.head; //Acá refiere a todo lo que está dentro de <head>
elemento = document.body; //Acá refiere a todo el body. La consola me devuelve toda la parte visible de este proyecto.
elemento = document.domain;//Tmb puedo acceder al dominio actual! Me dice en qué URL está cargando ahora este proyecto: 127.0.0.1 es el local host.
elemento = document.forms; // Tmb puedo acceder a los formularios existen en este proyecto. Nota: Acá la consola me retorna los proyectos como si fueran una array (form#formulario.formulario.formulario-buscar), pero no lo son. Son similares a los arrays, pero a estos Se les llama "HTMLCollection".
elemento = document.forms[0]; //Se puede acceder a esos formularios tmb con el índice (como si fueran arrays)
elemento = document.forms[0].id; // Puedo acceder al ID del formulario en caso de que lo tenga
elemento = document.forms[0].method; // Tmb puedo acceder al método (que en el .html dice "post")
elemento = document.forms[0].classList; //Tmb puedo acceder a las clases que tiene ESE FORMULARIO.
elemento = document.forms[0].action; //Tmb puedo acceder al action de ese formulario. La consola me devuelve buscador (http://127.0.0.1:5500/buscador)

/*

Se puede seleccionar practicamente todo con Javascript.
Tmb puedo seleccionar document.links
me devuelve todos los enlaces que tiene este proyecto. Hay 25; son todos los enlaces que tengo registrados en esta página. todos los que utilizan la etiqueta de "a", se van a listar con .links

*/

elemento = document.links; // Esto me devuelve todos los enlaces! Me devuelve un HTMLCollection por medio del indice.
elemento = document.links[4]; // Y a través del indice en posición 4, acceso a ese elemento. Me lo retorna como DOMTokenList (es muy similar tmb a un array)
elemento = document.links[4].className; // .className me retorna como si fuera Strings
elemento = document.images; // Si quiero saber cuántas imagenes tiene mi website. Y este link me va a decir cuantas imagenes estoy utilizando! hay 16 imagenes en este proyecto.

elemento = document.scripts;// Me permite acceder a todos los scripts. Me retorna un HTMLCollection con todos los diferentes scripts

/*
Hay muuchas formas de seleccionar los diferentes elementos, sin embargo, la mayoria de las veces no voy a utilizar esta sintaxis. Usaré otras formas de seleccionar elementos. Hay final todas hacen referencia al document! Hay final todo mi contenido mi HTML reside en el document, y puedo hacer referencia a documentos del HTML, a imagenes 
a scripts u a hojas de estilo. Puedo tener asi control sobre todo mi documento o en el DOM.

*/


console.log(elemento);