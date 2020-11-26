import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-recomiendo-productos-paso1",
  templateUrl: "./recomiendo-productos-paso1.page.html",
  styleUrls: ["./recomiendo-productos-paso1.page.scss"],
})
export class RecomiendoProductosPaso1Page implements OnInit {
  user: any = [];
  product: any = [];
  public formGroup: FormGroup;
  constructor(private navCtrl: NavController, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ["", Validators.compose([Validators.required])],
      gusto: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  ngOnInit() {}

  getUser() {
    this.user = [];
    return JSON.parse(localStorage.getItem("user"));
  }

  goTo(url) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.formGroup.value),
      },
    };
    this.navCtrl.navigateForward(url, navigationExtras);
  }
}
