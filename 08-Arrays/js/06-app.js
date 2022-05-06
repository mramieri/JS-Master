const carrito = []; 

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 800
}

 
const producto3 = {
    nombre: "Teclado",
    precio: 50
}

//let resultado = [...carrito, producto]; // 1. Creo una nueva variable. 20 Con el spread operator tomo una copia de carrito (que ahora está vacio).  Entonces le agrego ...() y llamo a carrito. Asi estoy creando una copia.
                                //Supongamos que quiero sumarle al carrito un producto: entonces le pongo una , y le paso el nombre de ese objeto, que es producto
                                
//console.table(resultado); // Y en lugar de hacer un console log a carrito (que está vacio, porque yo ahora lo estoy copiando), le paso resultado.


//A estas alturas, la variable resultado ya tiene nuestro carrito. 

let resultado;

resultado = [...carrito, producto]; // Pero si quiero agregarle el producto2, hago lo siguiente

resultado = [...resultado, producto2]; // resultado es = a una copia de resultado (por eso le pongo el ...resultado) y le paso ahi producto2. Así, mi carrito tendrá 2 elementos ya acumulados.

//Ahora, dónde yo coloque producto2 es dónde aparecerá en el array. A diferencia de .unshift() que se va al inicio o de .push() que se va al final,

resultado = [producto3, ...resultado  ];//con el Spread Operator puedo jugar con el orden. Por ejemplo, si quiero que el producto2 aparezca primero: producto3, una coma, y luego el ...resultado (que seria la copia del carrito)
//Esa es la importancia de cómo le pase los valores a ese corchete. De qué le pase primero, dependerá de ello el resultado. de Cómo se verá el array al final

console.table(resultado);