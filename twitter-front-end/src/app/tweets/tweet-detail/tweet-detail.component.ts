import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../models/tweet.model';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Data} from '@angular/router';
import {User} from '../../models/user.model';
import {DataTweetService} from '../../service/data-tweet.service';
import {TweetService} from '../../service/tweet.service';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() index: number;
  currentUser: User;
  users: User[];

  constructor(private userService: UserService, private dataTweetService: DataTweetService, private tweetService: TweetService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

  onDeleteTweet(id: number, localId: number) {
    this.dataTweetService.deleteTweet(id);
    this.tweetService.deleteTweet(localId);
  }
}
