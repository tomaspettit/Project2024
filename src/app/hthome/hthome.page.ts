import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { addIcons } from 'ionicons';
import { book } from 'ionicons/icons';
import { logIn } from 'ionicons/icons';
import { personAdd } from 'ionicons/icons';
import { home } from 'ionicons/icons';
import { card } from 'ionicons/icons';

@Component({
  selector: 'app-hthome',
  templateUrl: './hthome.page.html',
  styleUrls: ['./hthome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class HTHomePage {
  constructor() { 
    addIcons({book, logIn, personAdd, home, card});
  }
}
