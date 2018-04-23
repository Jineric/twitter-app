package com.projecteric.Twitter.service;

import java.util.ArrayList;
import java.util.List;

import com.projecteric.Twitter.model.Tweet;
import com.projecteric.Twitter.model.User;
import com.projecteric.Twitter.model.UserFollowingDTO;
import com.projecteric.Twitter.model.UserTweetDTO;

public interface UserService {

	void delete(User existingUser);

	List<UserFollowingDTO> findAllUsers();

	User findOne(Integer id);

	User saveAndFlush(User user);
	
	User saveAndCryptPassword(User user);

	List<UserFollowingDTO> listUserFollowing(String user);
	
	List<UserFollowingDTO> listUserFollowers(String user);

	List<UserTweetDTO> listUserTweet(String user);

	List<UserTweetDTO> listUserTweets(String user);
	
//	List<UserTweetDTO> listUserTweets(Integer id);

	void changeUserFollowing(Integer id, String user);

	User findByTwitterName(String twitterName);

}
