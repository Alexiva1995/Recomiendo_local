import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MenuController, IonSlides } from "@ionic/angular";

import { Storage } from "@ionic/storage";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { AuthService } from "../../providers/auth/auth.service";
import { CONSTANTES } from "../../providers/constantes";
// import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ReferredService } from "../../providers/referred/referred.service";
@Component({
  selector: "page-tutorial",
  templateUrl: "tutorial.html",
  styleUrls: ["./tutorial.scss"],
})
export class TutorialPage {
  showSkip = true;
  showQR = false;
  data: boolean;
  data2: boolean;
  idRefered: string;
  @ViewChild("slides", { static: true }) slides: IonSlides;
  option_: boolean = false;
  option: any;
  user: any = [];
  public myAngularxQrCode: string = null;
  firstTime: any = false;
  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private utilities: UtilitiesService,
    private auth: AuthService,
    private barcodeScanner: BarcodeScanner,
    private service: ReferredService
  ) {
    this.myAngularxQrCode = "prueba";
    this.storage.get("ion_did_tutorial").then((res) => {
      this.firstTime = res;
      console.log(res);
    });
  }

  startApp() {
    // if (this.idRefered) {
    //   this.sendReferred(this.idRefered);
    // }
    this.router.navigateByUrl("/app/tabs/home")
  }

  // change() {
  //   if (this.option_) {
  //     this.slides.lockSwipes(false);
  //     this.option = false;
  //     console.log(this.option);
  //   }
  // }
  onSlideChangeStart(event) {
    // event.target.isEnd().then((isEnd) => {
    //   this.showSkip = !isEnd;
    // });
  }


  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.slides.lockSwipes(true);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  adelante() {
    console.log(this.idRefered);

    if (this.idRefered) {
      this.sendReferred(this.idRefered);
    }
    this.slides.lockSwipes(false);
    this.slides.slideNext();
  }

  adelante2() {
    this.slides.slideNext();
  }

  qrScan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log("Barcode data", barcodeData);
        this.idRefered = barcodeData.text;
        this.sendReferred(barcodeData.text);
      })
      .catch((err) => {
        console.log("Error", JSON.stringify(err));
      });
  }

  atras() {
    this.slides.slidePrev();
  }

  optionUser(check) {
    console.log(this.data);
  }

  async sendReferred(id) {
    let sponsorId = {
      sponsor_id: id.replace("Rec-", ""),
    };
    this.utilities.displayLoading();
    this.service.sendRefered(sponsorId).then(
      (resp) => {
        console.log(resp);
        this.utilities.dismissLoading();
        this.utilities.displayToast("Codigo aceptado");
      },
      (err) => {
        this.utilities.dismissLoading();
      }
    );
  }
}
