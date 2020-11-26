import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-recomiendo-productos-paso2",
  templateUrl: "./recomiendo-productos-paso2.page.html",
  styleUrls: ["./recomiendo-productos-paso2.page.scss"],
})
export class RecomiendoProductosPaso2Page implements OnInit {
  // imagen = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
  user: any = [];
  image: any = [];
  imgSelected: string;
  public formGroup: FormGroup;
  data: any = [];
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private camera: Camera,
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
      gusto: [data.gusto,Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      photo: ["", Validators.compose([Validators.required])],
      company: ["",Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
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
          this.formGroup.controls.photo.setValue(this.imgSelected);
          // 'data:image/jpeg;base64'
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
}
