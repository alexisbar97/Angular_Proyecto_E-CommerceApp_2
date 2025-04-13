import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'my-purchases', component: MyPurchasesComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
