//Cliente
function cliente(nombre, saldo){  
    this.nombre = nombre;
    this.saldo = saldo;
 }

 const maru = new cliente("Maru", 500)   

 //Creo una funcion que muestre el nombre y el saldo

 function formatearCliente(compra){
     const {nombre, saldo} = compra;
    return `El usuario ${nombre} posee un saldo de ${saldo}`;
 }
 function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
   return `El usuario ${nombre} posee un saldo de ${saldo}, y pertenece a la categoria ${categoria}`;
}
 console.log(formatearCliente(maru));

 //Empresa
 function empresa(nombre, saldo, categoria){  
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
 }

const CJJ = new empresa("Codigo con Juan", 4000, "Cursos en linea");
console.log(formatearEmpresa(CJJ))
