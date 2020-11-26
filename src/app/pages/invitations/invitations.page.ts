import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Clipboard } from "@ionic-native/clipboard/ngx";
import { Contacts } from "@ionic-native/contacts/ngx";
import { UtilitiesService } from '../../providers/utilities/utilities.service';

@Component({
  selector: "app-invitations",
  templateUrl: "./invitations.page.html",
  styleUrls: ["./invitations.page.scss"],
})
export class InvitationsPage implements OnInit {
  public myAngularxQrCode: string = null;
  user: any;
  qrcodechild: any;
  mobile: string;
  @ViewChild("qrElement") qrElement: ElementRef;
  constructor(
    public menu: MenuController,
    public router: Router,
    private socialSharing: SocialSharing,
    private clipboard: Clipboard,
    private contacts: Contacts,
    private util: UtilitiesService,
  ) {
  }



  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
    this.myAngularxQrCode = "Rec-" + this.user.user.id;
    console.log(this.user.user.id)
  }



  copy() {
    // copiar al portapales
    // alert(this.myAngularxQrCode);
    this.util.displayToast("Copiado!");
    this.clipboard.copy(this.myAngularxQrCode);
  }

  shareWs() {
    this.socialSharing
      .shareViaWhatsApp(
        "Te invito a recomiendo App",
        this.qrElement["qrcElement"].nativeElement.children[0].toDataURL(),
        "https://Recomiendo.com"
      )
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
    console.log();
  }

  sharefb() {
    this.socialSharing
      .shareViaFacebook(
        "Te invito a recomiendo App",
        this.qrElement["qrcElement"].nativeElement.children[0].toDataURL(),
        "https://Recomiendo.com"
      )
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
    console.log();
  }

  shareGmail() {
    this.socialSharing
      .shareViaEmail(
        "Te invito a recomiendo App COD:" + "Rec-" + this.user.id,
        "Recomiendo-App",
        []
      )
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
    console.log();
  }

  share() {
    this.socialSharing
      .share(
        "Te invito a recomiendo App",
        "Recomiendo-App",
        this.qrElement["qrcElement"].nativeElement.children[0].toDataURL(),
        "https://Recomiendo.com"
      )
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
    console.log();
  }

  sharesms() {
    this.contacts.pickContact().then(
      (res) => {
        this.mobile = res.phoneNumbers[0].value;
        this.socialSharing
          .shareViaSMS(
            "Te invito a recomiendo App COD:" + "Rec-" + this.user.user.id,
            this.mobile
          )
          .then(() => {
            // Success!
          })
          .catch(() => {
            // Error!
          });
        console.log();
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
}
