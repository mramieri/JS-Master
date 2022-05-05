
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
}

const medidas = {
    peso: "1 kg",
    medida: "1 metro",
}

console.log(producto);
console.log(medidas);

//Una forma es usando Object.assign(); y en los () le paso lo que quiero unir

const resultado = Object.assign(producto, medidas);



//Spread operator o Rest operator (Operador de la difusión/reparto) -- la mas utilizada
const resultado2 = { ...producto, ...medidas }

console.log(resultado);
console.log(resultado2);

//Y el resultado es el mismo!