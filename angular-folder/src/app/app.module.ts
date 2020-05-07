import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { FirstPageComponent } from './page/before authorization/first-page/first-page.component';
import { RegistrationComponent } from './page/before authorization/registration/registration.component';
import { FeedComponent } from './page/blog-feed/feed/feed.component';
import {QuillModule} from "ngx-quill";
import { PostComponent } from './page/blog-feed/post/post.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    RegistrationComponent,
    FeedComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  exports:[QuillModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
