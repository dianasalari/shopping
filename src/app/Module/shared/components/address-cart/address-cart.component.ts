import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-cart',
  templateUrl: './address-cart.component.html',
  styleUrls: ['./address-cart.component.css']
})
export class AddressCartComponent {
@Input() address:any
}
