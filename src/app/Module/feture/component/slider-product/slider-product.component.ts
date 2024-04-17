import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.css']
})
export class SliderProductComponent {
  @Input()title:any
  @Input()products:any
  constructor(private router: Router) { }

  
}
