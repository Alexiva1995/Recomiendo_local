import { Component, Input, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { AwardsService } from "../../providers/awards/awards.service";
import { LocalService } from "../../providers/local/local.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-modal-qr-premios",
  templateUrl: "./modal-qr-premios.page.html",
  styleUrls: ["./modal-qr-premios.page.scss"],
})
export class ModalQrPremiosPage implements OnInit {
  @Input() award: any = [];
  local: any = [];
  myAngularxQrCode: any;
  constructor(
    private util: UtilitiesService,
    private service: AwardsService,
    private modalCtrl: ModalController,
    private local_service: LocalService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getCompany();
    this.myAngularxQrCode = "Rec-Award-" + this.award.id;
  }

  getCompany() {
    this.util.displayLoading();
    this.local_service.getLocalDataById(this.award.company_id).then(
      (res) => {
        this.local = res["company"];
        console.log("premios,", this.local);
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  clain() {
    this.util.displayLoading();
    let params = {
      product_id: this.award.id,
    };
    this.service.clainAward(params).then(
      (res) => {
        this.util.displayToast("Premio Pendiente por reclamar");
        this.util.dismissLoading();
        this.modalCtrl.dismiss();
      },
      (err) => {
        this.util.displayToast("Ocurrió un problema al reclamar su premio");
        this.util.dismissLoading();
      }
    );
  }

  go() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.local),
      },
    };
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }

  goback() {
    this.modalCtrl.dismiss();
  }
}
