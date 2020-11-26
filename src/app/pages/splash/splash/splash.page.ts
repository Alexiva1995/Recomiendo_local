import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  constructor(
    public modalCtrl: ModalController,
    private splashScreen: SplashScreen
  ) {}

  ionViewDidEnter() {
    this.splashScreen.hide();

    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 2000);
  }
  ngOnInit() {}
}
