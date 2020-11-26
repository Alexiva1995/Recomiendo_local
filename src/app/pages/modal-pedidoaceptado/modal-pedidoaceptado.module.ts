import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPedidoaceptadoPageRoutingModule } from "./modal-pedidoaceptado-routing.module";

import { ModalPedidoaceptadoPage } from "./modal-pedidoaceptado.page";
import { QRCodeModule } from "angularx-qrcode";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    ModalPedidoaceptadoPageRoutingModule,
  ],
  declarations: [ModalPedidoaceptadoPage],
})
export class ModalPedidoaceptadoPageModule {}
