import { ApiService } from "./../api/api.service";
import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  pedidos: any;
  localSelected: any;
  lastOrder: any;
  constructor(private api: ApiService, private geolocation: Geolocation) {}

  /**
   * Método para consultar products recomendados por amigos
   * **/
  public getProductsRecommendedByFriends() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get(
        "api/auth/user/products-recommended-by-friends",
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

  /**
   * Método para crear un pedido
   * @param listproducts Lista de productos del pedido*
   * **/
  public purchaseProducts(listproducts, order?, local?) {
    this.pedidos = order;
    this.localSelected = local;
    return new Promise((resolve, reject) => {
      const seq = this.api.post(
        "api/auth/product/purchase",
        listproducts,
        true
      );
      seq.subscribe(
        (res: any) => {
          this.lastOrder = res["Purchase"];
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public getMyProducts(company) {
    return new Promise((resolve, reject) => {
      let params = {
        company_id: company.companies_owner.id,
      };
      const seq = this.api.post("api/auth/company/product/show", params, true);
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

  /**
   * Mostrar productos que he recomendado
   
   * **/
  public getMyProductsRecommended() {
    return new Promise((resolve, reject) => {
      const seq = this.api.get(
        "api/auth/user/my-products-recommended",
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

  /* Método para consultar products mas recomendados
   * **/
  public async getProductsMostRecommended() {
    return new Promise(async (resolve, reject) => {
      let data = await this.geolocation.getCurrentPosition();
      let params = {
        lat_origin: /* data.coords.latitude */ 11.07511,
        lon_origin: /* data.coords.longitude */ -63.970445,
      };
      const seq = this.api.post("api/auth/product/show", params, true);
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

  public async sendProductRecommend(data) {
    return new Promise(async (resolve, reject) => {
      let params = {
        name: /* data.coords.latitude */ data.seller,
        address: /* data.coords.longitude */ data.address,
        comment: /* data.coords.longitude */ data.gusto,
        name_product: /* data.coords.longitude */ data.name,
        description_product: /* data.coords.longitude */ data.gusto,
        photo: /* data.coords.longitude */ data.photo,
        quality: /* data.coords.longitude */ 0,
        price: /* data.coords.longitude */ 0,
        attention: /* data.coords.longitude */ 0,
      };
      const seq = this.api.post("api/auth/product/recommend", params, true);
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

  getProducts() {
    return this.pedidos;
  }

  // categoria
  public getMyCategory() {
    return new Promise((resolve, reject) => {
      const seq = this.api.post(
        "api/auth/admin/product/subcategories",
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

  // producto
  public AddMyProduct(params) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/company/product/add", params, true);
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


    // producto
  public EditMyProduct(params) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/company/product/update", params, true);
      seq.subscribe(
        (res: any) => {
          resolve(res.Product);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  // imagen producto
  public AddPhotoProduct(params) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post(
        "api/auth/company/product/add-photo",
        params,
        true
      );
      seq.subscribe(
        (res: any) => {
          console.log(res)
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public EditPhotoProduct(params) {
    return new Promise((resolve, reject) => {
      const seq = this.api.post(
        "api/auth/company/product/update-photo",
        params,
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

  public getMyOrders(data) {
    var date = new Date();
    let params = {
      company_id: data.company_id,
      date:
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
    };
    return new Promise((resolve, reject) => {
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
}
