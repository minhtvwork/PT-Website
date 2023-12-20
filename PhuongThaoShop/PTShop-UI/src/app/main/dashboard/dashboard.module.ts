import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';


const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  // ... other dashboard routes ...
];

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModule { }
