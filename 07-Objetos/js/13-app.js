// 3 Metodos para objetos: .keys .values y .entries         .Object 


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true,
 
    }

    // Para saber si la consulta de un cliente en una base de datos fue exitosa o no, lo puedo hacer on Object.Keys para saber si
    //ese objeto tiene informacion o no   
    console.log( Object.keys( producto ) );

    //Objet.values (me retorna la parte derecha del objeto, que son los valores)

    console.log( Object.values( producto ) );

    
    //Object entries me retorna toodo:
    console.log( Object.entries( producto ) );
    

    // .keys (es la parte izquierda del objeto) .values(es la parte derecha) )y .entries (me retorna todo).-   