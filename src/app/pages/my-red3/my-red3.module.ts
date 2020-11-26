import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRed3PageRoutingModule } from './my-red3-routing.module';

import { MyRed3Page } from './my-red3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRed3PageRoutingModule
  ],
  declarations: [MyRed3Page]
})
export class MyRed3PageModule {}
