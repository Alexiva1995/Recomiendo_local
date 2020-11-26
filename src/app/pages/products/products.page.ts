import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../providers/products/products.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { ModalProductdetailsPage } from "../modal-productdetails/modal-productdetails.page";
@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  segment = "friends";
  MyProductsRecommended = [];
  ProductsRecommendedByFriends = [];
  searchResult: any[];
  searchResultProductsRecommended: any[];
  searchTerm: any;
  searchResultMyProductsRecommended: any[];
  constructor(
    private service: ProductsService,
    private utilities: UtilitiesService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // this.getProductsRecommendedByFriends();
    // this.getMyProductsRecommended();
  }

  ionViewDidEnter() {
    this.getProductsRecommendedByFriends();
    this.getMyProductsRecommended();
  }

  getProductsRecommendedByFriends() {
    this.utilities.displayLoading();
    this.service.getMyProductsRecommended().then(
      (resp) => {
        console.log(resp);
        this.ProductsRecommendedByFriends = resp["friends"];
        this.searchResultProductsRecommended = this.ProductsRecommendedByFriends;
        console.log(this.searchResultProductsRecommended);
      },
      (err) => {
        this.utilities.dismissLoading();
      }
    );
  }

  search() {
    this.searchResultProductsRecommended = this.filterItems();
    this.searchResultMyProductsRecommended = this.filterItems2();
  }

  filterItems() {
    return this.ProductsRecommendedByFriends.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
      );
    });
  }

  filterItems2() {
    return this.MyProductsRecommended.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
      );
    });
  }

  getMyProductsRecommended() {
    this.service.getMyProductsRecommended().then(
      (resp) => {
        console.log(resp);
        this.MyProductsRecommended = resp["Recomiendo"];
        this.searchResultMyProductsRecommended = this.MyProductsRecommended;
        this.utilities.dismissLoading();
      },
      (err) => {
        this.utilities.dismissLoading();
      }
    );
  }

  async modalproductosdetalles(product) {
    // console.log(product)
    const modal = await this.modalController.create({
      component: ModalProductdetailsPage,
      cssClass: "productosdetalles-modal",
      componentProps: {
        product: product,
      },
    });
    return await modal.present();
  }
}
