//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){  

    /*
         incrementa su valor en
        1 Americano = 1.15 
        2 Asiatico = 1.05
        3 Europeo = 1.35  
    */
        //para que funcionen los incrementos:
        let cantidad; 
        const base = 2000;

        //Acá comenzamos a evaluar
        switch(this.marca) { 

            case "1": 
                    cantidad = base * 1.15;
                    break; 
            case "2": 
                    cantidad = base * 1.05;
                    break;
            case "3": 
                    cantidad = base * 1.35; 
                    break;

            default:
            break;
        }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.year; //esto me traerá la diferencia 

    //Cada año que la diferencia es mayor, el costo se reducirá un 3%  
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es basico, se multiplica x un 30% más
        Si el seguro es completo, se multiplica x un 50% más
     */
    
        if (this.tipo === "basico"){
                cantidad *= 1.30; //el valor que tenga, lo multiplicaré en un 30% mas
        } else {
            cantidad  *= 1.50; // y sino por un 50% mas
        }
    
        return cantidad; // entonces el prototype hara todos esos calculos y me retornará una cantidad
}


function UI(){}

//Llena las opciones de años:
UI.prototype.llenarOpciones = () => {  
    const max = new Date().getFullYear(),
         min = max - 20;

    const selectYear = document.querySelector("#year");

    for (let i = max; i > min; i--) {
       let option = document.createElement("option");
       option.value = i;
       option.textContent = i;
       selectYear.appendChild(option);
    }
}


//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {  
    
    const div = document.createElement("div");

    if(tipo ==="error"){
        div.classList.add("error");  

    } else {  
        div.classList.add("correcto") 
    }

        div.classList.add("mensaje", "mt-10")  
        div.textContent = mensaje;

        //Insertoo en el HTML
        const formulario =  document.querySelector("#cotizar-seguro");
        formulario.insertBefore(div, document.querySelector("#resultado")) 
        
        //Le pongo timer al cartelito

        setTimeout(() => {
            div.remove();
        }, 3000);
}

UI.prototype.mostrarResultado = (total, seguro) => {  

    const {marca, year, tipo} = seguro;

    switch(marca){
        case "1":
            textoMarca = "Americano"
            break;

        case "2":
            textoMarca = "Asiatico"
            break; 

        case "3":
            textoMarca = "Europeo"
            break;

        default:
            break;
    }

    //Crear resultado
    const div = document.createElement("div");
    div.classList.add("mt-10"); //este proyecto utiliza tailwind

    div.innerHTML = ` 

    <p class="header">Tu resumen </p>
    <p class="font-bold"> Marca: <span class= "font-normal"> ${textoMarca} </span></p>
    <p class="font-bold"> Año: <span class= "font-normal"> ${year} </span></p>
    <p class="font-bold"> Tipo: <span class= "font-normal capitalize"> ${tipo} </span></p>
    <p class="font-bold"> Total: <span class= "font-normal"> $ ${total} </span></p>
    
    `;
    const resultadoDiv = document.querySelector("#resultado");


    //Mostrar el spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none"; //se borra el spinner pero se muestra el resultado
        resultadoDiv.appendChild(div);
    }, 3000);

}


//Instanciar UI
const ui2 = new UI();  
 console.log(ui2)

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    ui2.llenarOpciones();  
});

eventListeners();
function eventListeners(){
    const formulario =  document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

        //Leer la marca seleccionada
        const marca = document.querySelector("#marca").value;
 

        //Leer el año  seleccionado
        const year = document.querySelector("#year").value;


        //Leer el tipo de cobertura
        const tipo = document.querySelector("input[name='tipo']:checked").value;
        
        if(marca === "" || year === "" || tipo ===""){
            ui2.mostrarMensaje("Todos los campos son obligatorios", "error");  
            return ;  
        } 

        ui2.mostrarMensaje("Cotizando...", "exito"); 

        //Ocultar las cotizaciones previas
        const resultados = document.querySelector("#resultado div"); 
        if(resultados != null){
            resultados.remove();
        }
        
        //Instanciar el seguro
        const seguro2 = new Seguro(marca, year, tipo);  
        
      const total = seguro2.cotizarSeguro();  

        //Utilizar el prototype que cotizará
        UI.prototype.mostrarResultado(total, seguro2);  
}   