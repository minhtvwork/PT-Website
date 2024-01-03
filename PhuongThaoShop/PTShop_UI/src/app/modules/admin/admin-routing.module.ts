import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { VoucherComponent } from './component/voucher/voucher.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'voucher', component: VoucherComponent }
    ],
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
