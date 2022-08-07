import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { SellsComponent } from './components/sells/sells.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DummyComponent } from './containers/dummy/dummy.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { CurrencyComponent } from './components/currency/currency.component';
import { Currency1Component } from './components/currency1/currency1.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { LoginComponent } from './containers/login/login.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    SellsComponent,
    ProductListComponent,
    DummyComponent,
    ConversionPipe,
    CurrencyComponent,
    Currency1Component,
    CheckoutComponent,
    ErrorPageComponent,
    CartComponent,
    ProductDetailComponent,
    NumbersOnlyDirective,
    LoginComponent,
    LoginButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
