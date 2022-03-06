const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;

//console.log(typeof numero1);
//el typeof me dice que operacion es! en este caso string

//console.log(number);
 //aparece en la consola igual que Math, entonces no puedo nombrar a mis variables asi, xq es una palabra reservada.

 console.log(numero1); // aca lo llevo a la consola como numero, en negro
 console.log(Number.parseInt(numero1)); // asi convierto el String (o sea el "20") a lo que es un numero solo (el 20 en azul)
 //el PArseInt me ayuda a convertir un n° pero a entero!


 console.log(Number.parseInt(numero2)); // Acaa ya lo convierte en un n° entero
 console.log(Number.parseFloat(numero2)); // Acaa ya lo convierte en un flotante, o sea con una fraccion
 console.log(Number.parseInt(numero3)); // aca es que si convierto a numero algo que no es un numero.


 //Revisar si un n° es entero o no:
  console.log(Number.isInteger(numero4));
  console.log(Number.isInteger(numero3));