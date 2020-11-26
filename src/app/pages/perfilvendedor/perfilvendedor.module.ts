import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilvendedorPageRoutingModule } from './perfilvendedor-routing.module';

import { PerfilvendedorPage } from './perfilvendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PerfilvendedorPageRoutingModule
  ],
  declarations: [PerfilvendedorPage]
})
export class PerfilvendedorPageModule {}
