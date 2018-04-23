import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-view-user-followers',
  templateUrl: './view-user-followers.component.html',
  styleUrls: ['./view-user-followers.component.css']
})
export class ViewUserFollowersComponent implements OnInit {
  user: User;
  usersFollowing: User[];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersFollowing = this.userService.getUsersFollowers();
  }

}
