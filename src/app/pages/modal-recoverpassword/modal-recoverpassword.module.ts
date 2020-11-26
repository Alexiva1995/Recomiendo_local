import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRecoverpasswordPageRoutingModule } from './modal-recoverpassword-routing.module';

import { ModalRecoverpasswordPage } from './modal-recoverpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalRecoverpasswordPageRoutingModule
  ],
  declarations: [ModalRecoverpasswordPage]
})
export class ModalRecoverpasswordPageModule {}
