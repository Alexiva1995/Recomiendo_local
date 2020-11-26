import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { AwardsService } from "../../providers/awards/awards.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { ModalQrPremiosPage } from "../modal-qr-premios/modal-qr-premios.page";
@Component({
  selector: "app-prizes",
  templateUrl: "./prizes.page.html",
  styleUrls: ["./prizes.page.scss"],
})
export class PrizesPage implements OnInit {
  awards: any;
  segment: any = "friends";
  public myAngularxQrCode: string = null;
  searchAwards: any = [];
  searchTerm: any = "";
  constructor(
    private util: UtilitiesService,
    private service: AwardsService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // this.getWaitingAwards();
  }

  ionViewDidEnter() {
    this.getWaitingAwards();
  }

  getWaitingAwards() {
    this.util.displayLoading();
    this.service.getAwardsInWaiting().then(
      (res) => {
        this.awards = res["Awards"];
        console.log("premios,", this.awards);
        this.searchAwards = this.awards;
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  search() {
    this.searchAwards = this.filterItems();
  }

  filterItems() {
    return this.awards.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
      );
    });
  }

  async openModal(award) {
    console.log("que recibe", award);
    const modal = await this.modalController.create({
      component: ModalQrPremiosPage, //Componente modal del premio
      cssClass: "productosdetalles-modal",
      componentProps: {
        award: award,
      },
    });

    modal.onDidDismiss().then((_) => {
      this.getWaitingAwards();
    });
    return await modal.present();
  }
}
