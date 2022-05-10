//Declaración de función o Function Declaration
//Se utiliza la palabra reservada function. Y debo ponerle un nombre valido. no puede arrancar con "99dias" Tiene la mismas reglas que las variables para nombrarlas.   

//Declaración de la función: function y el nombre:

function sumar () { // En ese () se coloca lo que se conoce como "parámetros de la función"
                        // Luego se abren llaves. Todo lo que vaya dentro es "el cuerpo de la función". Basicamente: todo lo que esté haga  esa función estará delimitado por esas llaves.
console.log( 2 + 2 );                        

}

//Así solo la function no hace nada, no me devuelve nada en la consola. Una cosa es definirla y otra cosa es mandar a llamarla.
//para ello, menciono el nombre de la funcion seguido de ();

sumar();

/*
Permiten separar un poco el código en pequeñas partes. no se escribiré mucho codigo como vine haciendo, de arriba hacia abajo, o con cientos de lineas.
Sino que dividiré el problema en pequeñas funciones y eso lo que hace una buena programadora. me den un un problema y sepa como dividirlo en pequeñas partes, para ir trabajandolo poco a poco.
como decia, las funciones son reutilizables porque puedo mandar a llamar una y otra vez a sumar(); --> mandé a llamar 3 vecesa la función y me devolvió 3 veces el mismo resultado.

Si quiero validar un formulario, creo una funcion que valide un formulario, 
si quiero revisar si un usuario está autenticado, revisa si el usuario está autenticado y tmb lo puedo utilizar en diferentes páginas o secciones de mi sitio web.
*/

//Existe una 2da forma: expresion de función
//En lo que es performance es lo mismo. pero tmb es pregunta de entrevista!
//Sintaxis:

const sumar2 = function() {
    console.log( 3 + 3 );
}

//Se manda a llamar de la misma forma. no importa la manera en las que cree las funciones; siempre se llaman de igual manera.

sumar2();
