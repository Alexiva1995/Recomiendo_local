import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLocalinfoPage } from './modal-localinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLocalinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLocalinfoPageRoutingModule {}
