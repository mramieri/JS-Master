//Undefined
let numero;

console.log(numero); // me retorna undefined. porque la variable está definida pero su valor NO.
//console.log(typeof numero ); // Si acá al console.log le agregp el operador "typeof" a la variable "numero", me devolverá el tipo de dato; justamente undefined.



//Null
let numero2 = null;

console.log(numero2); // Me devuelve null           
//console.log(typeof numero2 ); // Me devuelve object . Esto pasa porque la especificación de EcmaScript, quien deefine el standard del lenguaje, dice que los "null" deben ser objetos.


//Si comparo
console.log(numero == numero2); // JS me dice que es true! a pesar de que numero no tiene un valor, eso usualmente lleva a comportamientos extraños, ya que estamos comparando un valor que no existe (entre numero y numero2 en este caso).
console.log(numero === numero2); // Si uso el comparador estricto, (SIEMPRE usar este), me devuelve false. 

//Basicamente es esa la diferencia entre el == y el ===. 
//El == es un poco más relajado y el === es estricto.