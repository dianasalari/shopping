import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
orders=[1,1,1,1]
steps=[
  {id:0,title:'PLACED',isCompeleted:true},
  {id:1,title:'CONFIRMED',isCompeleted:true},
  {id:2,title:'SHIPPED',isCompeleted:false},
  {id:3,title:'DELIVERD',isCompeleted:false},
]
}
