//para sumar o restar de a un punto, en una trivia por ej (acertas o perdes puntaje)
//se le manda a llamar primero al puntaje y luego le pongo puntaje++

//si quiero que se incremente y luego se muestre, debo poner el ++ primero


let puntaje = 5;

puntaje++; // esto me devuelve 5

++puntaje; // esto desde el inicio me devuelve 6 

//aca diferencias entre + y -:

puntaje--; // esto me devuelve el mismo 5
--puntaje; //este si me devuelve 4

//hasta aca todo de 1 en 1

//si quiero que sume de a 3 ponele:
puntaje -= 3;
puntaje -= 3;
puntaje -= 3;
puntaje -= 3;

//toma los 5 que tengo y le sumo 3

//o si en un videojuego quiero darle una cantidad mas grande de puntaje, se hace con el += 7 por ej.



console.log(puntaje);
