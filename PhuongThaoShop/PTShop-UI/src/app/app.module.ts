import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AppComponent } from './app.component';
import { FooterComponent } from './main/dashboard/footer/footer.component';
import { ListProductsComponent } from './main/dashboard/list-products/list-products.component';
import { SignInComponent}  from './main/admin/sign-in/sign-in.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListProductsComponent,
    SignInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
