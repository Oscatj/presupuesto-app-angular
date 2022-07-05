import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresosServicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresosServicio.egreso;
  }
  eliminarEgreso(egreso: Egreso){
      this.egresosServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso: Egreso){
      return egreso.valor/ this.ingresoTotal;
  }

}
