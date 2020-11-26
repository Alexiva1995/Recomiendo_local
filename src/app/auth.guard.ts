import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { NavController } from "@ionic/angular";
import { CONSTANTES } from "./providers/constantes";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private navCtrl: NavController) {}
  canActivate() {
    //Validamos que existe un usuario en el localstorage almacenado
    let token = localStorage.getItem(CONSTANTES.LOCAL_STORAGE.token);
    if (token) {
      this.navCtrl.navigateRoot("/app/tabs/home");
    } else {
      return true;
    }
  }
}
