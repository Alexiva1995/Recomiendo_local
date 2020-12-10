import { Component } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserOptions } from "../../interfaces/user-options";
import { AuthService } from "../../providers/auth/auth.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";
import { NavController, ModalController } from "@ionic/angular";
import { CONSTANTES } from "../../providers/constantes";
import { ModalRecoverpasswordPage } from "../modal-recoverpassword/modal-recoverpassword.page";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage {
  public formGroup: FormGroup;
  public formGroup_: FormGroup;
  login: UserOptions = { username: "", password: "" };
  submitted = false;
  cambiarClase = true;
  public type: string = "password";
  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private utilities: UtilitiesService,
    private navCtrl: NavController,
    private router: Router,
    public auth: AuthService,
    public modalController: ModalController
  ) {
    this.formGroup = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ]),
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      remember_me: [true],
      pushToken: [localStorage.getItem("pushToken")],
      pushIdToken: [localStorage.getItem("pushIdToken")],
    });
  }

  async signIn() {
    await this.utilities.displayLoading();
    let data = this.formGroup.value;
    //Validamos el formulario
    if (
      !this.formGroup.controls.email.valid ||
      !this.formGroup.controls.password.valid
    ) {
      this.utilities.displayToastButtonTime(
        "Contraseña o dirección de correo electrónico incorrecta"
      );
      this.utilities.dismissLoading();
    } else {
      try {
        // Iniciamos la consulta
        this.errorControl.pushToken.setValue(localStorage.getItem("pushToken")),
          this.errorControl.pushIdToken.setValue(
            localStorage.getItem("pushIdToken")
          ),
          console.log("Logueando", this.formGroup.value);

        this.service.signIn(this.formGroup.value).then(
          (res: any) => {
            //Almacenamos en local storage el nombre del usuario
            console.log("todo lo que se recibe al logear", res);
            //Guardamos el token recibido
            localStorage.setItem(
              CONSTANTES.LOCAL_STORAGE.token,
              res.access_token
            );
            //this.notification.handlerNotifications();
            this.utilities.dismissLoading();
            this.getUser();
          },
          (e) => {
            //En caso de error
            this.utilities.dismissLoading();
            console.log(e);

            this.utilities.displayToastButtonTime(
              "Usuario o contraseña incorrecta."
            );
            console.error(e);
          }
        );
      } catch (e) {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime(
          "Usuario o contraseña incorrecta."
        );
        console.error(e);
      }
    }
  }

  //Metodo de enrutamiento de pantallas
  goTo(url) {
    this.navCtrl.navigateForward(url);
  }

  //Metodo para obtener la informacion del usuario logueado
  async getUser() {
    // Iniciamos la consulta
    await this.auth.getUser().then(
      (res) => {
        console.log("todo lo del usuario", res);
        localStorage.setItem("user", JSON.stringify(res));
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

  async doRecovery() {
    /* Funcion para recuperar contrase;a */
    await this.utilities.displayLoading();
    let data = this.formGroup_.value;
    try {
      // Iniciamos la consulta
      this.service.signUp(data).then(
        (res: any) => {
          this.utilities.dismissLoading();
          this.utilities.displayToastButtonTime(res.msj);
        },
        (e) => {
          //En caso de error
          this.utilities.dismissLoading();
          this.utilities.displayToastButtonTime(
            e.error.message ? e.error.message : CONSTANTES.MESSAGES.error
          );
          console.error(e);
        }
      );
    } catch (e) {
      //En caso de error
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime(
        e.error.message ? e.error.message : CONSTANTES.MESSAGES.error
      );
      console.error(e);
    }
  }

  get errorControl() {
    //getting para recibir la informacion del formulario
    return this.formGroup.controls;
  }

  async recuperar() {
    const modal = await this.modalController.create({
      component: ModalRecoverpasswordPage,
      cssClass: "recuperar-modal",
    });
    return await modal.present();
  }
}
