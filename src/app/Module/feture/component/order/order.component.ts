import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders=[[1,1],[1,1,1]]
  orderFilter=[
    {value:"on_the_way" , label:"on The way"},
    {value:"Deliverd" , label:"Deliverd"},
    {value:"cancelled" , label:"cancelled"},
    {value:"Returened" , label:"Returned"}
  ]


  constructor(private router:Router){}
  navigateToOrderDetails(id:number){
this.router.navigate([`/order/${id}`])
  }
}
