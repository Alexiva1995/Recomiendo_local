import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
@Injectable({
  providedIn: "root",
})
export class AwardsService {
  constructor(private api: ApiService, private geolocation: Geolocation) {}
  public getAwardsMostRecommended() {
    return new Promise(async (resolve, reject) => {
      let data = await this.geolocation.getCurrentPosition();
      let params = {
        lat_origin: /* data.coords.latitude */ 11.07511,
        lon_origin: /* data.coords.longitude */ -63.970445,
      };
      const seq = this.api.post("api/auth/award/show", params, true);
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

  public getAwardsInWaiting() {
    return new Promise(async (resolve, reject) => {
      let data = await this.geolocation.getCurrentPosition();
      let params = {
        lat_origin: /* data.coords.latitude */ 11.07511,
        lon_origin: /* data.coords.longitude */ -63.970445,
      };
      const seq = this.api.post("api/auth/award/myawards", null, true);
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

  public clainAward(params) {
    return new Promise(async (resolve, reject) => {
      const seq = this.api.post("api/auth/award/gain", params, true);
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
