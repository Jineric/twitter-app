import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import 'rxjs/Rx';
import {TokenStorageService} from './token-storage.service';
import {UserService} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataUserService {
  user: User;

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  getDataUser(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<User>('http://localhost:8080/api/user/name/' + user, {headers});
  }

  getDataUserForTweets(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<User>('http://localhost:8080/api/user/' + user + '/tweets', {headers});
  }

  updateDataUser(user: User, id: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    this.user = user;
    // console.log(this.user);
    this.httpClient.put('http://localhost:8080/api/user/' + id, user, {headers})
      .subscribe(
        (data) => {
          // console.log(data);
        }
      );
  }

  createNewUser(user: User) {
    this.httpClient.post('http://localhost:8080/api/user/signup', {
        twitterName: user.twitterName,
        displayName: user.displayName,
        password: user.password,
        email: user.email,
        profilePhotoUrl: user.profilePhotoUrl
      }
    ).subscribe(
      (data) => {
      }
    );
  }

  deleteUser(id: number) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    this.httpClient.delete('http://localhost:8080/api/user/' + id, {headers})
      .subscribe(
        (data) => {
          // console.log(data);
        }
      );
  }

  getUserFollowing(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<User[]>('http://localhost:8080/api/user/' + user + '/following', {headers});
  }

  getUserFollowers(user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<User>('http://localhost:8080/api/user/' + user + '/followers', {headers});
  }

  getAllUsers() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    return this.httpClient.get<User>('http://localhost:8080/api/user/');
  }

  updateUserFollowing(id: number, user: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorageService.getToken());
    this.httpClient.post('http://localhost:8080/api/user/' + id + '/following/' + user, null, {headers}).subscribe(
      (data) => {

      }
    );
  }
}
