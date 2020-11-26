import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRecommendedPageRoutingModule } from './modal-recommended-routing.module';

import { ModalRecommendedPage } from './modal-recommended.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRecommendedPageRoutingModule
  ],
  declarations: [ModalRecommendedPage]
})
export class ModalRecommendedPageModule {}
