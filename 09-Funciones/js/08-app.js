/*

function sumar( a, b ) { 
  return a + b;  
}
const resultado = sumar(2, 3); 

console.log(resultado);
 


//Ejemplo más avanzado

let total = 0; 

function agregarCarrito(precio) { 
        return total += precio; 
}

function calcularImpuesto(total){ 
      return total * 1.15;      // Acá le cargo el impuesto(15%)
}

total = agregarCarrito(300); 
total = agregarCarrito(100); 
total = agregarCarrito(600); 

const totalPagar = calcularImpuesto(total);// Acá ponele que ya terminé de agregar elementos a mi carrito

console.log(`El total a pagar es de ${totalPagar}`); // Acá se acumula el 15% del total a pagar

console.log(total); 

/*

Me está retornando un valor a "total" porque con eso voy a hacer algo más adelante. 
O sea, deseo obtener el total y luego calcular el impuesto final, y sumar el total a pagar

*/

/*
function sumar (a, b) {
      return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);

//Ejemplo más avanzado
let total = 0;

function agregarCarrito(precio) {
        return total += precio;
}

function calcularImpuesto(total) {
        return total *1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);
*/


let total = 0;

function agregarCarrito(precio) {
        return total +=precio;
}


function calcularImpuesto(total){
        return total * 1.15;
}

total = agregarCarrito(300)
total = agregarCarrito(100)
total = agregarCarrito(600)

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

;
console.log(total);