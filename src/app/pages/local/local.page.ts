import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, ModalController, NavController } from "@ionic/angular";
import { ModalPedidoPage } from "../modal-pedido/modal-pedido.page";
import { ModalLocalinfoPage } from "../modal-localinfo/modal-localinfo.page";
import { ActivatedRoute } from "@angular/router";
import { LocalService } from "../../providers/local/local.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-local",
  templateUrl: "./local.page.html",
  styleUrls: ["./local.page.scss"],
})
export class LocalPage implements OnInit {
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -30,
  };
  local: any = [];
  listProducts: any = [];
  avatar: any = [];
  banner: any = [];
  products: any = [];
  searchTerms: string = "";
  results: any = [];

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private service: LocalService,
    private utilities: UtilitiesService
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.local = JSON.parse(params["data"]);
      if (params["product"]) {
        let p = JSON.parse(params["product"]);
        p["photos"] = [];
        p["photos"][0] = p.photo;
        this.add(p);
      }
      this.getLocal();
    });
  }

  ngOnInit() {}

  ionViewCanEnter() {}

  search() {
    this.results = this.filterItems();
    console.log(this.results);
  }

  filterItems() {
    return this.products.filter((item) => {
      console.log(item);
      return (
        item.name.toLowerCase().indexOf(this.searchTerms.toLowerCase()) > -1
      );
    });
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ModalPedidoPage,
      cssClass: "pedido-modal",
      componentProps: {
        listProducts: this.listProducts,
        local: this.local,
      },
    });
    modal.present();
    modal.onDidDismiss().then((param) => {
      console.log(param.data);
      if (param.data) {
        this.listProducts = param.data["list"];
      }
    });
  }

  async modallocal() {
    const modal = await this.modalController.create({
      component: ModalLocalinfoPage,
      cssClass: "localinfo-modal",
      componentProps: {
        local: this.local,
      },
    });
    modal.present();
  }

  atras() {
    this.navCtrl.back();
  }

  getLocal() {
    this.service.getLocalDataById(this.local.id || 8).then(
      (resp) => {
        console.log(resp);
        this.local = resp["company"];
        this.local["products"] = resp["Subcategory/products"];
        this.avatar = this.local.photo_company[0];
        this.banner = this.local.photo_company[1];
        this.products = this.local.products;
        console.log(this.products);
        this.utilities.dismissLoading();
      },
      (err) => {
        this.utilities.dismissLoading();
      }
    );
  }

  add(product) {
    if (
      this.listProducts.filter((products) => products.id === product.id)
        .length > 0
    ) {
      let index = this.listProducts
        .map((producto) => producto.id)
        .indexOf(product.id);
      this.listProducts.splice(index, 1);
    } else {
      product["quantity"] = product["quantity"] || 1;
      this.listProducts = this.listProducts.concat(product);
    }
    console.log("Productos Agregados", this.listProducts);
  }

  checkItems(item) {
    return this.listProducts.map((producto) => producto.id).indexOf(item.id);
  }

  calculatedTotal() {
    let total = 0;
    this.listProducts.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total;
  }
}
