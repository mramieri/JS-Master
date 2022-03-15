//como unir 2 arreglos?

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


//.contact
const resultado = meses.concat(meses2, meses3, 'Otro mes');
console.log(resultado);



//spread Operator o rest operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes']; //ojo, si aca le agrego "otro mes", o me aseguro que sea un arreglo, o me aseguro no lleve los 3 puntitos... xq eso lo clona, y lo asigna a nuestro arreglo.
console.log(resultado2);

//el orden es re importante!