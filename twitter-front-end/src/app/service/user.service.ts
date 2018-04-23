import {User} from '../models/user.model';
import {Injectable} from '@angular/core';
import {DataUserService} from './data-user.service';

@Injectable()
export class UserService {
  private user: User;
  private viewUser: User;
  private usersOfTweets: User[];
  private tweetCount: number;
  loggedUsername: string;
  loggedTwitterId: number;
  viewTwitterId: number;
  usersFollowing: User[];
  usersFollowers: User[];
  loggedUserFollowing: User[];
  allUsers: User[];

  constructor(private dataUserService: DataUserService) {
  }

  setTweetCount(count: number) {
    this.tweetCount = count;
  }

  getTweetCount() {
    return this.tweetCount;
  }

  setUser(user: User) {
    this.user = user;
  }

  setViewUser(user: User) {
    this.viewUser = user;
  }

  getUsersOfTweets() {
    return this.usersOfTweets;
  }

  setUsersOfTweets(users: User[]) {
    this.usersOfTweets = users;
  }

  getUser() {
    return this.user;
  }

  setTwitterId(id: number) {
    this.loggedTwitterId = id;
  }

  setViewTwitterId(id: number) {
    this.viewTwitterId = id;
  }

  getTwitterName() {
    return this.user.twitterName;
  }

  getTwitterId() {
    return this.loggedTwitterId;
  }

  getTwitterDisplayName() {
    return this.user.displayName;
  }

  setLoggedUsername(user: string) {
    this.loggedUsername = user;
  }

  getLoggedUsername() {
    return this.loggedUsername;
  }

  updateUser(displayName: string, email: string, photoUrl: string) {
    this.user.displayName = displayName;
    this.user.email = email;
    this.user.profilePhotoUrl = photoUrl;
    this.dataUserService.updateDataUser(this.user, this.user.twitterId);
  }

  setUsersFollowing(user: User[]) {
    this.usersFollowing = user;
  }

  getUsersFollowing() {
    return this.usersFollowing;
  }

  setUsersFollowers(user: User[]) {
    this.usersFollowers = user;
  }

  getUsersFollowers() {
    return this.usersFollowers;
  }

  setLoggedUserFollowing(user: User[]) {
    this.loggedUserFollowing = user;
  }

  getLoggedUserFollowing() {
    return this.loggedUserFollowing;
  }

  addLoggedUserFollowing(user: User) {
    this.loggedUserFollowing.push(user);
  }

  removeLoggedUserFollowing(index: number) {
    this.loggedUserFollowing.splice(index, 1);
  }

  setAllUsers(user: User[]) {
    this.allUsers = user;
  }

  getAllUsers() {
    return this.allUsers;
  }
}
