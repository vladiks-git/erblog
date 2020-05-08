import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from "./page/before authorization/first-page/first-page.component";
import {RegistrationComponent} from "./page/before authorization/registration/registration.component";
import {FeedComponent} from "./page/blog-feed/feed/feed.component";
import {PostComponent} from "./page/blog-feed/post/post.component";
import {OnePostComponent} from "./page/blog-feed/one-post/one-post.component";


const main: Routes = [
  {path: '', component: FirstPageComponent, children: [
      {path: '', component: PostComponent}
    ]},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'feed', component: FeedComponent, children: [
      {path: '', component: PostComponent}
    ]},
  {path: 'onepost/:id', component: OnePostComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(main)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
