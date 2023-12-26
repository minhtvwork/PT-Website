import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
 {path:'',component: HomeComponent},
 {path:'sản-phẩm',component:ListProductComponent},
 {path:'giỏ-hàng', component:CartComponent},
 {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
