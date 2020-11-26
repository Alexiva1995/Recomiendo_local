import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRedPageRoutingModule } from './my-red-routing.module';

import { MyRedPage } from './my-red.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRedPageRoutingModule
  ],
  declarations: [MyRedPage]
})
export class MyRedPageModule {}
