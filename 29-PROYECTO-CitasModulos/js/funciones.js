import Citas from './clases/Citas.js'
import UI from '.clases/UI.js'

import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from '../selectores.js'



const uiHijo = new UI();
const citasHijo = new Citas()

let editando;

//Objeto con datos del PACIENTE 
const citaObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: ""
}

//Agrega input al citaObj
export function inputCita(e){
    
    citaObj[e.target.name] = e.target.value;
   // console.log(citaObj);
}


//Valida y agrega una nueva cita a class Cita
export function nuevaCita(e){
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

export function reiniciarObjetoGlobal(){ // No puedo traerme directamente citaObj a otro objeto. tengo que ir propiedad x propiedad
    citaObj.mascota = ""; // los blanqueo.
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = "";
}

export function eliminarCita(id){
    console.log(id);
    //Eliminar la cita
    citasHijo.eliminarNuevaCita(id);

    //Muestra un msj
    uiHijo.imprimirAlerta("La cita se eliminó correctamente");

    //Refrescas citas
    uiHijo.imprimirCitas(citasHijo);
}

//Carga los datos y el modo edicion

export function cargarEdicion(revisacion){
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



