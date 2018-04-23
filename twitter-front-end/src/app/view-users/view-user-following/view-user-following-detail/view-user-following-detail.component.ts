import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-view-user-following-detail',
  templateUrl: './view-user-following-detail.component.html',
  styleUrls: ['./view-user-following-detail.component.css']
})
export class ViewUserFollowingDetailComponent implements OnInit {
  @Input() usersFollowing: User;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
