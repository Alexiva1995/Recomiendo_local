import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalpedidosDetailPage } from './modalpedidos-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModalpedidosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalpedidosDetailPageRoutingModule {}
