const producto = {
    idProducto: 10  // llave y valor
}

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor"); // con set (que es como add) , le agrego un producto y le paso un valor 

console.log(weakmap.has(producto)); // me permite comprobar SI  existe este producto dentro de mi weakmap.
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
console.log(weakmap);