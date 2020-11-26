import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendadosPage } from './recomendados.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendadosPageRoutingModule {}
