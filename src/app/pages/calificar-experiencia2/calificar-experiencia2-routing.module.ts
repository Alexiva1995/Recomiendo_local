import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarExperiencia2Page } from './calificar-experiencia2.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarExperiencia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarExperiencia2PageRoutingModule {}
