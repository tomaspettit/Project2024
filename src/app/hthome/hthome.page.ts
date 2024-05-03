import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { book, logIn, personAdd, home, card } from 'ionicons/icons';

@Component({
  selector: 'app-hthome',
  templateUrl: './hthome.page.html',
  styleUrls: ['./hthome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class HTHomePage {
  constructor(private router: Router) { 
    addIcons({book, logIn, personAdd, home, card});
  }

  public toastButtons = [
    {
      text: 'Yes',
      role: 'agreed',
    },
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        this.router.navigate(['/hthome']);
      },
    },
  ];

  public toastButtons2 = [
    {
      text: 'Yes',
      role: 'agreed',
    },
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        this.router.navigate(['/hthome']);
      },
    },
  ];
}
