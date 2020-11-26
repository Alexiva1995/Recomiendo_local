import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalQrPremiosPage } from './modal-qr-premios.page';

const routes: Routes = [
  {
    path: '',
    component: ModalQrPremiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalQrPremiosPageRoutingModule {}
