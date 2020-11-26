import { UtilitiesService } from "./../../providers/utilities/utilities.service";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
declare var google;

@Component({
  selector: "app-modal-localinfo",
  templateUrl: "./modal-localinfo.page.html",
  styleUrls: ["./modal-localinfo.page.scss"],
})
export class ModalLocalinfoPage implements OnInit {
  @Input() local: any = [];
  @ViewChild("mapElement") mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  constructor(
    public modalController: ModalController,
    private utils: UtilitiesService,
    private callNumber: CallNumber,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  async initMap() {
    let data = await this.geolocation.getCurrentPosition();
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 15,
      center: { lat: this.local.lat, lng: this.local.lon },
    });
    new google.maps.Marker({
      position: new google.maps.LatLng(this.local.lat, this.local.lon),
      map,
      title: this.local.name,
    });
    this.directionsDisplay.setMap(map);
  }

  async calculateAndDisplayRoute() {
    let data = await this.geolocation.getCurrentPosition();

    const that = this;
    this.directionsService.route(
      {
        origin: new google.maps.LatLng(
          data.coords.latitude,
          data.coords.longitude
        ),
        destination: new google.maps.LatLng(this.local.lat, this.local.lon),
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          that.directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  salir() {
    this.modalController.dismiss();
  }
  call() {
    this.callNumber
      .callNumber(this.local.phone, true)
      .then((res) => console.log("Launched dialer!", res))
      .catch((err) => {
        this.utils.displayToast(
          "Ha ocurrido un error al intentar realizar la llamada"
        );
      });
  }
}
