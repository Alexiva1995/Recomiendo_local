import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPedidovacioPage } from './modal-pedidovacio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPedidovacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPedidovacioPageRoutingModule {}
