import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DasboardPageRoutingModule } from "./dasboard-routing.module";

import { DasboardPage } from "./dasboard.page";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule, IonicModule, DasboardPageRoutingModule, FormsModule],
  declarations: [DasboardPage],
})
export class DasboardPageModule {}
