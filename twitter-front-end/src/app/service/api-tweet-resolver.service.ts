import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataTweetService} from './data-tweet.service';
import {Tweet} from '../models/tweet.model';
import {UserService} from './user.service';

@Injectable()
export class ApiTweetResolverService implements Resolve<Tweet> {

  constructor(private dataTweetService: DataTweetService, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Tweet> | Promise<Tweet> | Tweet {
    // const loggedUsername = this.userService.getLoggedUsername();
    const loggedUsername = route.params['user'];
    return this.dataTweetService.getDataTweets(loggedUsername);
  }
}
