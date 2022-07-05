import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { EgresosComponent } from './pages/egresos/egresos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { IngresoServicio } from './pages/ingresos/ingreso.servicio';
import { EgresoServicio } from './pages/egresos/egreso.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresosComponent,
    EgresosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
