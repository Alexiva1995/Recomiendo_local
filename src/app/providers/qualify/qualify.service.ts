import { ApiService } from "./../api/api.service";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class QualifyService {
  constructor(private api: ApiService) {}

  

  // envio de calificaciones
  public sendQualify(products) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post(
        "api/auth/product/rate",
        products,
        true
      );
      seq.subscribe(
        (res: any) => {
          resolve(res);
          console.log(res)
        },
        (err) => {
          reject(err);
        }
      );
    });
  }


}
