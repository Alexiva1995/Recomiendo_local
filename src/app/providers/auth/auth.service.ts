import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) { }


    /**
   * Método para registrar un usuario
   * @param data Datos del usuario*
   * **/
  public signUp(data: any) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/register', data);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

    /**
   * Método para iniciar sesion un usuario
   * @param data Datos del usuario*
   * **/
  public signIn(data) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post('api/auth/login', data);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public logOut() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get('api/auth/logout', null, true);
      seq.subscribe((res: any) => {
        resolve(res);
        localStorage.clear();
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

     /**
   * Método para obtener la informacion del usuario logueado
   * **/
  public getUser() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get('api/auth/user', null, true);
      seq.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  public editUser(data) {
      if (!data.password){
        delete data.password
        delete data.repassword
      }

    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/user/update', data, true);
      observer.subscribe((res: any) => {
        console.log("que me devuelve",res)
        resolve(res);
      }, err => {
        reject(err);
      });
    })

  }

  public updateAvatar(data) {
    const object = {photo:data}
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/user/update-avatar', object, true);
      observer.subscribe((res: any) => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }


  //actualizar 
  public updateAvatarCompany(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/admin/company/add-photo', data, true);
      observer.subscribe((res: any) => {
        console.log(res)
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }


    //actualizar 
  public editUserCompany(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/admin/company/update', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }
  
  public delete(){
   return true;
  }

  
  //mostrar product 
  public ProductShow(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/product/show', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  //buscar usuario
  public searchUser(data,page) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post(`api/auth/product/search?page=${page}`, data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }


  //buscar producto
  public searchFood(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post(`api/auth/product/search`, data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  //producto 
  public ProductRecommend(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/product/recommend', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  //Recuperar contraseña 
  public Recoverpassword(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.post('api/auth/reset-password', data, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }

  //obtener personal
  public getRed(data) {
    return new Promise((resolve, reject) => {
      let observer:Observable<any> = this.api.get(`api/auth/user/myred/${data}`,null, true);
      observer.subscribe((res: any) => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    })
  }
 
}
