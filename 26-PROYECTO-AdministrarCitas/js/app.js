//Variables y selectores

//UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

//
let editando; 

//Classes
class Citas { 
    constructor(){
        this.citas = []; 
    }

    agregarCita(cita){ 
        this.citas = [...this.citas, cita] 
        console.log(this.citas);
    }

    //este codigo se encargará de eliminar la cita
    eliminarCita(id){ 
        this.citas = this.citas.filter( cita => cita.id !== id); 
    }

    editarCita(citaActualizada){ 

    this.citas =  this.citas.map(cita => cita.id === citaActualizada ? citaActualizada : cita);
    
    }
    
}

class UI {

    imprimirAlerta(mensaje, tipo){

        //Creo el div 
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
        
        //Agregar clase en base al tipo de error
        if (tipo === "error"){
            divMensaje.classList.add("alert-danger");
        } else{
            divMensaje.classList.add("alert-success");
        }

        //Msj de error
        divMensaje.textContent = mensaje; 

        //Agregar al DOM
        document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        //Quitar la alerta

        setTimeout(() => {
            divMensaje.remove();
        }, 5000);        

    }

    
    imprimirCitas({citas}){ 

        //Limpiar HTML, lo llamo antes de hacer la iteracion
        this.limpiarHTML();

      //itero sobre cada cita 
       citas.forEach(cita => {
        const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

        //cada cita estará en un div.
        const divCita = document.createElement("div");
        divCita.classList.add("cita", "p-3");
        divCita.dataset.id = id; 


        //Puro scripting de los elementos de la cita
        const mascotaParrafo = document.createElement("h2");
        mascotaParrafo.classList.add("card-title", "font-weight-bolder");
        mascotaParrafo.textContent = mascota;

        const propietarioParrafo = document.createElement("p");
        propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder">Propietario: </span> ${propietario}
        `;

        const telefonoParrafo = document.createElement("p");
        telefonoParrafo.innerHTML = `
            <span class="font-weight-bolder">Telefono: </span> ${telefono}
        `;

        const fechaParrafo = document.createElement("p");
        fechaParrafo.innerHTML = `
            <span class="font-weight-bolder">Fecha: </span> ${fecha}
        `;

        const horaParrafo = document.createElement("p");
        horaParrafo.innerHTML = `
            <span class="font-weight-bolder">Hora: </span> ${hora}
        `;

        const sintomasParrafo = document.createElement("p");
        sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
        `;


        //Boton para eliminar esta cita
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger", "mr-2");
        btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

        //Desde el id puedo eliminar haciendo click
        btnEliminar.onclick = () => eliminarCita(id);


        //Boton para editar cita
        const btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-info");
        btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
        btnEditar.onclick = () => cargarEdicion(cita); 

        
        //agregar los parrafos al divCita
        divCita.appendChild(mascotaParrafo);
        divCita.appendChild(propietarioParrafo);
        divCita.appendChild(telefonoParrafo);
        divCita.appendChild(fechaParrafo);
        divCita.appendChild(horaParrafo);
        divCita.appendChild(sintomasParrafo);
        divCita.appendChild(btnEliminar);
        divCita.appendChild(btnEditar); 

        //Agregar las citas al HTML
        contenedorCitas.appendChild(divCita);


       });
    }
    //Limpiar HTML
    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

//Instancio globalmente
const citasHijo = new Citas();
const uiHijo = new UI();


//Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");


//Eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener("input", datosCita); 
    propietarioInput.addEventListener("input", datosCita);
    telefonoInput.addEventListener("input", datosCita);
    fechaInput.addEventListener("input", datosCita);
    horaInput.addEventListener("input", datosCita);
    sintomasInput.addEventListener("input", datosCita);

    //New event
    formulario.addEventListener("submit", nuevaCita);
}

//Objeto ppal con la info de la Cita
const citaObj = { 
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
}


//Funciones

//agrega datos al OBJ de Cita
function datosCita(e){
    e.preventDefault();

    citaObj[e.target.name] = e.target.value; 

  // console.log(citaObj);
}

 //Valida y agrega una new cita la class de Citas
function nuevaCita(e){
    e.preventDefault();

    //Extraigo la info del citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

        //Validar
    if (mascota === "" || propietario === "" || telefono === "" || fecha == "" || hora === "" || sintomas === ""){
        uiHijo.imprimirAlerta("Todos los campos son obligatorios", "error");  

        return; 
        
    }  

    //
    if (editando){
 
       uiHijo.imprimirAlerta("Editado correctamente");  

        //Pasar el obj de la cita a edicion
        citasHijo.editarCita({...citaObj}); 

        //regresar el texto del Btn a su estado original
        formulario.querySelector("button[type='submit']").textContent = "Crear cita";

        //Quitar modo edicion        
        editando = false; 
   
    } else {

        //generar id unico 
        citaObj.id = Date.now();

        //Creando una nueva cita
        citasHijo.agregarCita({...citaObj}); 

        //Mensaje de agregado correctamente
        uiHijo.imprimirAlerta("Se agregó correctamente");
    }
    


//Reiniciar el obj para la validacion
reiniciarObjeto(); 

//Reiniciar el formulario

formulario.reset(); 

//Mostrar el HTML de las citas
    uiHijo.imprimirCitas(citasHijo); 
}

//Reinicio el objeto 
function reiniciarObjeto(){ 

    citaObj.mascota = "";
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = ""; 

}

//Defino
function eliminarCita(id){

   //Eliminar cita
    citasHijo.eliminarCita(id);

   //Muestre un msj
   uiHijo.imprimirAlerta("La cita se eliminó correctamente");  

   //Refrescar las citas
   uiHijo.imprimirCitas(citasHijo); 

}

//Carga los datos y el modo edicion
function cargarEdicion(cita){
    console.log(cita); 

    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita; 

    //llenar los inputs
    mascotaInput.value = mascota; 
    propietarioInput.value = propietario; 
    telefonoInput.value = telefono; 
    fechaInput.value = fecha; 
    horaInput.value = hora; 
    sintomasInput.value = sintomas;  

    //Llenar el objeto 
    citaObj.mascota = mascota;  
    citaObj.propietario = propietario;  
    citaObj.telefono = telefono;  
    citaObj.fecha = fecha;  
    citaObj.hora = hora;  
    citaObj.sintomas = sintomas;  
    citaObj.id = id;  

    //Cambiar el texto del boton
    formulario.querySelector("button[type='submit']").textContent = "Guardar Cambios"; 

    editando = true;

}