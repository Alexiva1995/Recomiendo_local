import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InvitationsPageRoutingModule } from "./invitations-routing.module";

import { InvitationsPage } from "./invitations.page";
import { QRCodeModule } from "angularx-qrcode";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    IonicModule,
    InvitationsPageRoutingModule,
  ],
  declarations: [InvitationsPage],
  entryComponents: [InvitationsPage],
})
export class InvitationsPageModule {}
