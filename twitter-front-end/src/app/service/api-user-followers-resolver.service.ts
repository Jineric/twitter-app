import {User} from '../models/user.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataUserService} from './data-user.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiUserFollowersResolverService implements Resolve<User> {
  constructor(private dataUserService: DataUserService, private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const username = route.params['user'];
    return this.dataUserService.getUserFollowers(username);
  }
}
