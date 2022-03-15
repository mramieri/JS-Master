//aca estoy comparando: si puntaje es = a 1.000

const puntaje = 1000; 
const puntaje2 = "1000";

console.log(typeof puntaje)
console.log(typeof puntaje2)

// y si quiero ¿diferente a mil?

//if(puntaje != 1000) {                      // != 'diferente'       y == es 'igual a'
 //   console.log('Si, es diferente')
//}  

//Triple igual:
if(puntaje !== "1000") {         
    console.log('Si, es diferente!')
} else {
        console.log('no, no es diferente')
}

//eso pasa porque con == es un operador mas relajado
// === no es tan estricto   
// === es  estricto (es el que más se recomienda). revisa por el tipo de dato y por el valor. no es lo mismo un 1 que un "1"


// comparador estricto para ver si es distinto: !== (cuando es estricto tmb revisa por el valor y por el tipo de dato)