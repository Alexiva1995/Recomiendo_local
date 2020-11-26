import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarExperiencia4Page } from './calificar-experiencia4.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarExperiencia4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarExperiencia4PageRoutingModule {}
