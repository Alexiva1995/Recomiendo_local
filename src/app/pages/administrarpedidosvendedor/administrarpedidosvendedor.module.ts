import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarpedidosvendedorPageRoutingModule } from './administrarpedidosvendedor-routing.module';

import { AdministrarpedidosvendedorPage } from './administrarpedidosvendedor.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    AdministrarpedidosvendedorPageRoutingModule
  ],
  declarations: [AdministrarpedidosvendedorPage]
})
export class AdministrarpedidosvendedorPageModule {}
