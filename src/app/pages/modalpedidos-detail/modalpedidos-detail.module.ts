import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpedidosDetailPageRoutingModule } from './modalpedidos-detail-routing.module';

import { ModalpedidosDetailPage } from './modalpedidos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpedidosDetailPageRoutingModule
  ],
  declarations: [ModalpedidosDetailPage]
})
export class ModalpedidosDetailPageModule {}
