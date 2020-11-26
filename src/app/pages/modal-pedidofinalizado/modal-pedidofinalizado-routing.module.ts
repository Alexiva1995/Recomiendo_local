import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPedidofinalizadoPage } from './modal-pedidofinalizado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPedidofinalizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPedidofinalizadoPageRoutingModule {}
