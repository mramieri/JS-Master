//Variables y selectores

const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

class Citas {
    constructor(){
        this.visitas = [];
    }

    agregarNuevaCita(encuentro){
        this.visitas = [... this.visitas, encuentro];
        console.log(this.visitas);
    }

    eliminarNuevaCita(id){
        this.visitas = this.visitas.filter(encuentro => encuentro.id !== id);        
    }

    editarCita(encuentroActualizado){
        this.visitas = this.visitas.map(visitas => visitas.id === encuentroActualizado.id ? encuentroActualizado : visitas);
    }
}

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

const uiHijo = new UI();
const citasHijo = new Citas();


//Eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener("input", inputCita);
    propietarioInput.addEventListener("input", inputCita);
    telefonoInput.addEventListener("input", inputCita);
    fechaInput.addEventListener("input", inputCita);
    horaInput.addEventListener("input", inputCita);
    sintomasInput.addEventListener("input", inputCita);

    formulario.addEventListener("submit", nuevaCita);
}


//Objeto con datos del PACIENTE 
const citaObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: ""
}



//Funciones
//Agrega input al citaObj
function inputCita(e){
    
    citaObj[e.target.name] = e.target.value;
   // console.log(citaObj);
}

//Valida y agrega una nueva cita a class Cita
function nuevaCita(e){
    e.preventDefault();

    //Extrae la info de citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj

    //Validar los campos del formulario
    if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === ""){
        uiHijo.imprimirAlerta("Todos los campos son obligatorios", "error");
        
        return;
    }

    if(editando){
        uiHijo.imprimirAlerta("Editado correctamente");

        //Pasar el obj de la cita a edicion
        citasHijo.editarCita({...citaObj});

        //Regresar el texto del btn a su estado original
        formulario.querySelector('button[type = "submit"]').textContent = "Crear cita";

        //Quitar modo edicion
        editando = false;

    } else {
        //Agrego id identificador
        citaObj.id = Date.now();

        //Creando nueva cita - gran contenedor de toda la cita
        citasHijo.agregarNuevaCita({...citaObj}); // le paso una copia de citaObj y no la referncia completa, asi me evito que el formulario me reescriba. Sólo accedo a la copia de citaObj, no acceso al objeto global.

        //Msj de agregado correctamente
        uiHijo.imprimirAlerta("Se agregó correctamente");
    }
  
    
    //Reinicio obj globlal para la validacion
    reiniciarObjetoGlobal(); // entonces cuando clickeo por 2da vez en 'crear cita', se frena ahi y no me crea una más.
    
    //Reinicio sólo el formulario
    formulario.reset();

    //Mostrar el HTML de las citas
    uiHijo.imprimirCitas(citasHijo);
}

function reiniciarObjetoGlobal(){ // No puedo traerme directamente citaObj a otro objeto. tengo que ir propiedad x propiedad
    citaObj.mascota = ""; // los blanqueo.
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = "";
}

function eliminarCita(id){
    console.log(id);
    //Eliminar la cita
    citasHijo.eliminarNuevaCita(id);

    //Muestra un msj
    uiHijo.imprimirAlerta("La cita se eliminó correctamente");

    //Refrescas citas
    uiHijo.imprimirCitas(citasHijo);
}

//Carga los datos y el modo edicion

function cargarEdicion(revisacion){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = revisacion;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el obj
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del btn "Crear cita"
    formulario.querySelector('button[type = "submit"]').textContent = "Guardar Cambios";

    editando = true;

}


