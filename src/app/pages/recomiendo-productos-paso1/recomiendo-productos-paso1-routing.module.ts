import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomiendoProductosPaso1Page } from './recomiendo-productos-paso1.page';

const routes: Routes = [
  {
    path: '',
    component: RecomiendoProductosPaso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomiendoProductosPaso1PageRoutingModule {}
