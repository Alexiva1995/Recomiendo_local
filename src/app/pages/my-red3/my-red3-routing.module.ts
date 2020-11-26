import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRed3Page } from './my-red3.page';

const routes: Routes = [
  {
    path: '',
    component: MyRed3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRed3PageRoutingModule {}
