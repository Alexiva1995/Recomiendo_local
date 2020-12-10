import { ModalpedidosDetailPage } from "./../modalpedidos-detail/modalpedidos-detail.page";
import { ModalPedidofinalizadoPage } from "./../modal-pedidofinalizado/modal-pedidofinalizado.page";
import { ProductsService } from "./../../providers/products/products.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, ModalController, NavController } from "@ionic/angular";
import { OrdersService } from '../../providers/orders/orders.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: "app-dashboardvendedor",
  templateUrl: "./dashboardvendedor.page.html",
  styleUrls: ["./dashboardvendedor.page.scss"],
})
export class DashboardvendedorPage implements OnInit {
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };
  myProducts: any = [];
  pedidos: any = [];
  procesado: any = []
  user: any[];
  option: string = "friends";

  constructor(
    private service: ProductsService,
    private servicePedido: OrdersService,
    private modal: ModalController,
    private navCtrl: NavController,
    private utilities: UtilitiesService,
    private route: NavController,
  ) {}

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getMyProducts();
    this.getPedidos();
  }

  getMyProducts() {
    this.service.getMyProducts(this.getUser().user).then(
      (res) => {
        this.myProducts = res["myproducts"];
        // console.log(this.myProducts)
      },
      (err) => {}
    );
  }

  goTo(url) {
    this.navCtrl.navigateForward(url);
  }

  getUser() {
    this.user = [];
    // console.log(JSON.parse(localStorage.getItem("user")))
    return JSON.parse(localStorage.getItem("user"));
  }

  getPedidos() {
    // new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    // "2020/11/19"
    let params = {
      company_id : this.getUser().user.companies_owner.id,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    }
    this.utilities.displayLoading();
    this.servicePedido.getOrders(params).then(
      (res) => {
        console.log(res)
        const pedido = res["Orders"];
        this.pedidos = pedido.filter(resp=>resp.status === 0) //0
        this.procesado = pedido.filter(resp=>resp.status === 2) 
        this.utilities.dismissLoading()
        console.log("valores retornado",this.pedidos)
        console.log("valores retornado",this.procesado)
      },
      (err) => {}
    );
  }

  segmentChanged(ev: any) {
    this.option = ev.detail.value;
    console.log("Segment changed", ev);
  }

  async openModal(pedido) {
    const modal = await this.modal.create({
      component: ModalpedidosDetailPage,
      cssClass: "pedido-detail-modal",
      componentProps: {
        pedido: pedido,
      },
    });
    return await modal.present();
  }

  go(url){
    this.route.navigateRoot([url]);
  }

}
