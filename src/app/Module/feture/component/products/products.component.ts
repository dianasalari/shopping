import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { ActivatedRoute, Router } from '@angular/router';
import { dressPage1 } from 'src/app/Data/WomensGounes';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
filterData:any
singleFilterData:any;
dressPage1:any;
category: string = '';

constructor(private router:Router,private activateRoute:ActivatedRoute){

}


ngOnInit(){
this.filterData=filters;
this.singleFilterData=singleFilter
this.dressPage1=dressPage1

this.activateRoute.paramMap.subscribe(params => {
  this.category = params.get('category') ?? ''; 
});

}



handleMultipleSelectFilter(value:string,sectionId:string){
  const queryParams = {...this.activateRoute.snapshot.queryParams}
  console.log(queryParams)
  const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(","): [];
  
  const valueIndex = filterValues.indexOf(value);
  console.log(queryParams)
  if(valueIndex !=-1){
    filterValues.splice(valueIndex,1)
  }else{
    filterValues.push(value);
  }



  if(filterValues.length > 0){
    queryParams[sectionId]=filterValues.join(",")
  }
  else{
    delete queryParams[sectionId];
  }
  this.router.navigate([], { queryParams: queryParams });
}




handelSingleSelectFilter(value:string,sectionId:string){
  const queryParams = {...this.activateRoute.snapshot.queryParams}
  queryParams[sectionId]=value;


  this.router.navigate([], { queryParams: queryParams });

}


}

