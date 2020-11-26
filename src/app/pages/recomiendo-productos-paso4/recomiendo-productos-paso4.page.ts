import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ProductsService } from "../../providers/products/products.service";
import { UtilitiesService } from '../../providers/utilities/utilities.service';
declare var google;
@Component({
  selector: "app-recomiendo-productos-paso4",
  templateUrl: "./recomiendo-productos-paso4.page.html",
  styleUrls: ["./recomiendo-productos-paso4.page.scss"],
})
export class RecomiendoProductosPaso4Page implements OnInit {
  user: any = [];
  image: any = [];
  imgSelected: any;
  public formGroup: FormGroup;
  data: any = [];
  @ViewChild("mapElement") mapNativeElement: ElementRef;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private fb: FormBuilder,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private service: ProductsService,
    private util: UtilitiesService

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
      seller: [data.seller, Validators.compose([Validators.required])],
      phone: [data.phone, Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
    });
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
      this.formGroup.controls.address.setValue(result[0].locality)
    })
    .catch((error: any) => console.log(error));
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

  sendRecommend() {
    this.util.displayLoading();

    this.service.sendProductRecommend(this.formGroup.value).then(
      (res) => {
        this.util.dismissLoading();
        console.log(res)
        this.goTo("/congratulations");
      },
      (err) => {
        this.util.dismissLoading();
        alert(JSON.stringify(err))
      }
    );
  }
}
