package com.projecteric.Twitter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecteric.Twitter.model.Tweet;
import com.projecteric.Twitter.repository.TweetRepository;

@Service("tweetService")
public class TweetServiceImpl implements TweetService {

	@Autowired
	private TweetRepository tweetRepository;
	
	public void delete(Tweet existingTweet) {
		tweetRepository.delete(existingTweet);		
	}

	public List<Tweet> findAll() {
		return tweetRepository.findAll();
	}

	public Tweet findOne(Integer id) {
		return tweetRepository.findOne(id);
	}

	public Tweet saveAndFlush(Tweet tweet) {
		return tweetRepository.saveAndFlush(tweet);
	}

//	public List<Tweet> findByUserTwitterId(Long id) {
//		return tweetRepository.findByUserTwitterId(id);
//	}

}
