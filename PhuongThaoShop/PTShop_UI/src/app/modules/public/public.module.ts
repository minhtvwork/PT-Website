import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { CartComponent } from './component/cart/cart.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ]
})
export class PublicModule { }
