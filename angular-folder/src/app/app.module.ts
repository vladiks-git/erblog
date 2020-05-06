import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/first page/registration/registration.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './pages/first page/login/login.component';
import {LoginAfRegComponent} from "./pages/first page/login-af-reg/login-af-reg.component";
import { ErrorComponent } from './pages/first page/error/error.component';
import {StartPageComponent} from "./pages/first page/start-page/start-page.component";
import { ContentComponent } from './pages/main-page/content/content.component';
import { PostPageComponent } from './pages/main-page/post-page/post-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LoginAfRegComponent,
    ErrorComponent,
    StartPageComponent,
    ContentComponent,
    PostPageComponent
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
