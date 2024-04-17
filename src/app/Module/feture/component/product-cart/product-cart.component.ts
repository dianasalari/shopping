import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
@Input() product:any
constructor(private router:Router){}

  
navigate(){
  console.log(this.product)
  this.router.navigate([`product-details/${5}`]);

}
}
