const producto = {                         
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
    informacion: {
          Medidas: {
            peso: "1 kg",
            medida: "1 metro",
        }, 
          Fabricacion: {
            pais: "China",

            }
    }
    
}
/*
//Si quiero acceder al NOMBRE y crear una variable, puedo:
const { nombre } = producto; //Esto me CREA la variable Y me asigna el valor del Nombre del Producto. 

console.log(producto.nombre); // "monitor 20 pulgadas" me devuelve.
*/

//Bueno, y si quiero extraer "medidas" por ejemplo?

/*
const { nombre, informacion } = producto; // Si quiero acceder a "Medidas" o "Fabricación", no puedo poner "informacion, medidas" tengo que acceder mediante unos : y unas llaves.

console.log(nombre);
console.log(informacion);
*/
/*
const { nombre, informacion: {Fabricacion} } = producto;  // Debo acceder con mi sub-objeto #2, ponerle : y llaves

console.log(nombre);
console.log(Fabricacion); // La puedo llamar desde acá porque arriba ya cree a la vatiable fabricacion. Ojo, NO ESTOY creando la variable de "informacion", solo la de "fabricacion"
                            //Si quisiera crear la variable de informacion, deberia aclarar explicitamente informacion solo. Así:
*/

/*
const { nombre, informacion, informacion: {Fabricacion} } = producto;// Si quiero acceder a "Medidas" o "Fabricación", no puedo poner "informacion, medidas" tengo que acceder mediante unos : y unas llaves.

console.log(nombre);
console.log(informacion); //Acá ya esto accediendo a Informacion, porque ya cree la variable de Informacion arriba.
console.log(Fabricacion); //Acá ya esto accediendo a Fabricacion, porque ya cree la variable de Fabricacion , como se ve arriba, pondiendo   informacion: {Fabricacion}. // Nota: Acá NO se crea la variable de Informacion. lo tengo que hacer aparte!! (renglon de arriba).
*/

//Y si quiero acceder al país?
//Tengo que agregar: Fabricacion: { pais}

/*
const { nombre, informacion, informacion: {Fabricacion: { pais}} } = producto.

console.log(nombre);
console.log(informacion); //Acá ya esto accediendo a Informacion, porque ya cree la variable de Informacion arriba.
console.log(pais); // Y acá no puedo poder Fabricacion en la consola, porque acordate que arriba estoy creando la vriable de pais ahora, NO la de fabricacion.

*/


//Si quisiera acceder a ver Fabricacion, primero tengo que crear la variable, poniendo { Fabricacion, Fabricacion: { pais}}

const { nombre, informacion, informacion: {Fabricacion, Fabricacion: { pais}} } = producto;

console.log(nombre);
console.log(informacion);  
console.log(Fabricacion);
console.log(pais);