import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private api: ApiService) {}
  // ss
  public getOrders(params) {
    return new Promise(async (resolve, reject) => {
      const seq = this.api.post("api/auth/company/order/show", params, true);
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


  public updateOrders(data) {
    return new Promise(async (resolve, reject) => {
      const seq = this.api.post("api/auth/company/order/update", data, true);
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

  public getOrdersReady() {
    return new Promise(async (resolve, reject) => {
      const seq = this.api.post(
        "api/auth/purchase/show-order-ready",
        null,
        true
      );
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
