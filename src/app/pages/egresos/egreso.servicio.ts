import { Egreso } from "../egresos/egreso.model";

export class EgresoServicio {
    egreso: Egreso[] = [
        new Egreso ('Renta apartamento', 2000),
        new Egreso ('Ropa', 1000)
    ];
    eliminar(egreso: Egreso){
        const indice : number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice, 1); 
    }
}