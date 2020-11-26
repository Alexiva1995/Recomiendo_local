import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRecoverpasswordPage } from './modal-recoverpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRecoverpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRecoverpasswordPageRoutingModule {}
