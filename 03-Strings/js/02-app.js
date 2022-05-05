/*
Métodos para Strings/Cadenas de Texto:

A través de un metodo de los strings, puedo configurar que un tweet de Twitter se envie hasta un max de 270 caracteres.
*/


const producto = 'Monitor de 20 pulgadas';

console.log(producto);

//Conocer la cantidad de letras de la cadena de texto:
console.log(producto.length); // Si utilizo un método como .lenght, Me indica cuantos caracteres tiene esa variable.

// otro metodo: INDEXOF
//console.log(producto.indexOf('pulgadas')); // a la variable le paso. indexOf y en los () le paso la palabra que estoy buscando, 
//me indica si el string de "producto" contiene la palabra monitor en ese string, dandome el n° de la posicion.
//Si me devuelve "-1", significa que NO lo encontro. OJO con las mayusculas.

//Hay otro parecido que se llama .includes (este me devuelve true o false)
//console.log(producto.includes('Tablet'));
//console.log(producto.includes('Monitor')); // Reminder: revisa por mayusculas y minusculas

//Estos son METODOS de los STRINGS. Se los conoce como las propiedades de los Strings.

//Ojo: .lenght no lleva () y .inclused si. Eso es porque .lenght es una propiedad y ésta no utiliza ().-


