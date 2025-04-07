import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-purchases', component: MyPurchasesComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
