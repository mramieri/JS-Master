const nombre = localStorage.getItem("Nombre:");
console.log(nombre);

const productoJSON = localStorage.getItem("producto:");
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem("Meses:");
const mesesArray = JSON.parse(meses)
console.log(mesesArray);