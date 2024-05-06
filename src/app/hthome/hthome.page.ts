import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, logIn, personAdd, home, card, helpCircle} from 'ionicons/icons';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-hthome',
  templateUrl: './hthome.page.html',
  styleUrls: ['./hthome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class HTHomePage {
  constructor(private router: Router, private toastController: ToastController) { 
    addIcons({book, logIn, personAdd, home, card, helpCircle});
  }

  /* For using the toastButtons, you can either click on yes for navigate to another page
  *  or click on no for staying on track */

async returnHome(){
  const toast = await this.toastController.create({
    message: 'You returning back to Home Page.',
    duration: 3000,
    icon: home,
    swipeGesture:"vertical",
    position:"bottom",
    positionAnchor:"footer",
  });
  await toast.present();
}

  async navigateMenu(){
    const toast = await this.toastController.create({
      message: 'You select menu page. Look at the menu and see what you want. And when your ready, go back to the Hot & Tasty Home Page & click the Order Takeaway button.',
      duration: 7500,
      icon: book,
      swipeGesture:"vertical",
      position:"bottom",
      positionAnchor:"footer",
    });
    await toast.present();
  }

  async navigateOrder(){
    const toast = await this.toastController.create({
      message: 'You select order page. Prepared to order your selection of your food & drinks',
      duration: 5000,
      icon: card,
      swipeGesture:"vertical",
      position:"bottom",
      positionAnchor:"footer",
    });
    await toast.present();
  }

  async navigateSignUp(){
    const toast = await this.toastController.create({
      message: 'You select sign up page. Please, create your own account',
      duration: 3000,
      icon: personAdd,
      swipeGesture:"vertical",
      position:"bottom",
      positionAnchor:"footer",
    });
    await toast.present();
  }

  async navigateLogIn(){
    const toast = await this.toastController.create({
      message: 'You select log in page. Please, log in your own account',
      duration: 3000,
      icon: logIn,
      swipeGesture:"vertical",
      position:"bottom",
      positionAnchor:"footer",
    });
    await toast.present();
  }

  public toastButtons = [
    {
      text: 'Yes',
      role: 'agreed',
      handler: () => {
        this.router.navigate(['/menu']);
        this.navigateMenu();
      },
    },
    {
      text: 'No',
      role: 'cancel',
      
    },
  ];

  public toastButtons2 = [
    {
      text: 'Yes', 
      role: 'agreed',
      handler: () => {
        this.router.navigate(['/order']);
        this.navigateOrder();
      },
    },
    {
      text: 'No',
      role: 'cancel',
    },
  ];

  public toastButtons3 = [
    {
      text: 'Yes', 
      role: 'agreed',
      handler: () => {
        this.router.navigate(['/home']);
        this.returnHome();
      },
    },
    {
      text: 'No',
      role: 'cancel',
    },
  ];

  public toastButtons4 = [
    {
      text: 'Sign Up', 
      role: 'sign-up',
      handler: () => {
        this.router.navigate(['/sign-up']);
        this.navigateSignUp();
      },
    },
    {
      text: 'Log In',
      role: 'log-in',
      handler: () => {
        this.router.navigate(['/log-in']);
        this.navigateLogIn();
      },
    },
  ];
}
