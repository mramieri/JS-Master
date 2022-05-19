//Retorna varios elementos

const card = document.querySelectorAll(".card");
console.log(card); // Esto me retorna todos los elementos que tengan la clasde de "card". Y  me devuelve un NodeList: es algo similar a un Array, con los diferentes elementos. A todos esos elementos que me devuelve, en JS se los conoce como NODOS.

const formularios = document.querySelectorAll("#formulario");
console.log(formularios);

//Si un elemento no existe:
const noExiste = document.querySelectorAll("no-existe");
console.log(noExiste); // A diferencia del otro selector, este me retorna un NodeList vacio! Es como si fuera un array, pero vacio. Tampoco me marcará que es un error. Sólo me retornará algo que está vacío.

//Esa es la diferencia 