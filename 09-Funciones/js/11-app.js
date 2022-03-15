//AComo pasarle parametros a un arrow function?

const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
 aprendiendo ('Javascript', 'Node.js')

//el codigo de arriba y el de abajo, son lo mismo:

//Transformamos en un ArrowFunction. el function se conviente en =>

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`; //En el parentesis se mantiene y ahi se pasan los parametros del arrow function. puedo no ponerle () si es 1 paramentro.
console.log(aprendiendo2 ('JavaScript', 'Node.js')); //Cuando tiene 2 parametros, el () si es necesario.
  