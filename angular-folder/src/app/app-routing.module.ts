import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './pages/registration/registration.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginAfRegComponent} from "./pages/login-af-reg/login-af-reg.component";
import {ErrorComponent} from "./pages/error/error.component";
import {StartPageComponent} from "./pages/start-page/start-page.component";

// http://localhost:4200 -> LoginComponent
// http://localhost:4200/registration -> RegistrationComponent
// http://localhost:4200/login -> LoginAfRegComponent
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
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
