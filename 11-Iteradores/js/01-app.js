//.for loop
/*

for (let i = 0; i < 10 ; i++) { 
        console.log(`Numero: ${i}`);
}


for (let i = 0; i < 10 ; i+=2) {  //Esto me lo irá incrementando en 2 en 2 (0, 2 , 4 , 6)
    console.log(`Numero: ${i}`);
}
*/

//Como identificar en un for loop pares de impares? Uso un iterador y un IF para comparar. Los numeros divididos por 2 sin resto son pares

/*
for (let i = 1; i < 20; i++){
        if ( i % 2 === 0) {
            console.log(`El numero ${i} es PAR `); 
        } else {
            console.log(`El numero ${i} es IMPAR `); 
        }
}
*/

//Los .for loops son muy utiles cuando tengo un array

const carrito = [  //Aray
    { nombre: "Monitor 27 pulgadas", precio: 500},  
    {nombre: "Tablet", precio: 100},
   { nombre: "PC de escritorio", precio: 200},
   { nombre: "Televisor led", precio: 600},
   { nombre: "CPU", precio: 260},
    {nombre: "Auriculares", precio: 340},
];


//Si quiero saber cuantos elementos hay en un array?
console.log(carrito.length); // Métodos que existen en los arrays

//Si quiero mostrar en la consola el listado de items , con su nombre y precio, puedo usar un .for loop!

for (let i = 0; i < carrito.length; i++) { // iterador
    console.log("compre ya!", carrito[i].precio); // Propiedades de punto en los objetos
}