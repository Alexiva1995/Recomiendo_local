import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPedidoaceptadoPage } from './modal-pedidoaceptado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPedidoaceptadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPedidoaceptadoPageRoutingModule {}
