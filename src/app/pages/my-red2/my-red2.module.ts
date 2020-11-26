import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRed2PageRoutingModule } from './my-red2-routing.module';

import { MyRed2Page } from './my-red2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRed2PageRoutingModule
  ],
  declarations: [MyRed2Page]
})
export class MyRed2PageModule {}
