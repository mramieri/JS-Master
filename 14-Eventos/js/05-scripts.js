//112. Eventos al dar scroll con el mouse

//cuando scroleo, hay eventos en una pagina

window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;

    // console.log(scrollPX);


       
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //--> me dice en qué lugar está el elemento. asi lo puedo detectar

       //console.log(ubicacion);

        if(ubicacion.top<100) {
            console.log('El elemento ya está visible');
        } else {
            console.log('Aun no, da masa scroll')
        }
})