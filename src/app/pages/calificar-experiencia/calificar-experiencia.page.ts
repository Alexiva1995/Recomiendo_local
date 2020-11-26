import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../../providers/products/products.service";
import { QualifyService } from "../../providers/qualify/qualify.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-calificar-experiencia",
  templateUrl: "./calificar-experiencia.page.html",
  styleUrls: ["./calificar-experiencia.page.scss"],
})
export class CalificarExperienciaPage implements OnInit {
  form: FormGroup;
  staratencion1: any;
  staratencion2: any;
  staratencion3: any;
  staratencion4: any;
  staratencion5: any;
  // star precio
  starprecio1: any;
  starprecio2: any;
  starprecio3: any;
  starprecio4: any;
  starprecio5: any;
  // star calida
  starcalida1: any;
  starcalida2: any;
  starcalida3: any;
  starcalida4: any;
  starcalida5: any;
  products: any = [];
  local: any = [];
  user: any = [];

  constructor(
    private fb: FormBuilder,
    private QualifyService: QualifyService,
    private util: UtilitiesService,
    private service: ProductsService
  ) {
    this.form = this.fb.group({
      comment: [null, Validators.required],
      quality: [null, Validators.required],
      price: [null, Validators.required],
      attention: [null, Validators.required],
      product_id: [8, Validators.required],
    });
    this.products = this.service.pedidos;
    this.local = this.service.localSelected;
  }

  ngOnInit() {}

  async sendQualify() {
    console.log("valor", this.form.value);

    // this.util.displayLoading();
    // this.QualifyService.sendQualify(this.form.value).then(
    //   (res) => {
    //     this.util.dismissLoading();
    //   },
    //   (err) => {
    //     this.util.dismissLoading();
    //   }
    // );
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  puntuaratencion(puntaje: number) {
    console.log(puntaje);
    switch (puntaje) {
      case 1:
        this.staratencion1 = true;
        this.staratencion2 = false;
        this.staratencion3 = false;
        this.staratencion4 = false;
        this.staratencion5 = false;
        this.form.controls["attention"].setValue(1);

        break;

      case 2:
        this.staratencion1 = true;
        this.staratencion2 = true;
        this.staratencion3 = false;
        this.staratencion4 = false;
        this.staratencion5 = false;
        this.form.controls["attention"].setValue(2);

        break;

      case 3:
        this.staratencion1 = true;
        this.staratencion2 = true;
        this.staratencion3 = true;
        this.staratencion4 = false;
        this.staratencion5 = false;
        this.form.controls["attention"].setValue(3);

        break;

      case 4:
        this.staratencion1 = true;
        this.staratencion2 = true;
        this.staratencion3 = true;
        this.staratencion4 = true;
        this.staratencion5 = false;
        this.form.controls["attention"].setValue(4);

        break;
      case 5:
        this.staratencion1 = true;
        this.staratencion2 = true;
        this.staratencion3 = true;
        this.staratencion4 = true;
        this.staratencion5 = true;
        this.form.controls["attention"].setValue(5);
        break;
      default:
        console.log("Por favor, selecciona un valor del 1 al 6.");
    }
  }

  puntuarprecio(puntaje: number) {
    console.log(puntaje);
    switch (puntaje) {
      case 1:
        this.starprecio1 = true;
        this.starprecio2 = false;
        this.starprecio3 = false;
        this.starprecio4 = false;
        this.starprecio5 = false;
        this.form.controls["price"].setValue(1);

        break;

      case 2:
        this.starprecio1 = true;
        this.starprecio2 = true;
        this.starprecio3 = false;
        this.starprecio4 = false;
        this.starprecio5 = false;
        this.form.controls["price"].setValue(2);

        break;

      case 3:
        this.starprecio1 = true;
        this.starprecio2 = true;
        this.starprecio3 = true;
        this.starprecio4 = false;
        this.starprecio5 = false;
        this.form.controls["price"].setValue(3);

        break;

      case 4:
        this.starprecio1 = true;
        this.starprecio2 = true;
        this.starprecio3 = true;
        this.starprecio4 = true;
        this.starprecio5 = false;
        this.form.controls["price"].setValue(4);

        break;
      case 5:
        this.starprecio1 = true;
        this.starprecio2 = true;
        this.starprecio3 = true;
        this.starprecio4 = true;
        this.starprecio5 = true;
        this.form.controls["price"].setValue(5);

        break;
      default:
        console.log("Por favor, selecciona un valor del 1 al 6.");
    }
  }

  puntuarcalida(puntaje: number) {
    console.log(puntaje);
    switch (puntaje) {
      case 1:
        this.starcalida1 = true;
        this.starcalida2 = false;
        this.starcalida3 = false;
        this.starcalida4 = false;
        this.starcalida5 = false;
        this.form.controls["quality"].setValue(1);
        break;

      case 2:
        this.starcalida1 = true;
        this.starcalida2 = true;
        this.starcalida3 = false;
        this.starcalida4 = false;
        this.starcalida5 = false;
        this.form.controls["quality"].setValue(2);

        break;

      case 3:
        this.starcalida1 = true;
        this.starcalida2 = true;
        this.starcalida3 = true;
        this.starcalida4 = false;
        this.starcalida5 = false;
        this.form.controls["quality"].setValue(3);

        break;

      case 4:
        this.starcalida1 = true;
        this.starcalida2 = true;
        this.starcalida3 = true;
        this.starcalida4 = true;
        this.starcalida5 = false;
        this.form.controls["quality"].setValue(4);

        break;
      case 5:
        this.starcalida1 = true;
        this.starcalida2 = true;
        this.starcalida3 = true;
        this.starcalida4 = true;
        this.starcalida5 = true;
        this.form.controls["quality"].setValue(5);

        break;
      default:
        console.log("Por favor, selecciona un valor del 1 al 6.");
    }
  }
}
