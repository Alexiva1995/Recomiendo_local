import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisproductosvendedorPage } from './misproductosvendedor.page';

const routes: Routes = [
  {
    path: '',
    component: MisproductosvendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisproductosvendedorPageRoutingModule {}
