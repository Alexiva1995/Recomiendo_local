import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecomiendoProductosPaso4PageRoutingModule } from "./recomiendo-productos-paso4-routing.module";

import { RecomiendoProductosPaso4Page } from "./recomiendo-productos-paso4.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomiendoProductosPaso4PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecomiendoProductosPaso4Page],
})
export class RecomiendoProductosPaso4PageModule {}
