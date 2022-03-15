//Aqui: funcionee que toman parametros y argumentos:
//para que mis funciones sean mas inteligentes, deberán utilizar parámetros y argumentos:

function sumar (a, b ) { // a y b son parámetros de una función.
    console.log( a + b );
}; 

sumar(2, 3); // 2 y 3 se los conoce como argumentos. los argumentos son los valores reales. a y b son mas representativos...
sumar(200, 184);
sumar(124, 321);


//estos valores pueden cambiar, son variables (no todas las personas se llaman igual)
function saludar (nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar(`Maruu`, `Ramieri`);
saludar();