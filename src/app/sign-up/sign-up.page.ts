import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';
import { lockClosed } from 'ionicons/icons';

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

  constructor(private alertController: AlertController, private storage:Storage, private router:Router) {
    addIcons({person, lockClosed});
  }

  async signUp() {
    //Both email & passwords are not input just yet
    if (this.myEmail == '' && this.myPassword == '') {
        const alert = await this.alertController.create({
        header: 'Invalid Signing Up',
        message: 'Both email and password must be entered to this account.',
        buttons: ['Try Again'],
      });
      await alert.present();
      this.myEmail='';
      this.myPassword='';
    } 
    //Both passwords are not equal
    else if (this.myPassword != this.myPassword2) {
      const alert = await this.alertController.create({
        header: 'Invalid Signing Up',
        message: 'Both passwords must be the same',
        buttons: ['Try Again'],
      });
      await alert.present();
      this.myEmail='';
      this.myPassword='';
      this.myPassword2='';
    } 
    //Both email & passwords has been input
    else {
      await this.storage.create();
      await this.storage.set("email", this.myEmail)
      .then(()=>{
        this.router.navigate(['/menu']);
        this.myEmail='';
      }).catch((error)=>{
        console.log(error);
      });
      await this.storage.set("password", this.myPassword)
      .then(()=>{
        this.router.navigate(['/menu']);
        this.myPassword='';
        this.myPassword2='';
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

}