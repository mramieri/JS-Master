//Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");


//Eventos
eventListeners();
function eventListeners(){

    document.addEventListener("DOMContentLoaded", popupPresupuesto);
    formulario.addEventListener("submit", agregarGasto);

}


//Classess
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []; 
    }

    //Defino nuevo método para almacenar gastos
    nuevoGasto(compritas){
        this.gastos = [...this.gastos, compritas];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidadEn, 0); 
       this.restante = this.presupuesto - gastado;

       console.log(this.restante);
         
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();


    }

}

class UI {   

    insertarcuentaCon(cantidad){  

    //Extranyendo el valor
       const {presupuesto, restante} = cantidad;

    //Agregandolo al HTML
       document.querySelector("#total").textContent = presupuesto;
    
    }

        imprimirAlerta(mensaje, tipo){ 
            //Crear el div
            const divMensaje = document.createElement("div");
            divMensaje.classList.add("text-center", "alert");

            if(tipo === "error"){ 
                divMensaje.classList.add("alert-danger");
            } else {
                divMensaje.classList.add("alert-success");
            }

            //Mensaje de error
            divMensaje.textContent = mensaje;

            //Insertar en el HTML
            document.querySelector(".primario").insertBefore(divMensaje, formulario);


            setTimeout(() => {
                divMensaje.remove();
            }, 3000);


        }

        agregarGastoListado(gastos){   
            
            this.limpiarHTML(); // Elimina el HTML previo
                                  
            //Iterar sobre los gastos
            gastos.forEach(gasto => {
                
                const {nombreGasto, cantidadEn, id} = gasto;

                //Crear un li
                const nuevoGasto = document.createElement("li");
                nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center"; 
               
                nuevoGasto.dataset.id = id;

                //Agregar el HTML del gasto
                nuevoGasto.innerHTML = `${nombreGasto} <span class ="badge badge-primary badge-pill"> $${cantidadEn} </span> `;

                //Btn para borrar
                const btnBorrar = document.createElement("button");
                btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
                btnBorrar.innerHTML = "Borrar &times" 
                btnBorrar.onclick = () => {
                    eliminarGasto(id); //cuando se hace click, mando a llamar a eliminar gasto y le paso el id 
                }
                nuevoGasto.appendChild(btnBorrar);

                //Agregar al HMTL

                gastoListado.appendChild(nuevoGasto)

            });
        }

        //Limpiar el HTML
        limpiarHTML(){
            while(gastoListado.firstChild){
                gastoListado.removeChild(gastoListado.firstChild);
            }
        }

        actualizarRestante(restante){
            document.querySelector("#restante").textContent = restante;
        }

        comprobarPresupuesto(presupuestObj){
            const {presupuesto, restante} = presupuestObj;
            const restanteDiv = document.querySelector(".restante");

            //comprobar 25%
            if( (presupuesto / 4) > restante){
                restanteDiv.classList.remove("alert-success", "alert-warning");
                restanteDiv.classList.add("alert-danger");
            } else if (presupuesto / 2 > restante){
                restanteDiv.classList.remove("alert-success");
                restanteDiv.classList.add("alert-warning");
            } else {
                restanteDiv.classList.remove("alert-danger", "alert-warning");
                restanteDiv.classList.add("alert-success");
            }

            //Si el total es 0 o menor, 
            if(restante <=0){
                uiHijo.imprimirAlerta("El presupuesto se ha agotado", "error");
                formulario.querySelector("button[type='submit']").disabled = true;
            }
        }
        
}

//Instanciar
const uiHijo = new UI();  
let presupuestoHijo;


//Funciones
function popupPresupuesto(){
    const presupuestoIngresado = prompt("¿Cuál es tu presupuesto?");
    //console.log(Number(presupuestoIngresado));

    if (presupuestoIngresado === "" || presupuestoIngresado === null || isNaN(presupuestoIngresado) || presupuestoIngresado <=0){
        window.location.reload();
    }

    //Presupuesto válido
    presupuestoHijo = new Presupuesto(presupuestoIngresado);
   // console.log(presupuestoHijo);

    uiHijo.insertarcuentaCon(presupuestoHijo);  
}
 
function agregarGasto(e){
    e.preventDefault();

    //Leer los datos del formulario
    const nombreGasto = document.querySelector("#gasto").value; 
    const cantidadEn = Number(document.querySelector("#cantidad").value); 

    //Validar campos
    if (nombreGasto === "" || cantidadEn === "" ){
      
        
        uiHijo.imprimirAlerta("Ambos campos son obligatorios", "error"); 
    
            return;

    } else if (cantidadEn <= 0 || isNaN(cantidadEn)){
        uiHijo.imprimirAlerta("Cantidad inválida", "error");

            return;
    }

    // Generar un objeto con el gasto realizado
    const gasto = {nombreGasto, cantidadEn, id: Date.now()}; 
   
    //Añade nuevo objeto  
    presupuestoHijo.nuevoGasto(gasto)

    //Mensaje d todo bien!
    uiHijo.imprimirAlerta("Gasto agregado correctamente :)")

    //Imprimir los gastos
    const {gastos, restante} = presupuestoHijo;
    uiHijo.agregarGastoListado(gastos);

    uiHijo.actualizarRestante(restante);

    uiHijo.comprobarPresupuesto(presupuestoHijo);

    //Reinicia el formulario
    formulario.reset();   
   
}

function eliminarGasto(id){
    //Elimina gastos del objeto
    presupuestoHijo.eliminarGasto(id);

    //Elimina los gastos del HTML
    const {gastos, restante} = presupuestoHijo;
    uiHijo.agregarGastoListado(gastos);

    uiHijo.actualizarRestante(restante);

    uiHijo.comprobarPresupuesto(presupuestoHijo);
}
