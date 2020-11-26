import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalificarExperienciaPageRoutingModule } from './calificar-experiencia-routing.module';
import { CalificarExperienciaPage } from './calificar-experiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalificarExperienciaPageRoutingModule
  ],
  declarations: [CalificarExperienciaPage]
})
export class CalificarExperienciaPageModule {}
