import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
