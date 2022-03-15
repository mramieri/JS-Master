//El Operador & revisa que se cumplan 2 condiciones dentro de mi if. ambas ssi o si.
//con el ! es una manera de negar
const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log(`Si puedes comprar`)
}   else if(!puedePagar && !usuario) {
    console.log(`No, no puedes comprar`)}     
   else if(!usuario) {
     console.log('Inicia sesion o saca una cuenta');
}   else if(!puedePagar) {
    console.log('Fondos insuficientes');
}   else if(!puedePagar && !usuario) {
     console.log(`No, no puedes comprar`)
} 

//el orden es re importante cuando trabajo con condiciones