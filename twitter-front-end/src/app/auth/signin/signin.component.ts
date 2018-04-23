import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {NgForm} from '@angular/forms';
import {TokenStorageService} from '../../service/token-storage.service';
import {UserService} from '../../service/user.service';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User;
  data: Data;

  constructor(private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const twitterName = form.value.username;
    const password = form.value.password;
    this.authService.attemptAuth(twitterName, password)
      .subscribe(
        data => {
          this.tokenStorageService.saveToken(data.token);
          this.userService.setLoggedUsername(twitterName);
          this.router.navigate(['home/' + twitterName]);
        }
      );
  }
}
