import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';
import { logIn } from 'ionicons/icons';
import { personAdd } from 'ionicons/icons';
import { card } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class OrderPage implements OnInit {
 orderList: string = '';
  constructor(private alertController: AlertController, private router: Router) { 
    addIcons({home, logIn, personAdd, card});
  }

  async hasOrder(){
    if(this.orderList == ''){
        const alert = await this.alertController.create({
        header: 'Invalid Ordered',
        message: 'You must ordered something that you would like. Look at the menu again for what you want.',
        buttons: ['Try Again!'],
      });
      await alert.present();
      this.router.navigate(['/menu']);
    }
    else{
        const alert = await this.alertController.create({
        header: 'Ordering Food Success',
        message: 'Thank you for ordering at the Hot & Tasty Takeaway',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}

