import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { PostComponent } from './post/post.component';

import { ReplySectionComponent } from './reply-section/reply-section.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentBlogComponent } from './comment-blog/comment-blog.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ActivatedComponent } from './activated/activated.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {
  FacebookLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ReactionsComponent } from './reactions/reactions.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    ContactComponent,
    BlogOneComponent,
    BlogTwoComponent,
    SingleBlogComponent,
    PostComponent,
  
    ReplySectionComponent,
    PostSearchComponent,
    PopularPostsComponent,
    PostFormComponent,
    CommentBlogComponent,
    ForgetPasswordComponent,
    ResetPwdComponent,
    ActivatedComponent,
    EditProfilComponent,
    UpdatePostComponent,
    ReactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2353063484872542'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
