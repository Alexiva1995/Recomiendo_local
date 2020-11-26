import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
})
export class CongratulationsPage implements OnInit {

  constructor(    private navCtrl: NavController,
    public auth: AuthService,

    ) { }

  ngOnInit() {
    this.getUser()
  }

  goTo(url) {
    this.navCtrl.navigateForward(url);
  }

    //Metodo para obtener la informacion del usuario actualizado
    async getUser() {
      // Iniciamos la consulta
      await this.auth.getUser().then(
        (res) => {
          console.log(res)
          localStorage.setItem("user", JSON.stringify(res));
        },
        (err) => {
          //En caso de error
          console.log("getError", err);
        }
      );
    }

}
