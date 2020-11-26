import { ModalPedidoaceptadoPage } from "./../modal-pedidoaceptado/modal-pedidoaceptado.page";
import { UtilitiesService } from "./../../providers/utilities/utilities.service";
import { ProductsService } from "./../../providers/products/products.service";
import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "app-modal-pedido",
  templateUrl: "./modal-pedido.page.html",
  styleUrls: ["./modal-pedido.page.scss"],
})
export class ModalPedidoPage implements OnInit {
  @Input() listProducts: any = [];
  @Input() local: any = [];
  constructor(
    public modalController: ModalController,
    private service: ProductsService,
    private util: UtilitiesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    console.log(this.listProducts);
  }

  clear() {
    this.listProducts = [];
  }

  calculatedTotal() {
    let total = 0;
    this.listProducts.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total;
  }

  add(index) {
    this.listProducts[index].quantity++;
  }

  remove(index) {
    this.listProducts[index].quantity--;
  }

  salir() {
    this.modalController.dismiss({ list: this.listProducts });
  }

  purchase() {
    this.util.displayLoading();
    let params = {};
    params["company_id"] = this.local.id;
    params["total"] = this.calculatedTotal();
    params["observation"] = this.calculatedTotal();
    params["details"] = [];
    this.listProducts.forEach((element) => {
      let data = [element["id"], element["quantity"]];
      params["details"].push(data);
    });
    this.service.purchaseProducts(params, this.listProducts, this.local).then(
      async (res) => {
        this.util.dismissLoading();
        this.modalController.dismiss();
        this.listProducts = [];
        const modal = await this.modalController.create({
          component: ModalPedidoaceptadoPage,
          cssClass: "modal-pedidoaceptado",
        });
        return await modal.present();
        //this.salir();
      },
      (err) => {
        this.util.displayToast("Ocurrió un problema al procesar su pedido");
        this.util.dismissLoading();
      }
    );
  }
}
