import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recomiendo-productos',
  templateUrl: './recomiendo-productos.page.html',
  styleUrls: ['./recomiendo-productos.page.scss'],
})
export class RecomiendoProductosPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  goTo(url) {
    this.navCtrl.navigateForward(url)
  }

}
