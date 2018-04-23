import {AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {TweetService} from '../../service/tweet.service';
import {UserService} from '../../service/user.service';
import {Tweet} from '../../models/tweet.model';
import {User} from '../../models/user.model';
import {DataUserService} from '../../service/data-user.service';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, DoCheck {
  user: User;
  tweet: Tweet[];
  count = 0;
  loggedUsersFollowing: User[];


  constructor(private userService: UserService, private tweetService: TweetService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.user = data['user'];
        this.userService.setUser(this.user);
        this.userService.setTwitterId(this.user.twitterId);
      }
    );

    this.route.data.subscribe(
      (data: Data) => {
        this.tweet = data['tweet'];
        this.tweetService.setTweets(this.tweet);
      }
    );

    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.loggedUsersFollowing = data['following'];
    //     this.userService.setLoggedUsersFollowing(this.loggedUsersFollowing);
    //   }
    // );


  }

  ngDoCheck() {
    this.userService.setTweetCount(0);
    this.count = 0;
    for (let i = 0; i < this.tweet.length; i++) {
      if (this.tweet[i].tweetUserId === this.userService.getTwitterId()) {
        this.count++;
      }
    }
    this.userService.setTweetCount(this.count);
  }
}
