import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  profileForm: FormGroup;
  loggedUsername: string;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.initForm();
  }

  onSubmit() {
    this.userService.updateUser(this.profileForm.value.name, this.profileForm.value.email, this.profileForm.value.photoUrl);
    this.onCancel();
  }

  onCancel() {
    this.loggedUsername = this.userService.getLoggedUsername();
    this.router.navigate(['/home/' + this.loggedUsername]);
  }

  private initForm() {
    let userDisplayName;
    let userEmail;
    let userPhotoUrl;

    const user = this.userService.getUser();
    userDisplayName = user.displayName;
    userEmail = user.email;
    userPhotoUrl = user.profilePhotoUrl;

    this.profileForm = new FormGroup({
      'name': new FormControl(userDisplayName),
      'email': new FormControl(userEmail),
      'photoUrl': new FormControl(userPhotoUrl)
    });
  }
}
