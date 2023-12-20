import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // {path:'',component: HomeComponent},
  // { path: 'danh-sách-sản-phẩm', component: ListProductsComponent },
  // { path: 'sản-phẩm', component: ProductComponent },
  { path: 'admin', loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule) },
  { path: 'dashboard', loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
