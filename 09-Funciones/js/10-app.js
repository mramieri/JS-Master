/*const aprendiendo = function() {
    console.log( "Aprendiendo JS en function expression");
    }


const aprendiendo2 = () => "Aprendiendo JS en function expression";
    
console.log(aprendiendo2());
 */
//Si elimino el console log, mi variable de "aprendiendo2" tiene el valor de "Aprendiendo JS". 
//Por lo tanto le puedo poner abajo el console.log a aprendiendo2, lo mando a llamar y borro la otra funcion que tmb mandaba a llamar.

const aprendiendo = function() {
    console.log("Aprendendo JS")
}

const aprendiendo2 = () => "Aprendiendo JS"

console.log(aprendiendo2());