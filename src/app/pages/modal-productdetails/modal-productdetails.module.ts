import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalProductdetailsPageRoutingModule } from "./modal-productdetails-routing.module";

import { ModalProductdetailsPage } from "./modal-productdetails.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProductdetailsPageRoutingModule,
  ],
  declarations: [ModalProductdetailsPage],
})
export class ModalProductdetailsPageModule {}
