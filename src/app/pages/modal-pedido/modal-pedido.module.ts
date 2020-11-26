import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPedidoPageRoutingModule } from "./modal-pedido-routing.module";

import { ModalPedidoPage } from "./modal-pedido.page";

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ModalPedidoPageRoutingModule,
    CommonModule,
  ],
  declarations: [ModalPedidoPage],
})
export class ModalPedidoPageModule {}
