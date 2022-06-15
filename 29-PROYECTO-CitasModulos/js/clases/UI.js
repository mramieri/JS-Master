import { eliminarCita, cargarEdicion } from "../funciones.js";
import { contenedorCitas } from "../selectores.js"

class UI{

    imprimirAlerta(mensaje, tipo){

       //Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

        //Agregar clase s/ tipo error
        if(tipo === "error") {
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        //Quitar alerta 5'
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    // extraigo directamente de citasObj! {destructuring}
    imprimirCitas({visitas}){ 

        this.limpiarHTML();
               
        visitas.forEach( revisacion => {

            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = revisacion;

            const divRevisacion = document.createElement("div");
            divRevisacion.classList.add("cita", "p-3");
            divRevisacion.dataset.id = id;

            //Scripting de la revisación
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-tittle", "font-weight-bolder");
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span>${propietario}`;

            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span>${telefono}`;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${fecha}`;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span>${hora}`;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas: </span>${sintomas}`;
            
            //Btn para eliminar la cita
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn", "btn-danger", "mr-2");
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            btnEliminar.onclick = () => eliminarCita(id);//conecto con el id para que se elimine

            //Editar cita
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-info");
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            btnEditar.onclick = () => cargarEdicion(revisacion);



            //Agrego los parrafos al divRevisacion
            divRevisacion.appendChild(mascotaParrafo);
            divRevisacion.appendChild(propietarioParrafo);
            divRevisacion.appendChild(telefonoParrafo);
            divRevisacion.appendChild(horaParrafo);
            divRevisacion.appendChild(fechaParrafo);
            divRevisacion.appendChild(sintomasParrafo);
            divRevisacion.appendChild(btnEliminar);
            divRevisacion.appendChild(btnEditar);

            //Agrego revisaciones al HTML
            contenedorCitas.appendChild(divRevisacion);

        });
    }

    //Limpio el HTML
    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

export default UI;