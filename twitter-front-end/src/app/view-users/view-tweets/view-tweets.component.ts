import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {User} from '../../models/user.model';
import {Tweet} from '../../models/tweet.model';
import {ActivatedRoute, Data} from '@angular/router';
import {UserService} from '../../service/user.service';
import {TweetService} from '../../service/tweet.service';

@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.css']
})
export class ViewTweetsComponent implements OnInit, OnDestroy {
  viewTweet: Tweet[];

  constructor(private tweetService: TweetService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // this.viewTweet = this.tweetService.getViewTweets();

    this.route.data.subscribe(
      (data: Data) => {
        this.viewTweet = data['tweet'];
        this.tweetService.setViewTweets(this.viewTweet);
      }
    );
  }

ngOnDestroy() {

  }
}
