//las funciones de MATH existen en la ventana global de la consola del navegador
//ej. Math.PI


let resultado
//resultado = Math.PI;
//Ahi me sale el rdo. de lo que ya tiene registrado el objeto de 'Math'

//Para redondear:
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
//JS en 2.5 redondea a 3 no a 2.
resultado = Math.round(2.4);

//redondear hacia arriba , de manera forzosa:
resultado = Math.ceil(2.1);

//redondear hacia abajo, de manera forzosa:
resultado = Math.floor(2.9);

//Raiz cuadrada (no muy utilizado)
resultado = Math.sqrt(144);

//Valor absoluto: (este ignora el valor negativo y trae los 500)
resultado = Math.abs(-500);

//Potencia 
resultado = Math.pow(2, 4);

//Minimo
resultado = Math.min(3,5, 1, 12, -3);

//Maximo
resultado = Math.max(3,5, 1, 12, -3);

//Aleatorio
resultado = Math.random() * 20;

//Aleatorio dentro de un rango... esto sirve para una rifa x ej
resultado = Math.floor(Math.random() * 30);

console.log(resultado);