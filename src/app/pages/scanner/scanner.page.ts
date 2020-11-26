import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ReferredService } from '../../providers/referred/referred.service';
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  constructor(    private barcodeScanner: BarcodeScanner,
                  private service: ReferredService,
                  public router: Router,
                  private utilities: UtilitiesService,
                  ) { }

  ngOnInit() {
    this.qrScan()
  }


  qrScan() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.sendReferred(barcodeData.text);
      this.router.navigateByUrl("/tutorial")
    }).catch(err => {
         console.log('Error', JSON.stringify(err));
     });
    
    }

    async sendReferred(id) {
      let sponsorId = {
        sponsor_id: id.replace("Rec-", ""),
      };
      await this.utilities.displayLoading();
      this.service.sendRefered(sponsorId).then(
        (resp) => {
          console.log(resp);
          this.utilities.dismissLoading();
        },
        (err) => {
          this.utilities.dismissLoading();
        }
      );
    }



}
