import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomiendoProductosPaso2Page } from './recomiendo-productos-paso2.page';

const routes: Routes = [
  {
    path: '',
    component: RecomiendoProductosPaso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomiendoProductosPaso2PageRoutingModule {}
