import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecomiendoProductosPaso2PageRoutingModule } from "./recomiendo-productos-paso2-routing.module";

import { RecomiendoProductosPaso2Page } from "./recomiendo-productos-paso2.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomiendoProductosPaso2PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecomiendoProductosPaso2Page],
})
export class RecomiendoProductosPaso2PageModule {}
