import { Component,OnInit } from '@angular/core';
import { mensJeans } from '../../../../Data/men_jeans';
import { dressPage1 } from '../../../../Data/WomensGounes';
import { lehngacholiPage2 } from '../../../../Data/LehanagaCholi';
import { menskurta } from '../../../../Data/menskurta';
import { mensShoesPage1 } from '../../../../Data/Shoes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menJeans:any;
  WomensGounes:any;
  LehanagaCholi:any;
  menskurta:any;
  Shoes:any;


constructor(private router:Router)
{} 

ngOnInit(){
      this.menJeans=mensJeans.slice(0,5);
      this.WomensGounes=dressPage1.slice(0,5)
      this.LehanagaCholi=lehngacholiPage2.slice(0,5)
      this.menskurta=menskurta.slice(0,5)
      this.Shoes=mensShoesPage1.slice(0,5)
  }


  navigate(){
    this.router.navigate([`product`]);
  
  }
}
