//variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articuloCarrito = []; 


//Listeners
cargarEventListeners();
function cargarEventListeners() {
    //cuando agrego un curso presionando "agregar carrito"
    listaCursos.addEventListener("click", agregarCurso);

    //Elimina cursos del carrito  
    carrito.addEventListener("click", eliminarCurso);

    //VaciarCarrito
    vaciarCarritoBtn.addEventListener("click", () => {  
        articuloCarrito = []; //Reiniciar el array

        limpiarHTML(); // Eliminar todo el HTML


    });
}

//Funciones

function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")) {    
        const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);        
    }        
}  

//Elimina un item  del carrito
function eliminarCurso(e){
    if (e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        //Eliminar del array articuloCarrito por el data-id

        articuloCarrito = articuloCarrito.filter(curso => curso.id !== cursoId);
        console.log(e.target.classList);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido de HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
   // console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articuloCarrito.some( curso => curso.id === infoCurso.id);
     if (existe) {
            //Actualizamos la cantidad
            const cursos = articuloCarrito.map(curso => {
                if (curso.id === infoCurso.id){
                    curso.cantidad++;
                    return curso; // retorna objeto actualizado
                } else {
                    return curso;// retorna objeto que no son duplicados
                }
            });
            articuloCarrito = [...cursos];
      } else {
          //Agrega elementos del array al carrito
    articuloCarrito = [...articuloCarrito, infoCurso]; 
      }
    
    console.log(articuloCarrito);
    carritoHTML();
    }
 

 // Muestra el carrito de compras en el HTML
 function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articuloCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td> ${titulo} </td>  
        <td> ${precio} </td>  
        <td> ${cantidad} </td>  
        <td>  
          <a href="#" class="borrar-curso" data-id="${id}">  X </a>
        </td>  
        `;

        //Agrega el HTML del carrito en el tbody

        contenedorCarrito.appendChild(row);
    })
 }

 //Elimina los cursos del tbody
 function limpiarHTML(){
   //Forma lenta
   // contenedorCarrito.innerHTML = " ";

//con el While es mejor!
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild) // Esta es de mejor performance.
    }

 }

