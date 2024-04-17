import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from '../shared/components/navbar/nav-content/nav-content.component';
import{ MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { AddressCartComponent } from './components/address-cart/address-cart.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCartComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCartComponent,
    OrderTrackerComponent


  ]
})
export class SharedModule { }
