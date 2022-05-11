/*
Las estructuras de control son para revisar los condicionales, si se da una condicion para que, por lo tanto, suceda otra cosa.
revisar que nuestro codigo valide si se cumple una condicion y ejecutamos una parte del codigo, y sino se cumple vamos a realizar alguna otra accion.
si una persona quiere retirar mas dinero del que tiene en el banco, le mostraremos un msj que dice que no tiene la cantidad de $ suficiente, pero si quiere
retirar una cantidad que si tiene, le vamos a permitir que lo haga.
para ello se utilizan operadores como el IF.
*/

const puntaje = 1000; // 1.Siempre se asigna la variable con const con =

if ( puntaje == 1000 ) { // En esos () siempre coloco la CONDICION que quiero revisar. En este caso, si puntaje es igual a mil, (puedo comparar con == o con ===). Si esa condicion se cumple, se ejecuta el BLOQUE de codido que está en esas {}
    console.log("Si es igual..."); // en los if, cuando tengo una sola linea, esas primeras llaves son opcionales.
} else { // la estructura de if siempre con () y {}
    console.log("no es igual...");
}