import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  hidden:boolean=false;
  constructor(private router: Router) {}

  //There 8 Browsers to go to get any takeaway you want by finding the nearest place

  async openHT(){
    this.router.navigate(['/hthome']);
    this.hidden=true;
  }

  async openMartinos(){
    await Browser.open({url: 'https://www.martinos.ie/'});
    this.hidden=true;
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

  async openDominos(){
    await Browser.open({url: 'https://www.dominos.ie/'});
  };

  async openSubway(){
    await Browser.open({url: 'https://www.subway.com/'});
  };

  async openBurgerKing(){
    await Browser.open({url: 'https://www.whopper.ie/'});
  };
}
