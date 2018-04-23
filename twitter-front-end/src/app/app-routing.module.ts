import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {ApiUserResolverService} from './service/api-user-resolver.service';
import {ApiTweetResolverService} from './service/api-tweet-resolver.service';
import {ApiUserIdResolverService} from './service/api-user-id-resolver.service';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {ApiUserFollowingResolverService} from './service/api-user-following-resolver.service';
import {ViewUsersComponent} from './view-users/view-users.component';
import {ApiTweetResolverOneUserService} from './service/api-tweet-resolver-one-user.service';
import {ViewUserFollowingComponent} from './view-users/view-user-following/view-user-following.component';
import {ViewTweetsComponent} from './view-users/view-tweets/view-tweets.component';
import {ViewUserFollowersComponent} from './view-users/view-user-followers/view-user-followers.component';
import {ApiUserFollowersResolverService} from './service/api-user-followers-resolver.service';
import {ApiAllUsersResolverService} from './service/api-all-users-resolver.service';
import {AuthGuardService} from './service/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent, resolve: {allUsers: ApiAllUsersResolverService}},
  {path: 'home', component: UserComponent,
    resolve: {
    following: ApiUserFollowingResolverService,
    allUsers: ApiAllUsersResolverService
    },
    canActivate: [AuthGuardService],
    children: [
    {path: ':user', component: UserDetailComponent,
      resolve: {
      user: ApiUserResolverService,
      tweet: ApiTweetResolverService,
      users: ApiUserIdResolverService}
      },
    {path: ':user/profile', component: UserProfileComponent}
    // ,{path: ':user/edit', component: EditUserComponent}
  ]},
  {path: 'home/:user/edit', component: EditUserComponent, canActivate: [AuthGuardService]},
  {path: 'view/:user', component: ViewUsersComponent,
    resolve: {
      user: ApiUserResolverService,
      tweet: ApiTweetResolverOneUserService,
      following: ApiUserFollowingResolverService,
      followers: ApiUserFollowersResolverService},
    canActivate: [AuthGuardService],
    children: [
    {path: '', component: ViewTweetsComponent, resolve: {tweet: ApiTweetResolverOneUserService}},
    {path: 'following', component: ViewUserFollowingComponent},
    {path: 'followers', component: ViewUserFollowersComponent}
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
