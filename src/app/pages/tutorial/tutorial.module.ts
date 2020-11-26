import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TutorialPage } from "./tutorial";
import { TutorialPageRoutingModule } from "./tutorial-routing.module";
import { QRCodeModule } from "angularx-qrcode";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TutorialPageRoutingModule,
    QRCodeModule,
    FormsModule,
  ],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
})
export class TutorialModule {}
