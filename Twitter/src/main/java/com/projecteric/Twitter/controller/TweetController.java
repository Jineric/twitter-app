package com.projecteric.Twitter.controller;

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
import com.projecteric.Twitter.service.TweetService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("api/")
public class TweetController {
	
	@Autowired
	private TweetService tweetService;
	
	@RequestMapping(value = "tweet", method = RequestMethod.POST)
	public Tweet create(@RequestBody Tweet tweet){
		return tweetService.saveAndFlush(tweet);
	}
	
	@RequestMapping(value = "tweet/{id}", method = RequestMethod.DELETE)
	public Tweet delete(@PathVariable Integer id){
		// , @RequestBody Tweet tweet
		Tweet existingTweet = tweetService.findOne(id);
		tweetService.delete(existingTweet);		
		return existingTweet;
	}
	
	@RequestMapping(value = "tweet/{id}", method = RequestMethod.GET)
	public Tweet get(@PathVariable Integer id){
		return tweetService.findOne(id);
	}
	
	@RequestMapping(value = "tweet", method = RequestMethod.GET)
	public List<Tweet> list(){
		return tweetService.findAll();
	}
	
	@RequestMapping(value = "tweet/{id}", method = RequestMethod.PUT)
	public Tweet update(@PathVariable Integer id, @RequestBody Tweet tweet){
		Tweet existingTweet = tweetService.findOne(id);
		BeanUtils.copyProperties(tweet, existingTweet);
		return tweetService.saveAndFlush(tweet);
	}
}
