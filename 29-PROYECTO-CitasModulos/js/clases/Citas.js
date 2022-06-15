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

export default Citas; //Simplemente le mando el default al final y listo
//Tmb se puede ponerle export default antes de classCitas