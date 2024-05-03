import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import{person} from 'ionicons/icons';
import { lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class LogInPage{
  myEmail:string="";
  myPassword:string="";
  e2:string="";
  p2:string="";
  constructor(private storage: Storage, private alertController: AlertController, private router: Router) { 
    addIcons({person, lockClosed});
  }

  async ionViewWillEnter(){
    this.myEmail  = await this.storage.get("email");
    this.myPassword = await this.storage.get("password");
  }

  async signIn() {
    //Email isn't the same & password isn't to your own account
    if (this.e2 != this.myEmail && this.p2 != this.myPassword) {
      const alert = await this.alertController.create({
        header: 'Invalid Signing In',
        message: 'Both email and password must be entered to this account. Or create your account',
        buttons: ['Try Again'],
      });
      await alert.present();
      this.e2='';
      this.p2='';
    }
    //Email & password are both the same to your account
     else {
        this.router.navigate(['/menu']);
        this.e2='';
        this.p2='';
    }
  }

}