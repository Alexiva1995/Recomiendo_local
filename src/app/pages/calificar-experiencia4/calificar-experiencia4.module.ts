import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia4PageRoutingModule } from './calificar-experiencia4-routing.module';

import { CalificarExperiencia4Page } from './calificar-experiencia4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarExperiencia4PageRoutingModule
  ],
  declarations: [CalificarExperiencia4Page]
})
export class CalificarExperiencia4PageModule {}
