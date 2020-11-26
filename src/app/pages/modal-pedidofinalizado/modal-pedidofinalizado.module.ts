import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPedidofinalizadoPageRoutingModule } from './modal-pedidofinalizado-routing.module';

import { ModalPedidofinalizadoPage } from './modal-pedidofinalizado.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    ModalPedidofinalizadoPageRoutingModule
  ],
  declarations: [ModalPedidofinalizadoPage]
})
export class ModalPedidofinalizadoPageModule {}
