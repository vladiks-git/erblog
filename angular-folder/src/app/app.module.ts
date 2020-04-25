import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {LoginAfRegComponent} from "./pages/login-af-reg/login-af-reg.component";
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LoginAfRegComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
