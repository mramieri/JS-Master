//106. Generar HTML con JavaScript
//o sea estoy construyendo un enlace con este nuevo codigo:
const enlace = document.createElement('A'); //Asi puedo crear elementos.. le puedo pasar un DIV un P, un h1, una img, etc. o sea le pongo LA ETIQUETA que voy a usar.


//Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank"//y asi le voy agregando atributos

enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');


//enlace.onclick = miFuncion; //agregará una funcion cuando este elemento este creado

//y luego se lo agrego a la navegacion:

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //El appendChil es como agregarle un hijo nuevo a la navegacion. su nuevo hijo será 'enlance'

//console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[1]); //insert before requiere dos argumentos

//entonces está AppendChild o insertBefore. tmb existe innerHTML 
//insertBefore Mme va a dar un poco mas de control de lo que viene siendo el HTML. Le tengo que decir en que parte colocarlo.
//este es el "nodo de referencia": navegacion.children[1]);. si no se lo paso, me va a marcar un error y a decirme que se requiere el 2do argumento (que es el nodo de referencia)
//lo que es AppendChild no da tanto control pero  tmb lo agrega al HTML. Mientras no lo agregue, puedo ir poniendo mas atributos.


//function miFuncion() {
 //   alert ('Diste click')
//}

//____________________________________________________________________
//Crear un CARD de forma dinamica (voy a consumir los datos de una API o base de datos, y los mostrare en el HTML). es lo que hace librerias como React o frameworks, Angular, etc

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');



//Crear el DIV con la clase de Info
const info = document.createElement('div');
info.classList.add('info'); //le agrego la clase de info

//una ves que cree el elemento o lo seleccione como hice mas arriba (renglon 3)
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'
//imagen.classList.add('img-fluid');
//imagen.alt = "Texto Alternativo"

//Crear el card
const card = document.createElement('div');
card.classList.add('card')

//Asignar la imagen
card.appendChild(imagen);

//asignar info  
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);


//Asi es crear en HTML con java. se usa mucho createElement, textContent y diferentes propiedades para agregar (classList), etc
//esto era DOM Script