import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisproductosvendedorPageRoutingModule } from './misproductosvendedor-routing.module';

import { MisproductosvendedorPage } from './misproductosvendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisproductosvendedorPageRoutingModule
  ],
  declarations: [MisproductosvendedorPage]
})
export class MisproductosvendedorPageModule {}
