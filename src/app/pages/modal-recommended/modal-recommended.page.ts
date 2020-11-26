import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController, IonSlides, NavController } from "@ionic/angular";
import { LocalService } from "../../providers/local/local.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-modal-recommended",
  templateUrl: "./modal-recommended.page.html",
  styleUrls: ["./modal-recommended.page.scss"],
})
export class ModalRecommendedPage implements OnInit {
  @Input() product: any = [];
  local: any = [];
  avatar: any = [];

  @ViewChild("slide2", { static: true }) slides2: IonSlides;
  slideOpts = {
    slidesPerView: 3.5,
    spaceBetween: 10,
  };
  @ViewChild("slide", { static: true }) slides: IonSlides;
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: -70,
  };

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private service: LocalService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    console.log(this.product);
    console.log(this.product.filter((alimento) => alimento.name == "pizza"));
  }

  salir() {
    this.modalController.dismiss();
  }
}
