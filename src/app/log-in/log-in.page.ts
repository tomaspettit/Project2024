import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import{ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { addIcons} from 'ionicons';
import { home, person, lockClosed, alertCircle, checkmarkCircle, personAdd } from 'ionicons/icons';

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
  constructor(private storage: Storage, private toastController: ToastController, private router: Router) { 
    addIcons({ home, person, lockClosed, alertCircle, checkmarkCircle, personAdd });
  }

  async ionViewWillEnter(){
    this.myEmail  = await this.storage.get("email");
    this.myPassword = await this.storage.get("password");
  }

  async signIn() {
    //Email isn't the same & password isn't to your own account
    if (this.e2 != this.myEmail && this.p2 != this.myPassword) {
      const toast = await this.toastController.create({
        message: 'Invalid Signing In. Both email and password must be entered to this account. Or create your account',
        duration: 3000,
        icon: alertCircle,
        swipeGesture:"vertical",
        position:"bottom",
        positionAnchor:"footer",
      });
      await toast.present();
    }
    else if(this.e2 == '' && this.p2 == ''){
      const toast = await this.toastController.create({
      message: 'Invalid Signing In. Both email and password must input to your account',
      duration: 3000,
      icon: alertCircle,
      swipeGesture:"vertical",
      position:"bottom",
      positionAnchor:"footer",
      });
      await toast.present();
    }
    //Email & password are both the same to your account
     else {
      const toast = await this.toastController.create({
        message: 'Log In Success',
        duration: 3000,
        icon: checkmarkCircle,
        swipeGesture:"vertical",
        position:"bottom",
        positionAnchor:"footer",
        });
        await toast.present();
        this.router.navigate(['/menu']);
    }
  }

}