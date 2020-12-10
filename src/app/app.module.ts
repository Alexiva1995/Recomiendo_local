import { ModalPedidoaceptadoPage } from "./pages/modal-pedidoaceptado/modal-pedidoaceptado.page";
import { PremiosPage } from "./pages/premios/premios.page";
import { TabsModule } from "./pages/tabs-page/tabs-page.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
/* import { ServiceWorkerModule } from '@angular/service-worker'; */
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QRCodeModule } from "angularx-qrcode";
// import { QRScanner } from "@ionic-native/qr-scanner/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
// importando modal
import { ModalPedidoPage } from "./pages/modal-pedido/modal-pedido.page";
// importando modal
import { ModalRecoverpasswordPage } from "./pages/modal-recoverpassword/modal-recoverpassword.page";
import { ModalRecommendedPage } from "./pages/modal-recommended/modal-recommended.page";
import { ModalSearchPage } from "./pages/modal-search/modal-search.page";
import { ModalLocalinfoPage } from "./pages/modal-localinfo/modal-localinfo.page";

import { CallNumber } from "@ionic-native/call-number/ngx";
import { Contacts } from "@ionic-native/contacts/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";
import { CommonModule } from "@angular/common";
import { ModalPremiosdetailsPage } from "./pages/modal-premiosdetails/modal-premiosdetails/modal-premiosdetails.page";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { RecomendadosPage } from "./recomendados/recomendados.page";
import { ModalProductdetailsPage } from "./pages/modal-productdetails/modal-productdetails.page";
import { ModalQrPremiosPage } from "./pages/modal-qr-premios/modal-qr-premios.page";
import { ModalPedidofinalizadoPage } from "./pages/modal-pedidofinalizado/modal-pedidofinalizado.page";
/**/ import { OneSignal } from "@ionic-native/onesignal/ngx";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    QRCodeModule,
    CommonModule,
    TabsModule,

    /* ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }) */
  ],
  declarations: [
    AppComponent,
    ModalPedidoPage,
    ModalRecoverpasswordPage,
    ModalPremiosdetailsPage,
    ModalQrPremiosPage,
    ModalRecommendedPage,
    ModalProductdetailsPage,
    RecomendadosPage,
    PremiosPage,
    ModalSearchPage,
    ModalLocalinfoPage,
    ModalPedidoaceptadoPage,
    ModalPedidofinalizadoPage,
  ],
  providers: [
    InAppBrowser,
    SplashScreen,
    StatusBar,
    BarcodeScanner,
    Camera,
    CallNumber,
    Contacts,
    Geolocation,
    NativeGeocoder,
    Diagnostic,
    AndroidPermissions,
    LocationAccuracy,
    SocialSharing,
    Clipboard,
    OneSignal,
  ],
  bootstrap: [
    AppComponent,
    ModalPedidoPage,
    ModalRecoverpasswordPage,
    ModalPremiosdetailsPage,
    ModalRecommendedPage,
    RecomendadosPage,
    PremiosPage,
    ModalProductdetailsPage,
    ModalPedidoaceptadoPage,
    ModalQrPremiosPage,
  ],
})
export class AppModule {}
