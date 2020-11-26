import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalProductdetailsPage } from './modal-productdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProductdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalProductdetailsPageRoutingModule {}
