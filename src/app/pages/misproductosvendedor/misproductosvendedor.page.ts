import { ProductsService } from "./../../providers/products/products.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: "app-misproductosvendedor",
  templateUrl: "./misproductosvendedor.page.html",
  styleUrls: ["./misproductosvendedor.page.scss"],
})
export class MisproductosvendedorPage implements OnInit {
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };
  myProducts: any = [];
  user: any[];

  constructor(
    private service: ProductsService,
    private navCtrl: NavController,
    private utilities: UtilitiesService,

  ) {}

  ngOnInit() {
    this.getMyProducts();
  }

  getMyProducts() {
    this.service.getMyProducts(this.getUser().user).then(
      (res) => {
        this.myProducts = res["myproducts"];
        console.log(this.myProducts);
      },
      (err) => {}
    );
  }

  getUser() {
    this.user = [];
    // console.log(JSON.parse(localStorage.getItem("user")))
    return JSON.parse(localStorage.getItem("user"));
  }

  edit(product) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: product,
      },
    };
    this.navCtrl.navigateForward("app/tabs/order", navigationExtras);
  }

  async Remove(product){
    let params = {
      product_id:product.id,
      status:0
    }

    this.utilities.displayLoading();
    const data: any = await this.service.EditMyProduct(params);
    if (data) {
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime("Producto fuera del stock!");
    } else {
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime("ocurrio un error");
    }

  }


  goTo(url) {
    this.navCtrl.navigateForward(url);
  }


}
