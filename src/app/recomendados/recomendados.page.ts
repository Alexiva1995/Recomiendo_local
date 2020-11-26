import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, IonSlides, NavController } from "@ionic/angular";
import { ModalProductdetailsPage } from "../pages/modal-productdetails/modal-productdetails.page";
import { LocalService } from "../providers/local/local.service";
import { ProductsService } from "../providers/products/products.service";
import { UtilitiesService } from "../providers/utilities/utilities.service";
@Component({
  selector: "app-recomendados",
  templateUrl: "./recomendados.page.html",
  styleUrls: ["./recomendados.page.scss"],
})
export class RecomendadosPage implements OnInit {
  @Input() product: any = [];
  category: any = [];
  local: any = [];
  avatar: any = [];

  categoryrandom1: any = [];
  categoryrandom2: any = [];

  @ViewChild("slide2", { static: true }) slides2: IonSlides;
  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 0,
  };
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 0,
  };
  results: any = [];
  products: any = [];
  searchTerms: any = "";

  constructor(
    public modalController: ModalController,
    private util: UtilitiesService,
    private service: ProductsService
  ) {
    this.results = this.product;
  }

  ngOnInit() {
    console.log(this.product);
    console.log(this.product.filter((alimento) => alimento.name == "pizza"));
    this.getCategory();
  }

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

  salir() {
    this.modalController.dismiss();
  }

  async modalproductosdetalles(product) {
    const modal = await this.modalController.create({
      component: ModalProductdetailsPage,
      cssClass: "productosdetalles-modal",
      componentProps: {
        product: product,
      },
    });
    return await modal.present();
  }

  getCategory() {
    this.util.displayLoading();
    this.service.getMyCategory().then(
      (res) => {
        this.category = res["subcategories"];
        console.log("categoria,", res["subcategories"]);
        this.util.dismissLoading();
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  filter() {}
  getActive() {}
}
