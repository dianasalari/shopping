import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Module/feture/component/home/home.component';
import { ProductsComponent } from './Module/feture/component/products/products.component';
import { CartComponent } from './Module/feture/component/cart/cart.component';
import { ProductDetailsComponent } from './Module/feture/component/product-details/product-details.component';
import { CheckoutComponent } from './Module/feture/component/checkout/checkout.component';
import { PaymentComponent } from './Module/feture/component/payment/payment.component';
import { OrderComponent } from './Module/feture/component/order/order.component';
import { OrderDetailsComponent } from './Module/feture/component/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';


const routes: Routes = [
  {path:'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)},
  {path:"",component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout/peyment/:id', component:PaymentComponent},
  {path:'lavelOne/:lavelTwo/:lavelThree',component:ProductsComponent},
  {path:'payment-success',component:PaymentComponent},
  {path:"account/orders",component:OrderComponent},
  {path:'order/:id', component:OrderDetailsComponent},
  {path:'product', component:ProductsComponent},
  { path: 'products/mens-jeans', component: ProductsComponent },
  { path: 'products/womens-dresses', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
