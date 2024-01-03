import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MaterialModule } from '../../material-module';
import { VoucherComponent } from './component/voucher/voucher.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    MenubarComponent,
    VoucherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
