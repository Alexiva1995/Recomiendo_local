import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomiendoProductosPaso4Page } from './recomiendo-productos-paso4.page';

const routes: Routes = [
  {
    path: '',
    component: RecomiendoProductosPaso4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomiendoProductosPaso4PageRoutingModule {}
