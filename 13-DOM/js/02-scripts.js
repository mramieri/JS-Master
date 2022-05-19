//Seleccionar elementos por su clase. Supongamos que quiero seleccionar un elemento de mi HTML.

const header = document.getElementsByClassName("header"); //1. Creo una variable que se llame, por ej, "header" y SIEMPRE debo hacer referencia al DOCUMENT. Siempre todos nuestros selectores inician con document 2. Y luego le pongo un .punto y el selector "getElementsByClassName". Este me permitirá seleccionar un elemento que tenga el nombre de una clase. 3. y entre () como STRING le paso el nombre de la clase que quiero seleccionar (que yo ya previamente vi desde la consola).

console.log(header);

/*
Esto me selecciona mi header y se resalta en el HTML si le paso el mouse por arriba de header.header.contenedor

De esta forma puedo acceder a un elemento y comenzar a hacer cambios sobre esa sección. Puedo hacer click sonbre un formulario y validarlo, etc. Todo eso lo estaremos viendo a lo largo del currso.
Nota: ojo con las mayusculas. Si en el HTML está todo en minúscula, debo trabajar tmb todo con minúscula. Debo trabajar con las clases tal como están definidas en mi HTML.

*/

//Ahora quiero seleccionar el div con clase "hero"

const hero = document.getElementsByClassName("hero");
console.log(hero);
/*
Me devuelve un div con la clase de "hero"
*/




// Las clases tienen la característica de que se pueden repetir en mi HTML;
//Si las clases existen más de 1 vez, podemos :

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//Y de esta forma de devolverá todos los diferentes elementos que tengan esa clase ("contenedor"). 
//.getElementsByClassName: como selecciona clases, me puede traer múltiples elementos. Porque las clases se pueden utilizar + de 1 vez en el HTML.

//Si una clase no existe:

const noExiste = document.getElementsByClassName("No-existe"); 
console.log(noExiste); // Pero me retorna un HTML que está vació. Porque no existe ese elemento.

//Es muuy similar a un array, con la sintaxis de los [],  pero me dice que está vacio. O sea, no me marcará un error diciendome que no existe o que no lo pudo encontrar, sólo me devuelve como si fuera un array vacio.
//Cada vez es menos comun esta sintaxis, pero aun hay ejemplos escrito con ella. Pero es importante entender como funciona.
 
 