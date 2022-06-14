//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: "Amarula",
    saldo: 500
}

//const nombre = 20;

weakset.add(cliente);
//weakset.add(nombre);

//weakset.delete(cliente);

console.log(cliente.size);

