import { datosCita, nuevaCita } from '../funciones.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from './selectores.js'

class App { 

    constructor(){ 
            this.initApp(); 
        }

        initApp(){

            mascotaInput.addEventListener("input", inputCita);
            propietarioInput.addEventListener("input", inputCita);
            telefonoInput.addEventListener("input", inputCita);
            fechaInput.addEventListener("input", inputCita);
            horaInput.addEventListener("input", inputCita);
            sintomasInput.addEventListener("input", inputCita);

            //Formulario para nuevas citas
            formulario.addEventListener("submit", nuevaCita);

        }
}