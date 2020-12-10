import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AlertController } from "@ionic/angular";
import { ProductsService } from "../../providers/products/products.service";
import { UtilitiesService } from "../../providers/utilities/utilities.service";

@Component({
  selector: "app-publicarproductovendedor",
  templateUrl: "./publicarproductovendedor.page.html",
  styleUrls: ["./publicarproductovendedor.page.scss"],
})
export class PublicarproductovendedorPage implements OnInit {
  form: FormGroup;
  user: any = [];
  categories: any = [];
  imgSelected: any;
  product: any = [];
  edit: any = [];
  

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    private utilities: UtilitiesService,
    private service: ProductsService,
    private camera: Camera,
    private route: ActivatedRoute
  ) {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.form = this.fb.group({
          company_id: [this.user.user.companies_owner.id, Validators.required],
          name: ["", Validators.required],
          description: ["", Validators.required],
          subcategories: this.fb.array([],Validators.required),
          price: ["", Validators.required],
          product_id: [""],
          photo: ["", Validators.required],
        });
  }

  ngOnInit() {

    this.subcategories();
  }

  ionViewDidEnter(){
    this.fillForm();
  }


  fillForm() {
    this.route.queryParams.subscribe((res) => {
      this.edit = res.data;
      console.log(this.edit)

      if (this.edit){
        this.form.controls.company_id.setValue(this.edit.company_id || "")
        this.form.controls.product_id.setValue(this.edit.id || "")
        this.form.controls.name.setValue(this.edit.name || "")
        this.form.controls.description.setValue(this.edit.description || "")
        this.form.controls.price.setValue(this.edit.price || "")
        this.form.controls.photo.setValue( this.edit.photos[0].name || "")
      }

      if(this.edit.photos[0].name){
        this.imgSelected = `https://valdusoft.com/recomiendo/product/image/${this.edit.photos[0].name}`
      }

    });

  }

  getcategoryForms() {
    return this.form.get("subcategories") as FormArray;
  }

  Addsubcategories(params) {
    console.log(params.detail.value);
    const data = this.getcategoryForms();
    console.log(data);
    const control = new FormControl(params.detail.value, Validators.required);
    data.removeAt(0); //remueve el anterior por lo momento.
    data.push(control);
  }

  async subcategories() {
    this.utilities.displayLoading();
    const data = await this.service.getMyCategory();
    if (data) {
      this.utilities.dismissLoading();
      this.categories = data;
    } else {
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime("ocurrio un error");
    }
  }

  async saveData() {
    if(this.edit){
      this.utilities.displayLoading();
      const data: any = await this.service.EditMyProduct(this.form.value);
      if (data) {
        this.utilities.dismissLoading();
        // imagen
        const { id } = data;
        this.uploadphoto(id);
      } else {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("ocurrio un error");
      }
    }else{
      this.utilities.displayLoading();
      const data: any = await this.service.AddMyProduct(this.form.value);
      if (data) {
        this.utilities.dismissLoading();
        // imagen
        const { Product_id } = data;
        this.uploadphoto(Product_id);
      } else {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("ocurrio un error");
      }
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
          this.imgSelected = null;
          this.imgSelected = "data:image/jpeg;base64," + imageData;
          // this.updateAvatar();
          this.form.controls.photo.setValue(this.imgSelected);
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

  async uploadphoto(id) {
    let params = {
      id: id,
      photo: this.form.controls.photo.value,
    };

    if(this.edit){
      this.utilities.displayLoading();
      const data: any = await this.service.EditPhotoProduct(params);
      if (data) {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("producto actualizado!!");
      } else {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("ocurrio un error");
      }
    }else{

      this.utilities.displayLoading();
      const data: any = await this.service.AddPhotoProduct(params);
      if (data) {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("producto agregado!!");
      } else {
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime("ocurrio un error");
      }

    }

  }
}
