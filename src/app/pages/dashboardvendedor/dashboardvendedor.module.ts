import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardvendedorPageRoutingModule } from "./dashboardvendedor-routing.module";

import { DashboardvendedorPage } from "./dashboardvendedor.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardvendedorPageRoutingModule,
  ],
  declarations: [DashboardvendedorPage],
})
export class DashboardvendedorPageModule {}
