import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-view-user-following',
  templateUrl: './view-user-following.component.html',
  styleUrls: ['./view-user-following.component.css']
})
export class ViewUserFollowingComponent implements OnInit {
  user: User;
  usersFollowing: User[];

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.usersFollowing = this.userService.getUsersFollowing();
  }
}
