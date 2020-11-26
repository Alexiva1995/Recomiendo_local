import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root",
})
export class LocalService {
  constructor(private api: ApiService) {}

  /**
   * Método para consultar products recomendados
   * @param id id del referido*
   * **/
  public getLocalDataById(id) {
    let params = {
      id_company: id,
    };
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/company/show", params, true);
      seq.subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
