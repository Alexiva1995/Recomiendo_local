import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../providers/auth/auth.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';
import { CONSTANTES } from '../../providers/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-recoverpassword',
  templateUrl: './modal-recoverpassword.page.html',
  styleUrls: ['./modal-recoverpassword.page.scss'],
})
export class ModalRecoverpasswordPage implements OnInit {
  public formGroup: FormGroup;

  constructor(  public modalController: ModalController,
                private fb: FormBuilder,
                private service: AuthService,
                private utilities: UtilitiesService,) { 
        this.formGroup = this.fb.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        })
      }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss()
  }


  async Recoverpassword() {

    await this.utilities.displayLoading();
    try {
      // Iniciamos la consulta
      this.service.Recoverpassword(this.formGroup.value).then((res: any) => {
        this.utilities.dismissLoading();

        if( res['message'].includes("Success") ){
          this.utilities.displayToastButtonTime('Su contraseña ha sido enviada');
        }else{
          this.utilities.displayToastButtonTime('El Correo no existe');
        }

      }, e => {
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





}
