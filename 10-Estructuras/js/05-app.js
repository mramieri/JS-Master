//Switch case

    const metodoPago = "efectivo";

    switch(metodoPago) { 
        case "efectivo": 
        pagar();
            break;
        case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
             break;
        case "dolares":
        console.log(`Pagaste con ${metodoPago}`);
                     break;     
        default: 
        console.log("aun no ha seleccionado ningún metodo de pago o método de pago no soportado");
            break;
    }

function pagar(){
    console.log(`Pagando con ${metodoPago} ...`);
}
/*
puedo reemplazar un console.log, por un pagar();
y abajo llamar a la funcion de pagar y pasarle ahi el metodo de pago con el console.log

*/