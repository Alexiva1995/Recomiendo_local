import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomiendoProductosPage } from './recomiendo-productos.page';

const routes: Routes = [
  {
    path: '',
    component: RecomiendoProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomiendoProductosPageRoutingModule {}
