import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
let inSession = null;

@Injectable()
export class TokenStorageService {

  constructor() {
  }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    inSession = null;
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    inSession = 'In session';
  }

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated() {
    return inSession != null;
  }
}
