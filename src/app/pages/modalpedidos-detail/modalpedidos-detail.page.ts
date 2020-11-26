import { ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modalpedidos-detail",
  templateUrl: "./modalpedidos-detail.page.html",
  styleUrls: ["./modalpedidos-detail.page.scss"],
})
export class ModalpedidosDetailPage implements OnInit {
  @Input() pedidos: any = [];
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  salir() {
    this.modal.dismiss();
  }
}
