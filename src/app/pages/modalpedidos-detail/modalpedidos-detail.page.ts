import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { OrdersService } from '../../providers/orders/orders.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: "app-modalpedidos-detail",
  templateUrl: "./modalpedidos-detail.page.html",
  styleUrls: ["./modalpedidos-detail.page.scss"],
})
export class ModalpedidosDetailPage implements OnInit {
  @Input() pedido: any = [];
  constructor(private modal: ModalController,private service: OrdersService,
    private util: UtilitiesService,
    ) {}

  ngOnInit() {
    console.log(this.pedido)
  }

  salir() {
    this.modal.dismiss();
  }





  rechazar(){
    this.util.displayLoading();

    let params = {
      order_id : this.pedido.purchase_details[0].purchase_id,
      status: 0,
    }


    this.service.updateOrders(params).then(
      (res) => {
        console.log("que retorna,", res);
        this.util.dismissLoading();
        this.salir()
      },
      (err) => {
        this.util.dismissLoading();
      }
    );

  }

  aceptar(){
    this.util.displayLoading();

    let params = {
      order_id : this.pedido.purchase_details[0].purchase_id,
      status: this.pedido.status == 0 ? 1 : 3,
    }

    console.log(params)

    this.service.updateOrders(params).then(
      (res) => {
        console.log("que retorna,", res);
        this.util.dismissLoading();
        this.salir()
      },
      (err) => {
        this.util.dismissLoading();
      }
    );

  }





}
