import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './pages/registration/registration.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginAfRegComponent} from "./pages/login-af-reg/login-af-reg.component";

// http://localhost:4200 -> LoginComponent
// http://localhost:4200/registration -> RegistrationComponent
// http://localhost:4200/login -> LoginAfRegComponent
const main: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginAfRegComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
