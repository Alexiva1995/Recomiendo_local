import { NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { ProductsService } from "../../providers/products/products.service";
import { LocalService } from "../../providers/local/local.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-modal-pedidofinalizado",
  templateUrl: "./modal-pedidofinalizado.page.html",
  styleUrls: ["./modal-pedidofinalizado.page.scss"],
})
export class ModalPedidofinalizadoPage implements OnInit {
  @Input() viewproduct: any = [];
  products: any = [];
  local: any = [];
  lastOrder: any = [];
  buy: any = [];
  public myAngularxQrCode: string = null;
  user: any;
  qrcodechild: any;
  avatar: any;
  @ViewChild("qrElement") qrElement: ElementRef;
  constructor(
    private service: ProductsService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private servicelocal: LocalService,
    private utilities: UtilitiesService
  ) {}
  goBack() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    console.log(this.viewproduct);
    this.products = this.viewproduct.purchase_details[0].product;
    this.buy = this.viewproduct.purchase_details[0];
    this.local = this.viewproduct.company;
    console.log(this.products);
    this.myAngularxQrCode = "Rec-" + this.viewproduct.user_id;
    this.lastOrder = this.buy.purchase_id;
    console.log(this.myAngularxQrCode);
  }

  async modallocal() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.local),
      },
    };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }
}
