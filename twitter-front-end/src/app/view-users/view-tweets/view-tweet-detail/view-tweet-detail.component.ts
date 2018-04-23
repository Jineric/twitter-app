import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../../models/tweet.model';
import {TweetService} from '../../../service/tweet.service';
import {DataTweetService} from '../../../service/data-tweet.service';
import {UserService} from '../../../service/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-view-tweet-detail',
  templateUrl: './view-tweet-detail.component.html',
  styleUrls: ['./view-tweet-detail.component.css']
})
export class ViewTweetDetailComponent implements OnInit {
  @Input() viewTweet: Tweet;
  currentUser: User;
  @Input() index: number;

  constructor(private userService: UserService, private dataTweetService: DataTweetService, private tweetService: TweetService) { }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

  onDeleteTweet(id: number, localId: number) {
    this.dataTweetService.deleteTweet(id);
    this.tweetService.deleteTweet(localId);
  }

}
