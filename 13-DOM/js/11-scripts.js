//107. Un Ejemplo más avanzado de lo que podemos hacer con JS
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//EVENTOS: le doy click al boton. el boton de "idioma y moneda" va a esperar a que suceda algo en la pantalla, y una vez que suceda va a reaccionar
//la forma en la que le digo 'por qué tiene que esperar' se conoce como eventos

// ejemplo al boton btnFlotante, lo clickeo y se ejecutará un codigo con addEventListener. es un aviso al boton flotante de que este atento, xq si alguien 
//le da click, tendrá que hacer algo


//puede ir con funcion declarada o anónima (no tiene nombre pero ejecuta esta funcion que declaro)
//btnFlotante.addEventListener('click', () => {
  //  console.log('Diste click en el boton')
//}); 
//Ese codigo está bien, pero tmb puedo crear una funcion (y tenerlo como separado)


btnFlotante.addEventListener('click', mostrarOcultarFooter); //los parentesis aca no son necesarios,    

 function mostrarOcultarFooter() {       
    
    if (footer.classList.contains('activo')) {  //si una clase existe o no en el HTML? con el .contains
        (footer.classList.remove('activo'));
        this.classList.remove('activo')
        this.textContent = 'Idioma y Moneda'
    }
        else {
            footer.classList.add('activo');
            this.classList.add('activo');
            this.textContent = "X Cerrar";
        }
    
    console.log(footer.classList);
 } //asi es como le agrego/quito una clase de forma condicional     


//lo que mueve ese footer de arriba hacia abajo es una clase, de CSS
 //console.log('Diste click en el botón')


