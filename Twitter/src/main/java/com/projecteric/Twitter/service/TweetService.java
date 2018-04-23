package com.projecteric.Twitter.service;

import java.util.List;

import com.projecteric.Twitter.model.Tweet;

public interface TweetService {

	void delete(Tweet existingTweet);

	List<Tweet> findAll();

//	List<Tweet> findByUserTwitterId(Long id);

	Tweet findOne(Integer id);
	
	Tweet saveAndFlush(Tweet tweet);

}
