import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecomendadosPageRoutingModule } from "./recomendados-routing.module";

import { RecomendadosPage } from "./recomendados.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendadosPageRoutingModule,
  ],
  declarations: [RecomendadosPage],
})
export class RecomendadosPageModule {}
