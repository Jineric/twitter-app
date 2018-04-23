import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user.model';
import {DataUserService} from '../../service/data-user.service';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: User;
  allUsers: User[];
  usernameExists = false;

  constructor(private dataUserService: DataUserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.allUsers = data['allUsers'];
        console.log(this.allUsers);
      }
    );
  }

  onSignup(form: NgForm) {
    const twitterName = form.value.twitterName;
    const displayName = form.value.displayName;
    const password = form.value.password;
    const email = form.value.email;
    this.newUser = new User(null, twitterName, displayName, password, email, null);
    console.log(this.newUser);

    if (this.allUsers.find(el => el.twitterName.toLocaleLowerCase() === twitterName.toLocaleLowerCase())) {
      this.usernameExists = true;
    } else {
      this.dataUserService.createNewUser(this.newUser);
      this.router.navigate(['signin']);
    }
  }

  checkUsername() {
    return this.usernameExists;
  }

  onUsernameChange() {
    this.usernameExists = false;
  }
}
