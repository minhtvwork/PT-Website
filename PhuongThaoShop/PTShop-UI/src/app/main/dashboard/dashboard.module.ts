import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
