import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardvendedorPage } from './dashboardvendedor.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardvendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardvendedorPageRoutingModule {}
