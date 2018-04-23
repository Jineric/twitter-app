import {Tweet} from '../models/tweet.model';
import {Subject} from 'rxjs/Subject';

export class TweetService {
  tweetsChanged = new Subject<Tweet[]>();
  tweetIdForPost: number;

  private tweet: Tweet[];
  //   = [
  //   new Tweet(4, 1, null, 'Home made pizza is delicious~ YUM!', new Date(2018, 1, 24, 19, 33, 5)),
  //   new Tweet(3, 1, null, 'Snowboarding trip in Boston!', new Date(2018, 1, 9, 11, 0, 15)),
  //   new Tweet(2, 1, null, 'Started a new project today; wish my luck!', new Date(2017, 11, 20, 8, 15, 1))
  // ];

  private viewTweet: Tweet[];

  getTweet(index: number) {
    return this.tweet[index];
  }

  setTweetIdForPost (id: number) {
    this.tweetIdForPost = id;
  }

  getTweetIdForPost() {
    return this.tweetIdForPost;
  }

  getTweets() {
    return this.tweet;
  }

  setNewestTweetId(id: number) {
    this.tweet[0].tweetId = id;
    this.tweetsChanged.next(this.tweet.slice());
  }

  addTweet(tweet: Tweet) {
    this.tweet.unshift(tweet);
    this.tweetsChanged.next(this.tweet.slice());
  }

  deleteTweet(index: number) {
    this.tweet.splice(index, 1);
    this.tweetsChanged.next(this.tweet.slice());
  }

  getTwitterUserName() {
    return 'Kenji';
  }

  setTweets(tweet: Tweet[]) {
    this.tweet = tweet;
    this.tweetsChanged.next(this.tweet.slice());
  }

  setViewTweets(tweet: Tweet[]) {
    this.viewTweet = tweet;
    this.tweetsChanged.next(this.tweet.slice());
  }

  getViewTweets() {
    return this.viewTweet;
  }
}
