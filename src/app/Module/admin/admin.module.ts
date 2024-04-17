import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { OrderTableComponent } from './component/order-table/order-table.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CreateProductComponent } from './component/create-product/create-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    OrderTableComponent,
    CustomersComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
