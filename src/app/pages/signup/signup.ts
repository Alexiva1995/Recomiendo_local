import { Component } from "@angular/core";
import { NgForm, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { AuthService } from "../../providers/auth/auth.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { NavController, AlertController } from "@ionic/angular";
import { CONSTANTES } from "../../providers/constantes";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
  styleUrls: ["./signup.scss"],
})
export class SignupPage {
  terms: false;
  public formGroup: FormGroup;
  submitted: boolean;
  constructor(
    private fb: FormBuilder,
    private utilities: UtilitiesService,
    private navCtrl: NavController,
    public auth: AuthService,
    private alertController: AlertController,
    private service: AuthService
  ) {
    this.formGroup = this.fb.group(
      {
        name: ["", Validators.required],
        sponsor: [""],
        // email:['refm.130995@gmail.com'],
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            ),
          ]),
        ],
        password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        confirm_password: [
          "",
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      },
      {
        validator: this.ConfirmedValidator("password", "confirm_password"),
      }
    );
  }

  async onSignup(form: NgForm) {
    console.log(this.formGroup);
    await this.utilities.displayLoading();
    let data = this.formGroup.value;
    try {
      console.log(data)
      // Iniciamos la consulta
      this.service.signUp(data).then(
        (res: any) => {
          this.utilities.dismissLoading();
          this.utilities.displayToastButtonTime("Registro exitoso");
          localStorage.setItem(
            CONSTANTES.LOCAL_STORAGE.token,
            res.access_token
          );
          localStorage.setItem("user", JSON.stringify(res));
          this.getUser();
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

  //Metodo para obtener la informacion del usuario logueado
  async getUser() {
    // Iniciamos la consulta
    await this.auth.getUser().then(
      (res) => {
        this.navCtrl.navigateRoot("/app/tabs/home");
      },
      (err) => {
        //En caso de error
        this.utilities.displayToastButtonTime(
          err.error.message ? err.error.message : CONSTANTES.MESSAGES.error
        );
        console.log("getError", err);
      }
    );
  }

  goTo(url) {
    this.navCtrl.navigateForward(url);
  }

  get errorControl() {
    //getting para recibir la informacion del formulario
    return this.formGroup.controls;
  }

  // Custom validacion para Confimacion
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
