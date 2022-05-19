/*
//Crear un nuevo enlace, utilizando una de las muchas formas , con .createElement

const enlace = document.createElement("A");

//Agregando el texto
enlace.textContent = "new link!";

//Añadiendo href
enlace.href = "/nuevo.enlace"
console.log(enlace);

enlace.target = "_blank";
enlace.setAttribute("data-ennnnlace", "enlace-nuevito");
enlace.classList.add("alguna-clase");

enlace.onclick = miFuncion; // Y esto me agregará una función X cuando mi elemento sea creado.
 
//Seleccionar la navegacion
const navegacion = document.querySelector(".navegacion");

navegacion.appendChild(enlace); // Su nuevo hijo será enlace!

//Ubico mi elemento
//console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);


 function miFuncion() { // Esto responde a enlace.onclick
    alert ("diste click en el nuevo elementoo");
 }
 */

//Crear un CARD  
//Acá estoy replicando lo que está en el HTML que creó el profe

//Replicando el titulito "concierto"
const parrafo1 = document.createElement("P");
parrafo1.textContent = ("Concierto");
parrafo1.classList.add("categoríaa", "Concierto");


//Replicando el titulito "Música electronica"
const parrafo2 = document.createElement("P");
parrafo2.textContent = ("Concierto de raack");
parrafo2.classList.add("Tituloo");


//Replicando el titulito "$1200 por persona" (Este acá hay que darle un Scripting por el $. Esto de acá es "DOM Scripting")
const parrafo3 = document.createElement("P");
parrafo3.textContent = "80 por persona"
parrafo3.classList.add("money");

//crear un <div> con la class "Info":
const info = document.createElement("div"); 
info.classList.add("inffo");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Creo la imágen: (nota: las imagenes no tienen .textContent)
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg" //.src es donde va a encontrar ese elemento (que cree en mi variable "imagen")
imagen.classList.add("img-fluid"); //es la clase que los hace responsive!
imagen.alt = "texto alternativo con .ALT" // .alt para textos alternativos. Así puedo ir construyendo todo el HTML de mis imagenes.

//Lo ultimo que me falta es el div MAYOR, que es el class="card"  
const card = document.createElement("div"); // Estoy creando una nueva variable para un nuevo <div>
card.classList.add("cardd");

//Asignar la imagen
//como ya tengo mi elemento(o sea la card) creada (si estuviera seleccionada aplica tmb,)
card.appendChild(imagen);


//Asignar info
card.appendChild(info);

//Insertar en el HTML 
const contenedor = document.querySelector(".hacer .contenedor-cards"); // Busco a la primera clase (section padre) es hacer, y la que le sigue es contenedor-cards. Como lo quiero meter dentro de contendor cards, accedo asi. Está buenisimo el selector este, porque hay más "contenedor-cards" abajo, pero especificamente me interesa este que está dentro de la sección "hacer"
contenedor.appendChild(card);//Como ya tengo la referencia de Contenedor, le agrego la CARD pa ubicarla.
//contenedor.insertBefore(card, contenedor.children[0]);
 