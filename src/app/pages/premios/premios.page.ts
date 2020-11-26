import { ModalPremiosdetailsPage } from "./../modal-premiosdetails/modal-premiosdetails/modal-premiosdetails.page";
import { ModalController } from "@ionic/angular";
import { AwardsService } from "./../../providers/awards/awards.service";
import { Component, OnInit } from "@angular/core";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-premios",
  templateUrl: "./premios.page.html",
  styleUrls: ["./premios.page.scss"],
})
export class PremiosPage implements OnInit {
  awards: any;
  user: any = [];

  constructor(
    private awardsService: AwardsService,
    private util: UtilitiesService,
    private modalController: ModalController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.getAwards();
  }

  getAwards() {
    this.util.displayLoading();
    this.awardsService.getAwardsMostRecommended().then(
      (res) => {
        this.awards = res["Awards"];
        console.log("premios,", this.awards);
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  async openModal(award) {
    console.log("que recibe", award);
    const modal = await this.modalController.create({
      component: ModalPremiosdetailsPage, //Componente modal del premio
      cssClass: "productosdetalles-modal",
      componentProps: {
        award: award,
      },
    });
    console.log("parametro enviado",award)
    return await modal.present();
  }

  salir(){
    this.modalController.dismiss()
  }


}
