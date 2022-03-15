//Ejemplos con funciones que nos retornan valores:
//una vez que esos valores son retornados, los podemos pasar hacia otras funciones, o hacer algo más

function sumar(a, b) {
    return a + b ; // esto es una función que retorna un valor!
}

const resultado = sumar (2, 3); //ahora "resultado" tiene el valor.

console.log(resultado);


//Ejemplo más avanzado:

let total = 0;
function agregarCarrito(precio) {
        return total += precio;
}
function calcularImpuesto(total) {
        return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100); //estoy agregando elementos al carrito, y se suman al total. (fila 13), pero quien tiene el valor es 'total' (fila 21, 22 y 23)
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar} `); // y me retorna el total + el imp. a pagar 

console.log(total);

//asi se obtiene el total, y se calcula tmb el imp. final.-

