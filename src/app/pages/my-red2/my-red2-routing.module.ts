import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRed2Page } from './my-red2.page';

const routes: Routes = [
  {
    path: '',
    component: MyRed2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRed2PageRoutingModule {}
