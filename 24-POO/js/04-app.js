class Cliente {

    #nombre;

   setNombre(nombre){
        this.#nombre = nombre;
   }

   getNombre(){
       return this.#nombre;
   } //estos 2 si fduncionaran xq estan dentro de la clase
}

const maru = new Cliente(); // instancio cliente
maru.setNombre("Marulita");
console.log(maru.getNombre()); 

//funcioan xq estoy tratando de acceder a la prop privada desde la clase.
//si trato de acceder desde el objeto, no me dejara

//console.log(maru.#nombre); // no me dejara