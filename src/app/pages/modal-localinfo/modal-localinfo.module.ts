import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLocalinfoPageRoutingModule } from './modal-localinfo-routing.module';

import { ModalLocalinfoPage } from './modal-localinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLocalinfoPageRoutingModule
  ],
  declarations: [ModalLocalinfoPage]
})
export class ModalLocalinfoPageModule {}
