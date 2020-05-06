import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './pages/first page/registration/registration.component';
import {LoginComponent} from './pages/first page/login/login.component';
import {LoginAfRegComponent} from "./pages/first page/login-af-reg/login-af-reg.component";
import {ErrorComponent} from "./pages/first page/error/error.component";
import {StartPageComponent} from "./pages/first page/start-page/start-page.component";
import {ContentComponent} from "./pages/main-page/content/content.component";
import {PostPageComponent} from "./pages/main-page/post-page/post-page.component";


const main: Routes = [
 /* {path: '', component: StartPageComponent, children: [
      {path: '', component: LoginComponent, children: [
          {path: 'error', component: ErrorComponent}
        ]},
      {path: '', component: ContentComponent}
    ]},*/
  {path: '', component: StartPageComponent, children: [
      {path: '', component: ContentComponent, children:[
          {path: '', component: PostPageComponent}
        ]},
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
  {path: 'page', component: ContentComponent, children: [
      {path: '', component: PostPageComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
