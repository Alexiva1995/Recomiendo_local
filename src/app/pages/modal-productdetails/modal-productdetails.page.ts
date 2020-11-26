import { LocalPage } from "./../local/local.page";
import { LocalService } from "./../../providers/local/local.service";
import { Component, Input, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { NavigationExtras } from "@angular/router";

@Component({
  selector: "app-modal-productdetails",
  templateUrl: "./modal-productdetails.page.html",
  styleUrls: ["./modal-productdetails.page.scss"],
})
export class ModalProductdetailsPage implements OnInit {
  @Input() product: any = [];
  local: any = [];
  avatar: any = [];
  img:any;
  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private service: LocalService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    console.log(this.product)
    if(this.product.photo == null){
      this.img =`https://valdusoft.com/recomiendo/product/image/${this.product.id}.jpg`
    }else{
    this.img = `https://valdusoft.com/recomiendo/product/image/${this.product.photo.name}`
    }
  }

  ionViewWillEnter() {
    this.getLocalData();
  }

  getLocalData() {
    this.utilities.displayLoading();
    this.service.getLocalDataById(this.product.company_id || 8).then(
      (resp) => {
        
        console.log(resp);
        this.local = resp["company"];
        console.log(this.local);
        if(this.local.photo_company.length < 1 ){
          this.avatar = "https://via.placeholder.com/123"
        }else{
          this.avatar =  this.local.photo_company[0].name
        }
        console.log(this.avatar);

        this.product.quantity = 0;
        this.utilities.dismissLoading();
      },
      (err) => {
        this.utilities.dismissLoading();
      }
    );
  }
  go() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.local),
      },
    };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }

  async modallocal() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.local),
        product: JSON.stringify(this.product),
      },
    };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }
  add() {
    this.product.quantity++;
  }
  remove() {
    this.product.quantity--;
  }



}
