import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../models/user.model';
import {Tweet} from '../models/tweet.model';
import {TweetService} from '../service/tweet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


}
