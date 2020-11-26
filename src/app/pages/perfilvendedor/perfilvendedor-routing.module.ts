import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilvendedorPage } from './perfilvendedor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilvendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilvendedorPageRoutingModule {}
