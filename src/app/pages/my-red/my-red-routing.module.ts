import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRedPage } from './my-red.page';

const routes: Routes = [
  {
    path: '',
    component: MyRedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRedPageRoutingModule {}
