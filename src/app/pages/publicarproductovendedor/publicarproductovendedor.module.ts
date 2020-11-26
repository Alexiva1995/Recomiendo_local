import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarproductovendedorPageRoutingModule } from './publicarproductovendedor-routing.module';

import { PublicarproductovendedorPage } from './publicarproductovendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PublicarproductovendedorPageRoutingModule
  ],
  declarations: [PublicarproductovendedorPage]
})
export class PublicarproductovendedorPageModule {}
