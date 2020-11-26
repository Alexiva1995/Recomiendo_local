import { SplashPage } from "./pages/splash/splash/splash.page";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
/* import { SwUpdate } from '@angular/service-worker';
 */
import {
  MenuController,
  ModalController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Storage } from "@ionic/storage";

import { UserData } from "./providers/user-data";
import { PermissionsService } from "./providers/permissions/permissions.service";

/* import { OneSignal } from '@ionic-native/onesignal/ngx'; */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Dasboard",
      url: "/app/tabs/dasboard",
      icon: "calendar",
    },
    {
      title: "Products",
      url: "/products",
      icon: "calendar",
    },
    {
      title: "Local",
      url: "/local",
      icon: "calendar",
    },
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    /* private oneSignal: OneSignal, */
    /*   private swUpdate: SwUpdate, */
    private toastCtrl: ToastController,
    private permission: PermissionsService,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();

    /*   this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    }); */
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const modal = await this.modalCtrl.create({
        component: SplashPage,
      });
      return await modal.present();
      /*      this.permission.locationStatus().then(
        async (res) => {
          let result = await this.permission.checkLocationEnabled();
          console.log(result);
        },
        (err) => {
          console.log("prueba", err);
        }
      ); */
      /*   this.oneSignal.startInit("5c96e755-64ea-4b9f-834d-21973c70d45e", "65764984501")
      .inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
      .endInit(); */
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then((loggedIn) => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener("user:login", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:signup", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:logout", () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl("/app/tabs/dasboard");
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
    this.router.navigateByUrl("/tutorial");
  }
}
