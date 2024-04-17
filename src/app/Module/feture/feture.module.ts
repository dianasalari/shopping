import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './component/feture/feture.component';
import { MainCarouselComponent } from './component/main-carousel/main-carousel.component';
import { SliderProductComponent } from './component/slider-product/slider-product.component';
import { HomeProductCardComponent } from './component/home-product-card/home-product-card.component';
import { HomeComponent } from './component/home/home.component';
import{ MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardReviewComponent } from './component/product-details/product-card-review/product-card-review.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressformComponent } from './component/checkout/addressform/addressform.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderCardComponent } from './component/order/order-card/order-card.component';


@NgModule({
  declarations: [
    FetureComponent,
    MainCarouselComponent,
    SliderProductComponent,
    HomeProductCardComponent,
    HomeComponent,
    ProductsComponent,
    ProductCartComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductCardReviewComponent,
    AddressformComponent,
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,
  exports:[
    FetureComponent,
    HomeComponent,
    ProductsComponent,
    ProductCartComponent,
    ProductDetailsComponent,


  ]
})
export class FetureModule { }
