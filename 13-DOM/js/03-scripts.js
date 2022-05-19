//Seleccionar por ud

/*
1. 1ro creo la variable desde donde seleccionare al id.
2. SIEMPRE es IGUAL A document -> porque siempre se debe hacer primero referencia al documento
3. le paso el .getElementById(); 
4. Notemos la sintaxis; a diferencia de getelementSbyclassname, ahi se hablaba de multiples elementoS, mientras que en este otro, refiere a un elemento por su ID.
5. Y a low () le paso el id que quiero buscar. En este caso es el id="formulario"

*/

const formulario = document.getElementById("formulario");
console.log(formulario); 