import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPedidovacioPageRoutingModule } from './modal-pedidovacio-routing.module';

import { ModalPedidovacioPage } from './modal-pedidovacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPedidovacioPageRoutingModule
  ],
  declarations: [ModalPedidovacioPage]
})
export class ModalPedidovacioPageModule {}
