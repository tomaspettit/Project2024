import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import{ToastController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, person, lockClosed, alertCircle, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class SignUpPage{
  myEmail: string = '';
  myPassword: string = '';
  myPassword2: string = '';

  constructor(private toastController: ToastController, private storage:Storage, private router:Router) {
    addIcons({home, person, lockClosed, alertCircle, checkmarkCircle});
  }

  async backButton(){
    const toast = await this.toastController.create({
      message: 'You return to Hot & Tasty Home page',
      duration: 3000,
      icon: home,
    });
    await toast.present();
  }

  async signUp() {
    //Both email & passwords are not input just yet
    if (this.myEmail == '' && this.myPassword == '') {
        const toast = await this.toastController.create({
        message: 'Invalid Signing Up. Both email and password must be entered to this account.',
        duration: 5000,
        icon: alertCircle,
      });
      await toast.present();
    } 
    //Both passwords are not equal
    else if (this.myPassword != this.myPassword2 && this.myPassword.length != this.myPassword2.length) {
      const toast = await this.toastController.create({
        message: 'Invalid Signing Up. Both passwords must be the same',
        duration: 3000,
        icon: alertCircle,

      });
      await toast.present();
    } 
    //Both email & passwords has been input
    else {
      const toast = await this.toastController.create({
        message: 'Sign Up Success',
        duration: 3000,
        icon: checkmarkCircle,
        });
        await toast.present();
      await this.storage.create();
      await this.storage.set("email", this.myEmail)
      .then(()=>{
        this.router.navigate(['/menu']);
      }).catch((error)=>{
        console.log(error);
      });
      await this.storage.set("password", this.myPassword)
      .then(()=>{
        this.router.navigate(['/menu']);
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

}