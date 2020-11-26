import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia3PageRoutingModule } from './calificar-experiencia3-routing.module';

import { CalificarExperiencia3Page } from './calificar-experiencia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarExperiencia3PageRoutingModule
  ],
  declarations: [CalificarExperiencia3Page]
})
export class CalificarExperiencia3PageModule {}
