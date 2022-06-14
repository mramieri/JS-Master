const cliente = new Map();

cliente.set("nombre", "Karen");  
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);
cliente.set(true, true);

console.log(cliente.has("nombre"));
console.log(cliente.get("nombre"));


cliente.delete("saldo"); // lo elimino
console.log(cliente.has("saldo")); // trato de ver si existe "saldo", pero me devuelve false
console.log(cliente.get("saldo")); 


cliente.clear();
console.log(cliente);

const pacientes = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ] ); 

pacientes.set("Dr", "Dr Asignado");
pacientes.set("nombre", "Antonio");

console.log(pacientes);


pacientes.forEach( (datos, index) => {
 
    console.log(index);
});
