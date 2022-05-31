localStorage.setItem("Nombre:", 1);

const producto = {
    nombre: "Monitor de 20 pulgadillas",
    precio: 300
}


const productoString = JSON.stringify(producto);
console.log(productoString);
localStorage.setItem("producto:", productoString);


 const meses = ["Enero", "Febrero", "Marzo"];
 localStorage.setItem("Meses:", JSON.stringify(meses));