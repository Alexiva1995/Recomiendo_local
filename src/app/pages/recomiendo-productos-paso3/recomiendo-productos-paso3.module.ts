import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecomiendoProductosPaso3PageRoutingModule } from "./recomiendo-productos-paso3-routing.module";

import { RecomiendoProductosPaso3Page } from "./recomiendo-productos-paso3.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomiendoProductosPaso3PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecomiendoProductosPaso3Page],
})
export class RecomiendoProductosPaso3PageModule {}
