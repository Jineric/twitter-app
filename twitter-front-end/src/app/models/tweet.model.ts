export class Tweet {
  constructor(public tweetId: number,
              public tweetUserId: number,
              public twitterName: string,
              public tweetRetweetName: string,
              public tweetMessage: string,
              public tweetDate: Date,
              public displayName: string) {}
}
