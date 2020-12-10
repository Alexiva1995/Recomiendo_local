import { OrdersService } from "./../../providers/orders/orders.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ReferredService } from "../../providers/referred/referred.service";
import { Clipboard } from "@ionic-native/clipboard/ngx";


@Component({
  selector: 'app-administrarpedidosvendedor',
  templateUrl: './administrarpedidosvendedor.page.html',
  styleUrls: ['./administrarpedidosvendedor.page.scss'],
})
export class AdministrarpedidosvendedorPage implements OnInit {
  segment: string = "friends";
  awards: any;
  user: any = [];
  ordersReady: any = [];
  ordersPending: any = [];
  idRefered: string;


  constructor(private service: OrdersService,
    private barcodeScanner: BarcodeScanner,
    private serviceRefe: ReferredService,
    private util: UtilitiesService,
    private clipboard: Clipboard,
    private modalController: ModalController) { 
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
  }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.getOrders();
    // this.getOrdersReady();
  }

  getOrders() {
    /* Metodo que trae pedidos pendientes y en proceso 0 son pendientes y 1 en proceso */
    this.util.displayLoading();
    // params
    // new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    // "2020/11/19"
    let params = {
      company_id : this.user.user.companies_owner.id,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    }

    this.service.getOrders(params).then(
      (res) => {
        this.ordersPending = res["Orders"];
        console.log("Pendientes,", res);
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }


  decision(id , value){
    this.util.displayLoading();

    let params = {
      order_id : id,
      status: value,
    }


    this.service.updateOrders(params).then(
      (res) => {
        console.log("que retorna,", res);
        this.util.dismissLoading();
        this.ionViewDidEnter()
      },
      (err) => {
        this.util.dismissLoading();
      }
    );

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

  Paste(){
    this.clipboard.paste().then(
      (resolve: string) => {
        this.idRefered = resolve;
       },
       (reject: string) => {
        console.log(reject)
       }
     );
  }

  async sendReferred(id) {
    let sponsorId = {
      sponsor_id: id.replace("Rec-", ""),
    };
    this.util.displayLoading();
    this.serviceRefe.sendRefered(sponsorId).then(
      (resp) => {
        console.log(resp);
        this.util.dismissLoading();
        this.util.displayToast("Codigo aceptado");
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }


}
