function sumar (a, b) {   //Estos son parámetros de funcion
    console.log( a + b);                        

}

sumar(2 , 3); // El 2 toma el valor de a, y el 3 toma el valor de b. 2 y 3 son argumentos. Los argumentos son los valores reales. El resultado en la consola es de 5.
//Y mi función ahora es más inteligente porque puedo poner:

sumar(200, 111); // 200 es a y 111 es b: me devuelve 311. Ya puedo hacer operaciones un poco más complejas. Ya no mas 2 + 2

/*
//para hacerla más dinámica va a tomar los parámetros de nombre y apellido. No puedo poner un nombre y apellido como 2 + 2 porque no todas las personas se llaman igual. O sea siempre obtendría los mismos datos y eso no es dinámico porque no me sirve.
//Estos parametros son como variables.  Son valores que una vez que se manda a llamar a la función, los vamos a tener. entonces nombre y apellido son parámetros, es decir,
//valores que le puedo pasar a la funcion y no son los valores reales, son variables, es decir, pueden cambiar. NO todas las personas se llaman igual.
function saludar (nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`); // Así definí a mi función
}

saludar(); //Así mando a llamar a mi función pero SIEMPRE tiene que tener los valores
*/

function saludar (nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);  
}

saludar("Mariel", "Ramieri"); // Acá y a esta altura se conoce como ARGUMENTOS. son los valores reales.
//Si le paso parámetros y argumentos las funciones así ya son más inteligentes.
saludar("Mariel"); //Si le paso solo un valor, me dice "hola mariel undefined"
saludar();//Y si no le paso nada y mando a llamar a mi funcion, me devolverá "hola undefined undefined". Esto pasa porque estoy mandando a llamar a la variable -console.log(`Hola ${nombre} ${apellido}`);  -pero no tiene ningun valor