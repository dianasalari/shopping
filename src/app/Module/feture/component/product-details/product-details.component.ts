import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { dressPage1 } from 'src/app/Data/WomensGounes';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  SelectedSice:any;
  reviews=[1,1,1]
  relatedProducts:any;

 constructor(private router: Router){}

  ngOnInit(){
    this.relatedProducts=dressPage1
  }



  handleAddToCart(){
    console.log('selectedcart',this.SelectedSice)
     this.router.navigate(['cart'])
  }
}
