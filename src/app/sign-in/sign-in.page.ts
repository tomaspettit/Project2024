import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class SignInPage implements OnInit {
  myEmail:string="";
  myPassword:string="";
  constructor(private storage: Storage, private alertController: AlertController, private router: Router) { }

  async signIn() {
    if (this.myEmail == '' && this.myPassword == '') {
      const alert = await this.alertController.create({
        header: 'Invalid Signing In',
        message: 'Both email and password must be entered to this account.',
        buttons: ['Try Again'],
      });
      await alert.present();
    } else {
      await this.storage.create();
      await this.storage.get("signed").then(()=>{
        this.router.navigate(['/menu']);
      }).catch((error)=>{
          console.log(error);
        });
    }
  }

  ngOnInit() {
  }

}