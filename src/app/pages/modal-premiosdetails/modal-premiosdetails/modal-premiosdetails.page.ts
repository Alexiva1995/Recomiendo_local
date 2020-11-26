import { LocalService } from "./../../../providers/local/local.service";
import { ModalController, NavController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { AwardsService } from "../../../providers/awards/awards.service";
import { UtilitiesService } from "../../../providers/utilities/utilities.service";
import { NavigationExtras } from "@angular/router";
import { AuthService } from '../../../providers/auth/auth.service';

@Component({
  selector: "app-modal-premiosdetails",
  templateUrl: "./modal-premiosdetails.page.html",
  styleUrls: ["./modal-premiosdetails.page.scss"],
})
export class ModalPremiosdetailsPage implements OnInit {
  @Input() award: any = [];
  local: any = [];
  constructor(
    private util: UtilitiesService,
    private service: AwardsService,
    private modalCtrl: ModalController,
    private local_service: LocalService,
    public auth: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getCompany();
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
        this.getUser();
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


  //Metodo para obtener la informacion del usuario actualizado
  async getUser() {
    // Iniciamos la consulta
    await this.auth.getUser().then(
      (res) => {
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res));
      },
      (err) => {
        //En caso de error
        console.log("getError", err);
      }
    );
  }

}
