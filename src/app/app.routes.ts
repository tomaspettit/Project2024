import { Routes } from '@angular/router';
import { HTHomePage } from './hthome/hthome.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'order',
    loadComponent: () => import('./order/order.page').then((m)=>m.OrderPage),
  },
  {
    path: 'hthome',
    loadComponent: () => import('./hthome/hthome.page').then((m)=>m.HTHomePage),
  },
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.page').then((m)=>m.LogInPage),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then((m)=>m.SignUpPage),
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then((m)=>m.MenuPage),
  }
];
