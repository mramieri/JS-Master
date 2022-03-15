function saludar (nombre, apellido = ' ') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();

//si no está presente el parámetro, cuando mando a llamar a la funcion, entonces la misma me traerá undefined o un campo vacio, me tomará lo que sea que yo defina en el renglon 1
