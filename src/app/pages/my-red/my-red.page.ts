import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../providers/auth/auth.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { CONSTANTES } from "../../providers/constantes";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";

@Component({
  selector: "app-my-red",
  templateUrl: "./my-red.page.html",
  styleUrls: ["./my-red.page.scss"],
})
export class MyRedPage implements OnInit {
  user: any = [];
  people: any = [];
  searchResult: any[];
  searchTerm: any;

  constructor(
    private service: AuthService,
    private utilities: UtilitiesService,
    public navCtrl: NavController
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("tester ", this.user.user.id);
  }

  ionViewWillEnter() {}

  ngOnInit() {
    // this.getPeople();
  }

  ionViewDidEnter(){
    this.getPeople();
  }


  goTo(url) {
    this.navCtrl.navigateForward(url);
  }

  async getPeople() {
    await this.utilities.displayLoading();
    try {
      // Iniciamos la consulta
      this.service.getRed(this.user.user.id).then(
        (res: any) => {
          this.utilities.dismissLoading();

          // Por lo momentos no esta devolviendo nada porque no hay usuarios
          this.people = res["red"];
          this.searchResult = this.people;

          console.log(res);
        },
        (e) => {
          //En caso de error
          console.log(e);
          this.utilities.dismissLoading();
          this.utilities.displayToastButtonTime(
            e.error.message ? e.error.message : CONSTANTES.MESSAGES.error
          );
        }
      );
    } catch (e) {
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime(
        e.error.message ? e.error.message : CONSTANTES.MESSAGES.error
      );
      console.error(e);
    }
  }

  getID(value: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        user: JSON.stringify(value),
      },
    };

    this.navCtrl.navigateForward(["my-red2"], navigationExtras);
    console.log(value);
  }

  search() {
    this.searchResult = this.filterItems();
  }

  filterItems() {
    return this.people.filter((item) => {
      console.log(item);
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.email.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      );
    });
  }
}
