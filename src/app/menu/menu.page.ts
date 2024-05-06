import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import {ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';
import { logIn } from 'ionicons/icons';
import { personAdd } from 'ionicons/icons';
import { card } from 'ionicons/icons';

//API Food Menu
import { FoodMenuService } from '../Services/food-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {
  //Food Categories
  beverage:any=[];
  burger:any=[];
  chip:any=[];
  fish:any=[];
  friedChicken:any=[];
  kebab:any=[];
  kMeal:any=[];
  mDeal:any=[];
  sauce:any=[];
  sideOrder:any=[];
  wrap:any=[];

  constructor(private fm: FoodMenuService, private toastController: ToastController, private router: Router) { 
    addIcons({home, personAdd, logIn, card});
  }

  async navigateOrder(){
    const toast = await this.toastController.create({
      message: 'You select order page. Prepared to order your selection of your food & drinks',
      duration: 3000,
      icon: card,
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
        this.router.navigate(['/order']);
        this.navigateOrder();
      },
    },
    {
      text: 'No',
      role: 'cancel',
      
    },
  ];

  ngOnInit(): void {
    this.fm.GetFoodData().subscribe(
      (data)=>{
        this.chip=data.Chips;
        this.burger=data.Burger;
        this.kebab=data.Kebab;
        this.wrap=data.Wraps;
        this.sideOrder=data.SideOrder;
        this.fish=data.Fish;
        this.friedChicken=data.FriedChicken;
        this.kMeal=data.KidsMeals;
        this.mDeal=data.MealDeals
        this.beverage=data.Beverages;
        this.sauce=data.Sauces;
      }
    );
  }

}
