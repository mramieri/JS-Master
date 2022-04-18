//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBTN = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando 'Agregar al carrito':
    listaCursos.addEventListener('click', agregarCurso);

}

//Funciones
function agregarCurso(e) {
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;     
        leerDatosCurso(cursoSeleccionado);
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
    //const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
   // console.log(existe);

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


            const row = document.createElement('tr'); // el Table Row se crea para que se inserten los elementos en el tbody. entonces creo un table row.
        row.innerHTML = ` 
                <td>
                    <img src="${curso.imagen}" width="100">

                </td>    
                <td>${curso.titulo}</td>
                <td>${curso.precio}</td>
                <td>${curso.cantidad}</td>

                <td>
                     <a href='#'  class="borrar-curso" data-id="${curso.id}"> X </a>
                </td>
                    `; //Aca construimos un template string o un template literal 

        //Agrega el HTML del carrito en el tbody 
        contenedorCarrito.appendChild(row);
    })
}

//Eliminar los cursos del tbody
function limpiarHTML (){
    //Forma lenta:
        // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild); //esto es mucho mejor que limpiar con inner
    }
}