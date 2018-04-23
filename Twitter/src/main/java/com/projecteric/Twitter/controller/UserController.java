package com.projecteric.Twitter.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.projecteric.Twitter.model.Tweet;
import com.projecteric.Twitter.model.User;
import com.projecteric.Twitter.model.UserFollowingDTO;
import com.projecteric.Twitter.model.UserTweetDTO;
import com.projecteric.Twitter.service.TweetService;
import com.projecteric.Twitter.service.UserService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "user/signup", method = RequestMethod.POST)
	public User create(@RequestBody User user){
		return userService.saveAndCryptPassword(user);
	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.DELETE)
	public User delete(@PathVariable Integer id){
		User existingUser = userService.findOne(id);
		userService.delete(existingUser);
		return existingUser;
	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.GET)
	public User get(@PathVariable Integer id){
		return userService.findOne(id);
	}
	
	@RequestMapping(value = "user/name/{twitterName}", method = RequestMethod.GET)
	public User get(@PathVariable String twitterName){
		return userService.findByTwitterName(twitterName);
	}
	
	@RequestMapping(value = "user/{user}/following", method = RequestMethod.GET)
	public List<UserFollowingDTO> getUserFollowing(@PathVariable String user){
		return userService.listUserFollowing(user);
	}
	
	@RequestMapping(value = "user/{user}/followers", method = RequestMethod.GET)
	public List<UserFollowingDTO> getUserFollowers(@PathVariable String user){
		return userService.listUserFollowers(user);
	}
	
	@RequestMapping(value = "user/{id}/following/{user}", method = RequestMethod.POST)
	public void changeUserFollowing(@PathVariable Integer id, @PathVariable String user){
		userService.changeUserFollowing(id, user);
		return;
	}
	
	@RequestMapping(value = "user/{user}/tweet", method = RequestMethod.GET)
	public List<UserTweetDTO> getUserTweet(@PathVariable String user) {
		return userService.listUserTweet(user);
	}
	
	@RequestMapping(value = "user/{user}/tweets", method = RequestMethod.GET)
	public List<UserTweetDTO> getUserTweets(@PathVariable String user) {
		return userService.listUserTweets(user);
	}
	
	@RequestMapping(value = "user", method = RequestMethod.GET)
	public List<UserFollowingDTO> list(){
		return userService.findAllUsers();
	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.PUT)
	public User update(@PathVariable Integer id, @RequestBody User user){
		User existingUser = userService.findOne(id);
		BeanUtils.copyProperties(user, existingUser);
		return userService.saveAndFlush(user);
	}
}
