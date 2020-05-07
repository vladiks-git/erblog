import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from "./page/before authorization/first-page/first-page.component";
import {RegistrationComponent} from "./page/before authorization/registration/registration.component";
import {SuccessfullyComponent} from "./page/before authorization/Alert/successfully/successfully.component";
import {FeedComponent} from "./page/blog-feed/feed/feed.component";
import {ErrorRegComponent} from "./page/before authorization/Alert/error-reg/error-reg.component";


const main: Routes = [
  {path: '', component: FirstPageComponent, children: [
      {path: 'success', component: SuccessfullyComponent}
    ]},
  {path: 'registration', component: RegistrationComponent, children: [
      {path: 'error', component: ErrorRegComponent}
    ]},
  {path: 'feed', component: FeedComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
