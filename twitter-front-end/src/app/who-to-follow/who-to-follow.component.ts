import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Data} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-who-to-follow',
  templateUrl: './who-to-follow.component.html',
  styleUrls: ['./who-to-follow.component.css']
})
export class WhoToFollowComponent implements OnInit {
loggedUserFollowing: User[];
whoToFollow = [];
  // whoToFollowChanged = new Subject<User[]>();
allUsers: User[];
loggedUsername: string;
// subscription: Subscription;


  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedUsername = this.userService.getLoggedUsername();
    this.loggedUserFollowing = this.userService.getLoggedUserFollowing();
    this.allUsers = this.userService.getAllUsers();

    if (this.loggedUserFollowing == null) {
      this.route.data.subscribe(
        (data: Data) => {
          this.allUsers = data['allUsers'];
          this.userService.setAllUsers(this.allUsers);
        }
      );

      this.route.data.subscribe(
        (data: Data) => {
          this.loggedUserFollowing = data['following'];
          this.userService.setLoggedUserFollowing(this.loggedUserFollowing);
        }
      );
    }

    for (const user of this.allUsers) {
      if (!this.loggedUserFollowing.find(el => el.twitterName === user.twitterName)
        && this.loggedUsername !== user.twitterName.toLocaleLowerCase()) {
        this.whoToFollow.push(user);
      }
    }
    //
    // this.whoToFollowChanged.next(this.whoToFollow);
    // this.subscription = this.whoToFollowChanged
    //   .subscribe(
    //     (user: User[]) => {
    //       this.whoToFollow = user;
    //     }
    //   );
    // console.log(this.whoToFollow);

  }
}
