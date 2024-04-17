import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  updateCartItem(num:number){
    console.log(num)
  }
  @Input() showbutton:any;



  removeCartItem(){
    console.log('removeCartItem')
  }

}
