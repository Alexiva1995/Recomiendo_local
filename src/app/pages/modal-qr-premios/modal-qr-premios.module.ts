import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalQrPremiosPageRoutingModule } from "./modal-qr-premios-routing.module";

import { ModalQrPremiosPage } from "./modal-qr-premios.page";
import { QRCodeModule } from "angularx-qrcode";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    QRCodeModule,
    ModalQrPremiosPageRoutingModule,
  ],
  declarations: [ModalQrPremiosPage],
})
export class ModalQrPremiosPageModule {}
