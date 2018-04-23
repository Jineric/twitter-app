import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../models/user.model';
import {DataUserService} from '../../service/data-user.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private dataUserService: DataUserService, private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  getLoggedUsername() {
    return this.userService.getLoggedUsername();
  }

  onDeleteAccount() {
    this.dataUserService.deleteUser(this.user.twitterId);
    this.tokenStorageService.signOut();
    this.userService.setTwitterId(null);
    this.userService.setLoggedUsername(null);
    this.router.navigate(['signin']);
  }

}
