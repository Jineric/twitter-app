import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../service/user.service';
import {DataUserService} from '../service/data-user.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
  }

  getLoggedUsername() {
    return this.userService.getLoggedUsername();
  }

  onLogout() {
    this.tokenStorageService.signOut();
    this.userService.setTwitterId(null);
    this.userService.setLoggedUsername(null);
    this.router.navigate(['']);
    this.userService.setAllUsers(null);
    this.userService.setLoggedUserFollowing(null);
    this.userService.setUser(null);
  }

}
