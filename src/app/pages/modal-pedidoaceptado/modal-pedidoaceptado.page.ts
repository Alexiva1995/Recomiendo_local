import { NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { ProductsService } from "../../providers/products/products.service";

@Component({
  selector: "app-modal-pedidoaceptado",
  templateUrl: "./modal-pedidoaceptado.page.html",
  styleUrls: ["./modal-pedidoaceptado.page.scss"],
})
export class ModalPedidoaceptadoPage implements OnInit {
  @Input() viewproduct:any = [];
  products: any = [];
  local: any = [];
  lastOrder: any = [];
  public myAngularxQrCode: string = null;
  user: any;
  qrcodechild: any;
  @ViewChild("qrElement") qrElement: ElementRef;
  constructor(
    private service: ProductsService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.myAngularxQrCode = "Rec-" + this.user.id;
    this.products = this.service.pedidos;
    this.local = this.service.localSelected;
    this.lastOrder = this.service.lastOrder;
  }
  goBack() {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: JSON.stringify(this.local),
    //   },
    // };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/app/tabs/order");
  }

  ngOnInit() {
    console.log(this.viewproduct)
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
