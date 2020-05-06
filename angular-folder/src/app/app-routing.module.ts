import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './pages/first page/registration/registration.component';
import {LoginComponent} from './pages/first page/login/login.component';
import {LoginAfRegComponent} from "./pages/first page/login-af-reg/login-af-reg.component";
import {ErrorComponent} from "./pages/first page/error/error.component";
import {StartPageComponent} from "./pages/first page/start-page/start-page.component";
import {MyPageComponent} from "./pages/main-page/my-page/my-page.component";


const main: Routes = [
  {path: '', component: StartPageComponent, children: [
      {path: '', component: LoginComponent, children: [
          {path: 'error', component: ErrorComponent}
        ]}
    ]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginAfRegComponent, children: [
      {path: '', component: LoginComponent, children: [
          {path: 'error', component: ErrorComponent}
        ]}
    ]},
  {path: 'page', component: MyPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
