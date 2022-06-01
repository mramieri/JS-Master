//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando 'Agregar al carrito':
    listaCursos.addEventListener('click', agregarCurso);


    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //Muestra los cursos de Local Storage 2!!
    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || []; //y obtengo el carrito.
        //Si el user no agregó nada alc arrito, eso le marcará null. entonces para darle la posibilidad de que no agregue nada, le paso la opcion y pongo un array vacio. o sea que articuloscarrito sea un array vacio
   
   carritoHTML(); //mando a llamar a esa funcion paea que me imprima lo que tengo en localstorage
    });
    

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arreglo (lo igualo a nada, empty)
   
        limpiarHTML(); // Eliminamos todo del HTML
    })
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;     
        leerDatosCurso(cursoSeleccionado);
    }
    
}
//Elimina un curso del carrito
function eliminarCurso(e) {
        if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
       
        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }

}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
   // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src, 
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
   
    if(existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;   //Retorna el objeto actualizado
            } else {
                    return curso; //Retorna los objetos que no son los duplicados
            }

         });
            articulosCarrito = [...cursos];
    } else {
         // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }


   
  

    console.log(articulosCarrito);

    carritoHTML();
    
}

//Muestra el carrito de compras en el HTML 
function carritoHTML () {


    //Limpiar el HTML (Recorre el carrito y genera el HTML)
    limpiarHTML();

   
        //Recorre el carrito y genera el HTML:    
    articulosCarrito.forEach( curso => {
        console.log(curso);

            const { imagen, titulo, precio, cantidad, id } = curso;
            const row = document.createElement('tr'); // el Table Row se crea para que se inserten los elementos en el tbody. entonces creo un table row.
        row.innerHTML = ` 
                <td>
                    <img src="${imagen}" width="100">

                </td>    
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>

                <td>
                     <a href='#'  class="borrar-curso" data-id="${id}"> X </a>
                </td>
                    `; //Aca construimos un template string o un template literal 

        //Agrega el HTML del carrito en el tbody 
        contenedorCarrito.appendChild(row);
    })

    //Agregar al carrito de compras al storage
    sincronizarStorage();
}

    //Agregar el carrito al storage 1!!
  function  sincronizarStorage(){
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
    }


//Eliminar los cursos del tbody
function limpiarHTML (){
    //Forma lenta:
        // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); //esto es mucho mejor que limpiar con inner
    }
}