
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    
}



/*
Si quisiera acceder al nombre,
hago console.log(producto.nombre); // Me devuelve "monitor de 20..." , accediendo con la sintaxis de punto.

Ahora, si quiero asignar (producto.nombre) a su propia variable, puedo hacer:
*/

//const nombre = producto.nombre; // entonces producto.nombre se lo asigno a la variable "nombre". Ahora, esto era la forma anterrior.
//con ecmascript que fue una revolucion en JS, tenemos ahora OBJECT DESTRUCTURING --> o sea extraer del objeto y luego crear la variable, todo en UN mismo paso! 

const { nombre, precio, disponible} = producto
console.log(nombre);
console.log(precio);
console.log(disponible);

//Destructuring : Además de extraer el valor, crea la variable. Todo en un mismo paso.