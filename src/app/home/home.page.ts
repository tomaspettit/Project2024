import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  constructor() {}

  async openMartinos(){
    await Browser.open({url: 'https://www.martinos.ie/'});
  };

  async openNicos(){
    await Browser.open({url: 'http://nicostakeaway.com/'});
  };

  async openSupermacs(){
    await Browser.open({url: 'https://supermacs.ie/'});
  };

  async openVillageKitchen(){
    await Browser.open({url: 'https://www.lunchtime.ie/'});
  };

  async openMcDonalds(){
    await Browser.open({url: 'https://www.mcdonalds.com/'});
  };
}
