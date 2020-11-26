import { UtilitiesService } from "./../../providers/utilities/utilities.service";
import { PremiosPage } from "./../premios/premios.page";
import { QuestionsService } from "./../../providers/questions/questions.service";
import { AwardsService } from "./../../providers/awards/awards.service";
import { ProductsService } from "./../../providers/products/products.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides, NavController, ModalController } from "@ionic/angular";
import { ModalProductdetailsPage } from "../modal-productdetails/modal-productdetails.page";
import { ModalSearchPage } from "../modal-search/modal-search.page";
import { ModalRecommendedPage } from "../modal-recommended/modal-recommended.page";
import { ModalPremiosdetailsPage } from "../modal-premiosdetails/modal-premiosdetails/modal-premiosdetails.page";
import { RecomendadosPage } from "../../recomendados/recomendados.page";

@Component({
  selector: "app-dasboard",
  templateUrl: "./dasboard.page.html",
  styleUrls: ["./dasboard.page.scss"],
})
export class DasboardPage implements OnInit {
  user: any = [];
  imgSelected: any;
  answer: any = "";
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };
  products: any = [];
  awards: any = [];
  question: any = [];
  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
    private productsService: ProductsService,
    private awardsService: AwardsService,
    private questionsService: QuestionsService,
    private util: UtilitiesService
  ) {}

  getUser() {
    this.user = [];
    // console.log(JSON.parse(localStorage.getItem("user")))
    return JSON.parse(localStorage.getItem("user"));
  }

  ionViewWillEnter() {
    this.getProducts();
    this.getAwards();
    this.getQuestions();
  }

  async getProducts() {
    this.productsService.getProductsMostRecommended().then(
      (res) => {
        this.products = res["Products"];
        console.log(this.products);
      },
      (err) => {}
    );
  }
  getAwards() {
    this.awardsService.getAwardsMostRecommended().then(
      (res) => {
        this.awards = res["Awards"];
        console.log("premios", this.awards);
      },
      (err) => {}
    );
  }

  async getQuestions() {
    this.util.displayLoading();
    this.questionsService.getQuestions().then(
      (res) => {
        this.util.dismissLoading();
        this.question = res["Question"];
        console.log(res)
        if (this.question) {
          this.question.options = JSON.parse(this.question.options);
        }
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  async sendAswer() {
    this.util.displayLoading();
    this.questionsService.sendAnswers(this.question, this.answer).then(
      (res) => {
        this.util.dismissLoading();
        this.util.displayToast("Respuesta enviada");
        this.question = [];
        this.getQuestions();
        this.answer = ""
      },
      (err) => {
        this.util.dismissLoading();
      }
    );
  }

  ngOnInit() {}

  goTo(url) {
    this.navCtrl.navigateForward(url);
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

  async modalbuscar() {
    const modal = await this.modalController.create({
      component: ModalSearchPage,
      cssClass: "buscar-modal",
      componentProps: {
        productrecomend: this.products,
      },
    });
    return await modal.present();
  }

  async modalrecomendado() {
    const modal = await this.modalController.create({
      component: RecomendadosPage,
      cssClass: "recomendado-modal",
      componentProps: {
        product: this.products,
      },
    });
    return await modal.present();
  }
  async showAwards() {
    const modal = await this.modalController.create({
      component: PremiosPage,
      cssClass: "recomendado-modal",
      componentProps: {
        product: this.products,
      },
    });
    return await modal.present();
  }

  async openModal(award) {
    console.log("que recibe", award);
    const modal = await this.modalController.create({
      component: ModalPremiosdetailsPage, //Componente modal del premio
      cssClass: "productosdetalles-modal",
      componentProps: {
        award: award,
      },
    });
    console.log("parametro enviado", award);
    return await modal.present();
  }
}
