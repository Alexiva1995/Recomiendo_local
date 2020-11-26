import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecomiendoProductosPaso1PageRoutingModule } from "./recomiendo-productos-paso1-routing.module";

import { RecomiendoProductosPaso1Page } from "./recomiendo-productos-paso1.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomiendoProductosPaso1PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecomiendoProductosPaso1Page],
})
export class RecomiendoProductosPaso1PageModule {}
