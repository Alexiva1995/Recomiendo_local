import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia2PageRoutingModule } from './calificar-experiencia2-routing.module';

import { CalificarExperiencia2Page } from './calificar-experiencia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarExperiencia2PageRoutingModule
  ],
  declarations: [CalificarExperiencia2Page]
})
export class CalificarExperiencia2PageModule {}
