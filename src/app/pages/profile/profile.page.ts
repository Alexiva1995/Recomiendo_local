import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../../providers/auth/auth.service";
import { CONSTANTES } from "../../providers/constantes";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  imgSelected: any;
  user: any;
  form: FormGroup;
  formpass: FormGroup;
  photo: any;

  constructor(
    public alertController: AlertController,
    private fb: FormBuilder,
    private service: AuthService,
    private route: NavController,
    private utilities: UtilitiesService,
    private camera: Camera
  ) {
    this.form = this.fb.group(
      {
        name: [null, Validators.required],
        password: [null, Validators.compose([Validators.minLength(6)])],
        repassword: [null],
      },
      {
        validator: this.ConfirmedValidator("password", "repassword"),
      }
    );
  }

  ngOnInit() {
    // cargar imagen
    this.user = JSON.parse(localStorage.getItem("user"));
    this.imgSelected = 'https://valdusoft.com/recomiendo/user/avatar/' + this.user.user.photo
  }

  seleccionarFuente() {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: "Seleccionar Imágen",
        message: "¿Qué desea hacer?",
        cssClass: "customMensaje1",
        buttons: [
          {
            text: "Tomar Foto",
            cssClass: "confirmButton",
            handler: () => {
              resolve(true);
            },
          },
          {
            text: "Buscar en Galería",
            cssClass: "confirmButton",
            handler: () => {
              resolve(false);
            },
          },
        ],
      });

      await alert.present();
    });
  }

  async captureImage(index) {
    let st = this.camera.PictureSourceType.CAMERA;
    await this.seleccionarFuente().then((result: boolean) => {
      if (result) {
        st = this.camera.PictureSourceType.CAMERA;
      } else {
        st = this.camera.PictureSourceType.PHOTOLIBRARY;
      }
    });

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: st,
      allowEdit: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        if (index == 1) {
          //frente
          this.imgSelected = null;
          this.imgSelected = "data:image/jpeg;base64," + imageData;
          this.updateAvatar();
          // this.form.controls.avatar.setValue(imageData)
          // console.log("imagen" , this.imgSelected)
        }
        // this.form.controls['fotoPerfil'].setValue(imageData);
      },
      (err) => {
        // Handle error
        console.log("cameraE", err);
      }
    );
  }

  async changeData() {
    if (this.form.status == "VALID") {
      await this.utilities.displayLoading();
      try {
        // Iniciamos la consulta
        this.service.editUser(this.form.value).then(
          (res: any) => {
            this.utilities.dismissLoading();
            this.utilities.displayToast("Usuario actualizado");
            // testear
            console.log("que info", res);
            localStorage.setItem("user", JSON.stringify(res["user"]));
            //this.route.navigateRoot(["/app/tabs/home"]);
            this.route.pop();
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
    } else {
      return;
    }
  }

  async updateAvatar() {
    await this.utilities.displayLoading();
    try {
      // Iniciamos la consulta
      this.service.updateAvatar(this.imgSelected).then(
        async (res: any) => {
          // this.utilities.dismissLoading();
          // this.utilities.displayToast("Avatar actualizado");
          // console.log(res)
          const data = await this.service.getUser()
          if(data){
            console.log("que info", data);
            this.utilities.dismissLoading();
            this.utilities.displayToast("Avatar actualizado");
            localStorage.setItem("user", JSON.stringify(data));
            this.route.pop();
           }else{
            this.utilities.dismissLoading();
            this.utilities.displayToastButtonTime("ocurrio un error");
           }
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
