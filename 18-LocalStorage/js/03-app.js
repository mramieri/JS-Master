//Elimino nombre
localStorage.removeItem("Nombre:");

//Actualizar un registro:
const mesesArray = JSON.parse(localStorage.getItem("Meses:")); //obtengo Meses y lo convierto a Array, todo en un solo paso
console.log(mesesArray);
mesesArray.push(" Nuevo mes");
console.log(mesesArray);
localStorage.setItem("Meses:", JSON.stringify(mesesArray)); // uso nueevamente setItem, y reescribo el array anterior. ojo! no olvidar de convertirlo a string, sino no reescribira.

localStorage.clear();