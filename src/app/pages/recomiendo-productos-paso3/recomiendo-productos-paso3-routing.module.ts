import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomiendoProductosPaso3Page } from './recomiendo-productos-paso3.page';

const routes: Routes = [
  {
    path: '',
    component: RecomiendoProductosPaso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomiendoProductosPaso3PageRoutingModule {}
