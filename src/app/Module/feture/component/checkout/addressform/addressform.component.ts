import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrls: ['./addressform.component.css']
})
export class AddressformComponent {
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    LastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    ZipCode:["",Validators.required],
    Mobile:["",Validators.required]
  })
 
constructor(private formBuilder:FormBuilder,private router:Router){}



  addresses=[1];
  handleCreateOrder(item:any){
    this.router.navigate(['/checkout/peyment/:id'])

  }

  handleSubmit=()=>{
    const formValue=this.myForm.value
    console.log("form data",formValue)
  }
}
