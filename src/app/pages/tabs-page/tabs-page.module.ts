import { BrowserModule } from "@angular/platform-browser";
import { AppModule } from "./../../app.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs-page";
import { TabsPageRoutingModule } from "./tabs-page-routing.module";

import { DashboardvendedorPageModule } from "../dashboardvendedor/dashboardvendedor.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
    DashboardvendedorPageModule,
  ],
  declarations: [TabsPage],
})
export class TabsModule {}
