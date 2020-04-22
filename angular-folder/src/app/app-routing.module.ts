import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './pages/registration/registration.component';
import {LoginComponent} from './pages/login/login.component';

// http://localhost:4200 -> LoginComponent
// http://localhost:4200/registration -> RegistrationComponent
const main: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
