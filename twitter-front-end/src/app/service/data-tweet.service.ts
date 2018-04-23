import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import {UserService} from './user.service';
import {Tweet} from '../models/tweet.model';
import {TweetService} from './tweet.service';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataTweetService {
  returnTweet: Tweet;

  constructor(private httpClient: HttpClient, private userService: UserService, private tweetService: TweetService,
              private tokenStorageService: TokenStorageService) {
  }

  getDataTweets(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<Tweet>('http://localhost:8080/api/user/' + user + '/tweets', {headers});
  }

  getTweetsForSingleUser(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<Tweet>('http://localhost:8080/api/user/' + user + '/tweet', {headers});
  }

  postNewTweet(tweet: Tweet, date: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    this.httpClient.post('http://localhost:8080/api/tweet', {
        tweetUserId: tweet.tweetUserId,
        tweetMessage: tweet.tweetMessage,
        tweetDate: date
      }, {headers}
    )
      .subscribe(
        (data: Tweet) => {
          this.returnTweet = data;
          this.tweetService.setNewestTweetId(this.returnTweet.tweetId);
        }
      );
  }

  deleteTweet(id: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    this.httpClient.delete('http://localhost:8080/api/tweet/' + id, {headers})
      .subscribe(
      (data) => {
        // console.log(data);
      }
    );
  }
}
