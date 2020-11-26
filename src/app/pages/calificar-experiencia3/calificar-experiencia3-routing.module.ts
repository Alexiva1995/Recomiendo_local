import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarExperiencia3Page } from './calificar-experiencia3.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarExperiencia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarExperiencia3PageRoutingModule {}
