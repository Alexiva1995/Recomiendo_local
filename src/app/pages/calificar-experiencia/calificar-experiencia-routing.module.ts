import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarExperienciaPage } from './calificar-experiencia.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarExperienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarExperienciaPageRoutingModule {}
