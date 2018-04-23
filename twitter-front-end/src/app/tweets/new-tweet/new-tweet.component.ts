import {Component, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {UserService} from '../../service/user.service';
import {Tweet} from '../../models/tweet.model';
import {DataTweetService} from '../../service/data-tweet.service';
import {Router} from '@angular/router';
import {TweetService} from '../../service/tweet.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {
  user: User;
  newTweet: Tweet;
  returnTweetId: number;

  constructor(private userService: UserService, private dataTweetService: DataTweetService, private tweetService: TweetService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user = this.userService.getUser();
    const value = form.value;
    const currentDate = new Date();
    const d = currentDate.getDate();
    const y = currentDate.getFullYear();
    const m = currentDate.getMonth() + 1;
    const h = currentDate.getHours();
    const min = currentDate.getMinutes();
    const formattedDate = y + '-' + m + '-' + d + ' ' + h + '-' + min;
    this.newTweet = new Tweet(null, this.user.twitterId, this.user.twitterName, null, value.message, currentDate, this.user.displayName);
    this.tweetService.addTweet(this.newTweet);
    this.dataTweetService.postNewTweet(this.newTweet, formattedDate);
    form.reset();
  }

  onCancel(form: NgForm) {
    form.reset();
  }
}
