import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent}  from './main/admin/sign-in/sign-in.component'
import { DashboardHomeComponent } from './main/dashboard/dashboard-home/dashboard-home.component';
const routes: Routes = [
  // {path:'',component: HomeComponent},
  // { path: 'danh-sách-sản-phẩm', component: ListProductsComponent },
  // { path: 'sản-phẩm', component: ProductComponent },
  // { path: 'admin', loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule) },
  { path: 'admin', component: SignInComponent },
  { path: 'dashboard', loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', component: DashboardHomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
