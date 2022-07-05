import { Ingreso } from "../ingresos/ingreso.model";

export class IngresoServicio {
    ingresos: Ingreso[] = [
        new Ingreso ('Salario', 40000),
        new Ingreso ('Venta Coche', 50000)
    ];
    eliminar(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}