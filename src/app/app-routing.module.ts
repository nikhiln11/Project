import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { DemoComponent } from './components/demo/demo.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { LoginComponent } from './containers/login/login.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  // home page : abc.com
  { path: '', component: DemoComponent },

  // products page : abc.com/products
  { path: 'products', component: ProductListComponent },
  //cart page
  { path: 'cart', component: CartComponent },
  { path:'',component: CurrencyComponent},
  { path:'login', component : LoginComponent},
  {path:'detail/:pid', component: ProductDetailComponent},
  // checkout page : abc.com/checkout
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
 //404 error page
  {path:"**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
