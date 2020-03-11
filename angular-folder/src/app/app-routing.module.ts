import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";


const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "users", component: UsersPageComponent},
  {path: "registration", component: RegistrationPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
