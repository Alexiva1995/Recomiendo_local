import { Injectable } from "@angular/core";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { UtilitiesService } from "../utilities/utilities.service";
@Injectable({
  providedIn: "root",
})
export class PermissionsService {
  subscription: any;
  locationCoords: any;
  apiResponse: any;
  constructor(
    private diagnostic: Diagnostic,
    private androidPermissions: AndroidPermissions,

    private locationAccuracy: LocationAccuracy,
    private util: UtilitiesService
  ) {
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: "",
    };
  }
  //To check whether Location Service is enabled or Not
  async locationStatus() {
    return new Promise((resolve, reject) => {
      this.diagnostic
        .isLocationEnabled()
        .then((isEnabled) => {
          console.log("33", isEnabled);
          if (isEnabled === false) {
            resolve(false);
          } else if (isEnabled === true) {
            resolve(true);
          }
        })
        .catch((e) => {
          this.util.displayToast("Por favor encienda la ubicacion");
          reject(false);
        });
    });
  }
  async checkLocationEnabled() {
    return new Promise((resolve, reject) => {
      this.diagnostic
        .isLocationEnabled()
        .then(async (isEnabled) => {
          console.log("51", isEnabled);
          if (isEnabled === false) {
            //this.showToast("Por favor encienda la ubicacion Service");
            this.util.displayToast("Por favor encienda la ubicacion");
            await this.requestGPSPermission();
            resolve(false);
          } else if (isEnabled === true) {
            this.checkGPSPermission()
              .then((response) => {
                console.log(
                  response,
                  "checkGPSPermission-checkLocationEnabled"
                );
                this.apiResponse = response;
                if (this.apiResponse === false) {
                  reject(false);
                  console.log("Respondio que no");
                } else {
                  resolve(this.apiResponse);
                  console.log("Respondio que Si");
                }
              })
              .catch((e) => {
                console.log(e, "checkGPSPermission-checkLocationEnabled");
                reject(false);
              });
          }
        })
        .catch((e) => {
          //this.showToast("Por favor encienda la ubicacion");
          this.util.displayToast("Por favor encienda la ubicacion");

          reject(false);
        });
    });
  }
  //Check if application having GPS access permission
  async checkGPSPermission() {
    return new Promise((resolve, reject) => {
      this.androidPermissions
        .checkPermission(
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
        )
        .then(
          (result) => {
            console.log("93", result.hasPermission);
            if (result.hasPermission) {
              console.log("hasPermission-YES");
              //If having permission show 'Turn On GPS' dialogue
              this.askToTurnOnGPS().then((response) => {
                console.log(response, "askToTurnOnGPS-checkGPSPermission");
                if (this.apiResponse === false) {
                  reject(this.apiResponse);
                } else {
                  resolve(this.apiResponse);
                }
              });
            } else {
              console.log("hasPermission-NO");
              //If not having permission ask for permission
              this.requestGPSPermission().then((response) => {
                console.log(
                  response,
                  "requestGPSPermission-checkGPSPermission"
                );
                this.apiResponse = response;
                if (this.apiResponse === false) {
                  reject(this.apiResponse);
                } else {
                  resolve(this.apiResponse);
                }
              });
            }
          },
          (err) => {
            alert(err);
            reject(false);
          }
        );
    });
  }
  async requestGPSPermission() {
    return new Promise((resolve, reject) => {
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {
        if (canRequest) {
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
            )
            .then(
              () => {
                // call method to turn on GPS
                this.askToTurnOnGPS().then((response) => {
                  console.log(response, "askToTurnOnGPS-requestGPSPermission");
                  this.apiResponse = response;
                  if (this.apiResponse === false) {
                    console.log("148");

                    reject(this.apiResponse);
                  } else {
                    console.log("152");

                    resolve(this.apiResponse);
                  }
                });
              },
              (error) => {
                //Show alert if user click on 'No Thanks'
                console.log("159");
                alert(
                  "requestPermission Error requesting location permissions " +
                    error
                );
                reject(false);
              }
            );
        } else {
          //Show 'GPS Permission Request' dialogue
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
            )
            .then(
              () => {
                // call method to turn on GPS
                this.askToTurnOnGPS().then((response) => {
                  console.log(response, "askToTurnOnGPS-requestGPSPermission");
                  this.apiResponse = response;
                  if (this.apiResponse === false) {
                    console.log("179");

                    reject(this.apiResponse);
                  } else {
                    console.log("183");

                    resolve(this.apiResponse);
                  }
                });
              },
              (error) => {
                //Show alert if user click on 'No Thanks'
                console.log("190");
                alert(
                  "requestPermission Error requesting location permissions " +
                    error
                );
                reject(false);
              }
            );
        }
      });
    });
  }
  async askToTurnOnGPS() {
    return new Promise((resolve, reject) => {
      this.locationAccuracy
        .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
        .then(
          (resp) => {
            console.log(resp, "location accuracy");
            // When GPS Turned ON call method to get Accurate location coordinates
            if (resp["code"] === 0) {
              resolve(this.apiResponse);
              /*       this.getLocationCoordinates().then((cords) => {
              console.log(cords, "coords");
              this.apiResponse = cords;
              if (this.apiResponse === false) {
                reject(false);
              } else {
                resolve(this.apiResponse);
              }
            }); */
            }
            (error) => {
              alert("Error requesting location permissions");
              reject(false);
            };
          },
          (err) => {
            console.log("228", err);
            this.util.displayToast(
              "Disculpe debe activar el servicio de ubicación para poder hacer uso de Recomiendo"
            );
            this.askToTurnOnGPS();
          }
        );
    });
  }
}
