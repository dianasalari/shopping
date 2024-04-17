import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrderComponent } from '../feture/component/order/order.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CreateProductComponent } from './component/create-product/create-product.component';

const routes: Routes = [
  {path:"",component:AdminComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"products",component:AdminProductsComponent},
    {path:"orders",component:OrderComponent},
    {path:"customers",component:CustomersComponent},
    {path:"product-create",component:CreateProductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
