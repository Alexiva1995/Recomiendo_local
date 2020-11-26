import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPremiosdetailsPage } from './modal-premiosdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPremiosdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPremiosdetailsPageRoutingModule {}
