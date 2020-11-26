import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { NavController } from '@ionic/angular';
import { AuthService } from '../../providers/auth/auth.service';
import { CONSTANTES } from '../../providers/constantes';
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: 'app-my-red2',
  templateUrl: './my-red2.page.html',
  styleUrls: ['./my-red2.page.scss'],
})
export class MyRed2Page implements OnInit {
  user: any = [];
  people:any = [];
  searchResult: any[];
  searchTerm: any;

  constructor(private route: ActivatedRoute,
              private service: AuthService,
              private utilities: UtilitiesService,
              public navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params["user"]);
      });
   }

  ngOnInit() {
    console.log(this.user.name)
    this.getPeople()
  }


  async getPeople(){
    await this.utilities.displayLoading();
    try {
      // Iniciamos la consulta
      this.service.getRed(this.user.id).then((res: any) => {
        this.utilities.dismissLoading();
        
        // Por lo momentos no esta devolviendo nada porque no hay usuarios
        this.people = res["red"]
        this.searchResult = this.people
        console.log(res)

      },( e )=> {
        //En caso de error
        console.log(e);
        this.utilities.dismissLoading();
        this.utilities.displayToastButtonTime(e.error.message ? e.error.message : CONSTANTES.MESSAGES.error);
      })

    }
    catch (e) {
      this.utilities.dismissLoading();
      this.utilities.displayToastButtonTime(e.error.message ? e.error.message : CONSTANTES.MESSAGES.error);
      console.error(e);
    }

  }

  getID(value:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          user:JSON.stringify(value)
      }
    };

     this.navCtrl.navigateForward(['my-red3'],navigationExtras);
    console.log(value)
  }

  search() {
    this.searchResult = this.filterItems();
  }

  filterItems() {
    return this.people.filter((item) => {
      console.log(item)
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.email.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
      );
    });
  }

}
