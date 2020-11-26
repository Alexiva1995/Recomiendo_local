import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { AlertController, NavController } from '@ionic/angular';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { AuthService } from '../../providers/auth/auth.service';
import { CONSTANTES } from "../../providers/constantes";

declare var google;

@Component({
  selector: 'app-perfilvendedor',
  templateUrl: './perfilvendedor.page.html',
  styleUrls: ['./perfilvendedor.page.scss'],
})
export class PerfilvendedorPage implements OnInit {
  form: FormGroup;
  avatarform:FormGroup;
  passform:FormGroup;
  user: any = [];
  imgSelected1: any;
  imgSelected2: any;

  @ViewChild("mapElement") mapNativeElement: ElementRef;


  constructor(private fb: FormBuilder,
              public alertController: AlertController,
              private camera: Camera,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder,
              private route: NavController,
              private service: AuthService,
              private utilities: UtilitiesService,) { 
    this.user = JSON.parse(localStorage.getItem("user"))   
    this.form = this.fb.group(
      {
        id: [this.user.user.id, Validators.required],
        status:[1],
        desdefecha:['lunes', Validators.required],
        hastafecha:['viernes', Validators.required],
        desdehora:[null, Validators.required  ],
        hastahora:[null, Validators.required],
        working_hours: [null],
        address:[null],
        lat: [895 , Validators.required],
        lon: [4125, Validators.required],
        phone: [null, Validators.required],
      });

    this.avatarform = this.fb.group({
      id: [this.user.user.id, Validators.required],
      photo: [null , Validators.required],
      type: [null , Validators.required]
    })
    
    this.passform = this.fb.group(
      {
        password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        repassword: [null,Validators.compose([Validators.required, Validators.minLength(6)])]
      },
      {
        validator: this.ConfirmedValidator("password", "repassword"),
      }
    );

  }

  ngOnInit() {
    this.imgSelected1 = 'https://valdusoft.com/recomiendo/user/avatar/' + this.user.user.photo
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  async initMap() {
    let data = await this.geolocation.getCurrentPosition();
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 15,
      center: { lat: data.coords.latitude, lng: data.coords.longitude },
    });
    new google.maps.Marker({
      position: new google.maps.LatLng(
        data.coords.latitude,
        data.coords.longitude
      ),
      map,
      title: "Mi ubicacion",
    });
    this.form.controls.lat.setValue(data.coords.latitude)
    this.form.controls.lon.setValue(data.coords.longitude)
    this.getAddress(data)

  }


  getAddress(data){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  
  this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      console.log(JSON.stringify(result[0]))
      // alert(JSON.stringify(result[0]))
      this.form.controls.address.setValue(result[0].locality)
    })
    .catch((error: any) => console.log(error));
  }


  saveData(){
   const  desde = this.form.controls.desdefecha.value
   const  hasta = this.form.controls.hastafecha.value
   const  hora1 = this.form.controls.desdehora.value
   const  hora2 = this.form.controls.hastahora.value
   const fecha =  `${desde} - ${hasta} /  ${hora1}Am - ${hora2}Pm `
   this.form.controls.working_hours.setValue(fecha)

    // Iniciamos la consulta
    this.service.editUserCompany(this.form.value).then(
    (res: any) => {
      this.utilities.dismissLoading();
      this.utilities.displayToast("Usuario actualizado");
      // testear
      console.log("que info", res);
      this.route.navigateRoot(["/app/tabs/home"]);
      // this.route.pop();
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
    
    console.log(this.form.value)
    console.log(this.passform.value)
  }

  async updatePassword(){
    if (this.passform.status == "VALID") {
      await this.utilities.displayLoading();
      try {
        // Iniciamos la consulta
        this.service.editUser(this.passform.value).then(
          (res: any) => {
            this.utilities.dismissLoading();
            this.utilities.displayToast("Contraseña actualizado");
            // testear
            console.log("que info", res);
            localStorage.clear()
            this.route.navigateRoot(["/login"]);
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
          this.imgSelected1 = null;
          this.imgSelected1 = "data:image/jpeg;base64," + imageData;
          this.avatarform.controls.photo.setValue(imageData)
          this.avatarform.controls.type.setValue(1)
          this.updateAvatar();
          // console.log("imagen" , this.imgSelected)
        }

        if (index == 2) {
          //frente
          this.imgSelected1 = null;
          this.imgSelected1 = "data:image/jpeg;base64," + imageData;
          this.avatarform.controls.photo.setValue(imageData)
          this.avatarform.controls.type.setValue(2)
          this.updateAvatar();
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


  async updateAvatar() {
    await this.utilities.displayLoading();
    try {
      // Iniciamos la consulta
      this.service.updateAvatarCompany(this.avatarform.value).then(
        async (res: any) => {
          const data = await this.service.getUser()
          if(data){
            console.log("que info", data);
            this.utilities.dismissLoading();
            this.utilities.displayToast("imagen actualizado");
            // localStorage.setItem("user", JSON.stringify(data));
            this.route.navigateRoot(["/app/tabs/home"]);
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
