import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-recomiendo-productos-paso3",
  templateUrl: "./recomiendo-productos-paso3.page.html",
  styleUrls: ["./recomiendo-productos-paso3.page.scss"],
})
export class RecomiendoProductosPaso3Page implements OnInit {
  user: any = [];
  image: any = [];
  imgSelected: string;
  public formGroup: FormGroup;
  data: any = [];
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private fb: FormBuilder
  ) {
    this.route.queryParams.subscribe((params) => {
      this.data = params.data;
    });

  }

  ngOnInit() {
    const data = JSON.parse(this.data)

    this.formGroup = this.fb.group({
      name: [data.name, Validators.compose([Validators.required])],
      gusto: [data.gusto, Validators.compose([Validators.required])],
      photo: [data.photo, Validators.compose([Validators.required])],
      company: [
        data.company,
        Validators.compose([Validators.required]),
      ],
      seller: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required])],
    });

  }

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
