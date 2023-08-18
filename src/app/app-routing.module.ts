import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ActivatedComponent } from './activated/activated.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },

  { path: 'aboutMe', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogOne', component: BlogOneComponent },
  { path: 'blogTwo', component: BlogTwoComponent },
  { path: 'single-blog/:postId', component: SingleBlogComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'search', component: PostSearchComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'ResetPwd/:email', component: ResetPwdComponent },
  { path: 'activate', component: ActivatedComponent },
  { path: 'edit', component: EditProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  AboutUsComponent,
  LoginComponent,
  ContactComponent,
  BlogOneComponent,
  BlogTwoComponent,
  SingleBlogComponent,
  ComingsoonComponent,
  ForgetPasswordComponent,
];
