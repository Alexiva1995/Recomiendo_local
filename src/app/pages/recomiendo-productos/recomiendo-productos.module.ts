import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPageRoutingModule } from './recomiendo-productos-routing.module';

import { RecomiendoProductosPage } from './recomiendo-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomiendoProductosPageRoutingModule
  ],
  declarations: [RecomiendoProductosPage]
})
export class RecomiendoProductosPageModule {}
