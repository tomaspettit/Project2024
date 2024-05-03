import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';
import { logIn } from 'ionicons/icons';
import { card } from 'ionicons/icons';
import {person} from 'ionicons/icons';
import { call } from 'ionicons/icons';
import { personAdd } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//API Food Menu
import { FoodMenuService } from '../Services/food-menu.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class OrderPage implements OnInit {
 email: string='';
 phoneNo: string = '';
 totalPrice: number= 0;
 

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


  constructor(private alertController: AlertController, private router: Router, private fm: FoodMenuService) { 
    addIcons({home, logIn, card, person, personAdd, call});
  }

  async backHTHome(){
    this.router.navigate(['/hthome']);
    this.email='';
    this.phoneNo='';
  }

  async hasOrder(){
    //Hasn't input them all yet
    if(this.email == '' && this.phoneNo == ''){
        const alert = await this.alertController.create({
        header: 'Invalid Ordered',
        message: 'You must input your email & your phone No.',
        buttons: ['Try Again!'],
      });
      await alert.present();
    }
    //All has been input
    else{
        const alert = await this.alertController.create({
        header: 'Ordering Food Success',
        message: 'Thank you for ordering at the Hot & Tasty Takeaway',
        buttons: ['OK'],
      });
      await alert.present();
      this.email=''
      this.phoneNo='';
      this.router.navigate(['/home']);
    }
  }

  customQuantity = {
    header: 'Quantity',
    subHeader: 'How many would you get from the takeaway',
    message: 'Select only one of those quantities',
    translucent: true,
  };

  customChips = {
    header: 'Chips',
    subHeader: 'Select your chips',
    message: 'Choose any chips you can apply',
    translucent: true,
  };

  customSauce = {
    header: 'Sauce',
    subHeader: 'Select your favorite sauce',
    message: 'Choose any sauces you can apply',
    translucent: true,
  };

  customBurger = {
    header: 'Burger',
    subHeader: 'Select your burgers',
    message: 'Choose any burgers you can apply',
    translucent: true,
  };

  customKebab = {
    header: 'Kebab',
    subHeader: 'Select your favorite kebabs',
    message: 'Choose any kebabs you can apply',
    translucent: true,
  };

  customWraps = {
    header: 'Wraps',
    subHeader: 'Select your wrap',
    message: 'Choose any wraps you can apply',
    translucent: true,
  };

  customSideOrder = {
    header: 'Side Order',
    subHeader: 'Select your side order',
    message: 'Choose any side orders you can apply',
    translucent: true,
  };

  customFish = {
    header: 'Fish',
    subHeader: 'Select your fish',
    message: 'Choose any fishes you can apply',
    translucent: true,
  };

  customFriedChicken = {
    header: 'Fried Chicken',
    subHeader: 'Select your fried chicken',
    message: 'Choose any fried chicken you can apply',
    translucent: true,
  };

  customKidsMeal = {
    header: 'Kids Meal',
    subHeader: 'Select your kids meal',
    message: 'Choose any kids meal you can apply',
    translucent: true,
  };

  customMealDeals = {
    header: 'Meal Deal',
    subHeader: 'Select your meal',
    message: 'Choose any meals you can apply',
    translucent: true,
  };

  customBeverages = {
    header: 'Beverages',
    subHeader: 'Select your drinks',
    message: 'Choose any drinks you can apply',
    translucent: true,
  };

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

