import { OrdersService } from "./../../providers/orders/orders.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { ModalPedidofinalizadoPage } from '../modal-pedidofinalizado/modal-pedidofinalizado.page';

@Component({
  selector: "app-mispedidos",
  templateUrl: "./mispedidos.page.html",
  styleUrls: ["./mispedidos.page.scss"],
})
export class MispedidosPage implements OnInit {
  segment: string = "friends";
  awards: any;
  user: any = [];
  ordersReady: any = [];
  ordersPending: any = [];

  constructor(
    private service: OrdersService,
    private util: UtilitiesService,
    private modalController: ModalController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    // this.getOrders();
    // this.getOrdersReady();
  }

  ionViewDidEnter(){
    // this.getOrders();
    // this.getOrdersReady();
  }

  getOrders() {
    /* Metodo que trae pedidos pendientes y en proceso 0 son pendientes y 1 en proceso */
    // this.util.displayLoading();
    // this.service.getOrders().then(
    //   (res) => {
    //     this.ordersPending = res["order"];
    //     console.log("Pendientes,", res);
    //     this.util.dismissLoading();
    //   },
    //   (err) => {
    //     this.util.dismissLoading();
    //   }
    // );
  }

  getOrdersReady() {
    /* Metodo que trae pedidos listos */

    this.service.getOrdersReady().then(
      (res) => {
        this.ordersReady = res["order"];
        console.log("Finalizados,", res);
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  async finalizado(item){
    const modal = await this.modalController.create({
      component: ModalPedidofinalizadoPage, //Componente modal del premio
      cssClass: "modal-pedidoaceptado",
      componentProps: {
        viewproduct: item,
      },
    });

    return await modal.present();
  }




}
