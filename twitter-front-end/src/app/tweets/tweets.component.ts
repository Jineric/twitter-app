import {AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {TweetService} from '../service/tweet.service';
import {Tweet} from '../models/tweet.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../service/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweet: Tweet[];
  subscription: Subscription;

  constructor(private tweetService: TweetService, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.tweetService.tweetsChanged
      .subscribe(
        (tweet: Tweet[]) => {
          this.tweet = tweet;
        }
      );

    this.tweet = this.tweetService.getTweets();

    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.tweetUsers = data['users'];
    //     this.userService.setUsersOfTweets(this.tweetUsers);
    //   }
    // );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
