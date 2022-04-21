//como agregar elementos al local storage?
//Si almaceno en local storage, puedo apagar la pc, prenderla al dia siguiente y que todos los datos siga ahi


localStorage.setItem('nombre', 'maru'); //solo almacena strings, entonces no puedo guardar arreglos ni objetos. solo strings.

//sessionStorage.setItem('nombre', 'mariel');
// A = de session storage, ahi cuando cierro el navegador, se pierden esos datos.. son 'como de sesion'.-
// y con el "set item" lo que hacemos es agregar un nuevo elemento a esa sesion.

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300
}
//Y puedo convertir el objeto a un string, asi: y luego almacenarlo en local storage

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);
console.log(productoString);

//Y tmb se puede hacer con un arreglo:
//const meses = ['Enero', 'Febrero', 'Marzo'];
//const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);

//Otra tmb es aplicar directamente el JSON en vez de crear una variable:
 
localStorage.setItem('meses', JSON.stringify(meses));