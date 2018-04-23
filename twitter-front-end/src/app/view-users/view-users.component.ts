import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {TweetService} from '../service/tweet.service';
import {User} from '../models/user.model';
import {Tweet} from '../models/tweet.model';
import {DataUserService} from '../service/data-user.service';

@Component({
  selector: 'app-view-users',
  // providers: [WhoToFollowComponent],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewUser: User;
  viewTweet: Tweet[];
  count = 0;
  usersFollowing: User[];
  usersFollowers: User[];
  loggedUsersFollowing: User[];
  userIsFollowed: boolean;
  loggedUsersFollowingIndex: number;
  loggedTwitterId: number;
  loggedUsername: string;
  viewingMainUser: boolean;

  constructor(private userService: UserService, private tweetService: TweetService,
              private route: ActivatedRoute, private dataUserService: DataUserService, private router: Router) {
  }

  ngOnInit() {
    this.loggedTwitterId = this.userService.getTwitterId();
    this.userIsFollowed = false;
    this.loggedUsersFollowing = this.userService.getLoggedUserFollowing();
    this.loggedUsername = this.userService.getLoggedUsername();

    this.route.data.subscribe(
      (data: Data) => {
        this.viewUser = data['user'];
        this.userService.setViewUser(this.viewUser);
        this.userService.setViewTwitterId(this.viewUser.twitterId);
        this.checkUserFollowing();
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.viewTweet = data['tweet'];
        this.tweetService.setViewTweets(this.viewTweet);
        this.count = this.viewTweet.length;
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.usersFollowing = data['following'];
        this.userService.setUsersFollowing(this.usersFollowing);
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.usersFollowers = data['followers'];
        this.userService.setUsersFollowers(this.usersFollowers);
      }
    );
  }

  checkUserFollowing() {
    if (this.loggedUsersFollowing.find(x => x.twitterName.toLocaleLowerCase() === this.viewUser.twitterName.toLocaleLowerCase())) {
      this.userIsFollowed = true;
    } else {
      this.userIsFollowed = false;
    }

    if (this.viewUser.twitterName.toLocaleLowerCase() === this.loggedUsername.toLocaleLowerCase()) {
      this.viewingMainUser = true;
    } else {
      this.viewingMainUser = false;
    }
  }

  onEditProfile() {
    this.router.navigate(['home/' + this.loggedUsername + '/edit']);
  }

  // onCallWhoToFollow() {
  //   this.whoToFollow.ngOnInit();
  // }

  onFollowUser() {
    const user = new User(this.viewUser.twitterId, this.viewUser.twitterName, this.viewUser.displayName, null, null, null);
    this.userService.addLoggedUserFollowing(user);
    this.loggedUsersFollowing = this.userService.getLoggedUserFollowing();
    this.userIsFollowed = true;
    this.dataUserService.updateUserFollowing(this.loggedTwitterId, this.viewUser.twitterName);
    // this.onCallWhoToFollow();
    //
    // this.dataUserService.getUserFollowing(this.loggedUsername)
    //   .subscribe((result) => {
    //     const loggedUserFollowing = result;
    //     console.log(loggedUserFollowing);
    //     this.userService.setLoggedUserFollowing(loggedUserFollowing);
    //   });
    //
    //
    //
    // this.userService.setLoggedUserFollowing(this.loggedUserFollowing);
  }

  onUnfollowUser() {
    this.loggedUsersFollowingIndex = this.loggedUsersFollowing.findIndex(x => x.twitterName.toLocaleLowerCase() ===
      this.viewUser.twitterName.toLocaleLowerCase());
    this.userService.removeLoggedUserFollowing(this.loggedUsersFollowingIndex);
    this.loggedUsersFollowing = this.userService.getLoggedUserFollowing();
    this.userIsFollowed = false;
    this.dataUserService.updateUserFollowing(this.loggedTwitterId, this.viewUser.twitterName);
    // this.onCallWhoToFollow();
  }
}
