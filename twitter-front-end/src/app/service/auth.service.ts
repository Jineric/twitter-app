import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  attemptAuth(twitterName: string, password: string): Observable<any> {
    const credentials = {twitterName: twitterName, password: password};
    return this.httpClient.post('http://localhost:8080/token/generate-token', credentials);
  }
}
