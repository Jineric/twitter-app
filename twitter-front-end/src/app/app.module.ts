import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {WhoToFollowComponent} from './who-to-follow/who-to-follow.component';
import {TweetsComponent} from './tweets/tweets.component';
import {TweetDetailComponent} from './tweets/tweet-detail/tweet-detail.component';
import {NewTweetComponent} from './tweets/new-tweet/new-tweet.component';
import {DropdownDirective} from './models/dropdown.directive';
import {UserService} from './service/user.service';
import {TweetService} from './service/tweet.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {DataUserService} from './service/data-user.service';
import {ApiUserResolverService} from './service/api-user-resolver.service';
import {ApiTweetResolverService} from './service/api-tweet-resolver.service';
import {DataTweetService} from './service/data-tweet.service';
import {ApiUserIdResolverService} from './service/api-user-id-resolver.service';
import {AuthService} from './service/auth.service';
import {TokenStorageService} from './service/token-storage.service';
import {ViewUsersComponent} from './view-users/view-users.component';
import {ApiUserFollowingResolverService} from './service/api-user-following-resolver.service';
import {ApiTweetResolverOneUserService} from './service/api-tweet-resolver-one-user.service';
import { ViewTweetsComponent } from './view-users/view-tweets/view-tweets.component';
import { ViewTweetDetailComponent } from './view-users/view-tweets/view-tweet-detail/view-tweet-detail.component';
import { ViewUserFollowingComponent } from './view-users/view-user-following/view-user-following.component';
import { ViewUserFollowingDetailComponent } from './view-users/view-user-following/view-user-following-detail/view-user-following-detail.component';
import { ViewUserFollowersComponent } from './view-users/view-user-followers/view-user-followers.component';
import {ApiUserFollowersResolverService} from './service/api-user-followers-resolver.service';
import {ApiAllUsersResolverService} from './service/api-all-users-resolver.service';
import {AuthGuardService} from './service/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    EditUserComponent,
    SignupComponent,
    SigninComponent,
    WhoToFollowComponent,
    TweetsComponent,
    TweetDetailComponent,
    NewTweetComponent,
    DropdownDirective,
    UserDetailComponent,
    UserProfileComponent,
    ViewUsersComponent,
    ViewTweetsComponent,
    ViewTweetDetailComponent,
    ViewUserFollowingComponent,
    ViewUserFollowingDetailComponent,
    ViewUserFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, TweetService, DataUserService, DataTweetService, ApiUserResolverService, ApiTweetResolverService,
    ApiUserIdResolverService, ApiUserFollowingResolverService, ApiTweetResolverOneUserService, ApiUserFollowersResolverService,
    ApiAllUsersResolverService, AuthService, AuthGuardService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
