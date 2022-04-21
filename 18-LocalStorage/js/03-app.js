localStorage.removeItem('nombre'); //asi se elimina un elemento de localStorage
//Util para CROD =(crear, leer, actualizar y eliminar). para local storage no se puede actualizar!

//Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes') //Array method
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)); //Esto reescribe el valor actual. localStorage no hay algo pata poder actualizar un elemento. usamos SET. es como si fuera una actualizacion.

//Hay un metodo mas:
localStorage.clear(); //esto limpia todo el local storage. todo lo que haya lo eliminará