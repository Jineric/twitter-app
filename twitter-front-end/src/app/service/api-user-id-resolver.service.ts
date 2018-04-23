import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user.model';
import {DataUserService} from './data-user.service';
import {UserService} from './user.service';

@Injectable()
export class ApiUserIdResolverService implements Resolve<User> {

  constructor(private dataUserService: DataUserService, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const loggedUsername = this.userService.getLoggedUsername();
    return this.dataUserService.getDataUserForTweets(loggedUsername);
  }
}
