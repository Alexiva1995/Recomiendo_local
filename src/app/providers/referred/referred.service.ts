import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root",
})
export class ReferredService {
  constructor(private api: ApiService) {}

  /**
   * Método para agregar referido
   * @param sponsor_id id del referido*
   * **/
  public sendRefered(sponsor_id) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/user/update", sponsor_id, true);
      seq.subscribe(
        (res: any) => {
          resolve(res);
          console.log(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
