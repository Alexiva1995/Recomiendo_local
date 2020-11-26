import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPremiosdetailsPageRoutingModule } from "./modal-premiosdetails-routing.module";

import { ModalPremiosdetailsPage } from "./modal-premiosdetails.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPremiosdetailsPageRoutingModule,
  ],
  declarations: [ModalPremiosdetailsPage],
})
export class ModalPremiosdetailsPageModule {}
