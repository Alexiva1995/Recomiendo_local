import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides, NavController } from '@ionic/angular';
import { AuthService } from '../../providers/auth/auth.service';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { LocalService } from '../../providers/local/local.service';
import { NavigationExtras } from '@angular/router';
import { ModalProductdetailsPage } from '../modal-productdetails/modal-productdetails.page';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {
  @Input() productrecomend: any = [];
  datarandom:boolean = true;

  data = {
    search:null,
    lat_origin:null,
    lon_origin:null,
  }
  product:any = [];
  local: any = [];
  busquedad = null;

  constructor(public modalController: ModalController , 
              public modalController2: ModalController,
              private util: UtilitiesService,
              private geolocation: Geolocation,
              private navCtrl: NavController,
              private local_service: LocalService,
              private service: AuthService) { }

  ngOnInit() {
    // this.getCompany()
    console.log(this.productrecomend)
  }

  salir(){
    this.modalController.dismiss()
  }

  
  get(valor){
    this.data.search = valor.target.value.toLowerCase() 
    // console.log(valor.target.value.toLowerCase() )
  }

  async search(){
    this.datarandom = false
    //  this.data.search = evento.target.value
      if(!this.data.search){
        return
      }

    let geo = await this.geolocation.getCurrentPosition();
    // geo.coords.latitude 
    this.data.lat_origin = 11.07511
    // geo.coords.longitude 
    this.data.lon_origin = -63.970445

    this.util.displayLoading();
    const productos:any = await this.service.searchFood(this.data)
    this.product = productos.Products
    this.local = productos.companies

    console.log( "produco encontrado" , this.product)
    console.log( "local encontrado" ,  this.local)
  
     if(this.product.length > 0 ){
       this.busquedad = `${this.product.length} Producto encontrado`
     }else{
      this.busquedad = "Producto o local no encontrado"
     }

    this.util.dismissLoading();

  }

  getCompany() {
    // this.util.displayLoading();
    // this.local_service.getLocalDataById(8).then(
    //   (res) => {
    //     this.local = res["company"];
    //     console.log("compañia,", this.local);
    //     this.util.dismissLoading();
    //   },
    //   (err) => {
    //     this.util.dismissLoading();
    //   }
    // );
  }

  golocal(item:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(item),
      },
    };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }

  async modalproductosdetalles(product) {
    // CIERRA EL MODAL BUSCADOR
    this.modalController.dismiss();
    
    // ABRE EL MODAL DE DETALLLE PRODUCTOS  
    const modal = await this.modalController2.create({
      component: ModalProductdetailsPage,
      cssClass: "productosdetalles-modal",
      componentProps: {
        product: product,
      },
    });

    //  ejecuta el modal
     await modal.present();
  }

  onClick(){
    console.log("buscar")
  }

  goto(empresa:any){
    console.log(empresa)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.local),
      },
    };
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/local", navigationExtras);
  }

}
