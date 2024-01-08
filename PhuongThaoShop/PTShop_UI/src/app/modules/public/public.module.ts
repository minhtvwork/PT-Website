import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { CartComponent } from './component/cart/cart.component';
import { MaterialModule } from 'src/app/material-module';
import { AntDesignModule } from 'src/app/ant-design.module';
import { LoginModalComponent } from './component/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CartComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    AntDesignModule,
  ]
})
export class PublicModule { }
