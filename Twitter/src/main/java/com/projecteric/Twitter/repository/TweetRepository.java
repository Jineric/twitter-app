package com.projecteric.Twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projecteric.Twitter.model.Tweet;

@Repository("tweetRepository")
public interface TweetRepository extends JpaRepository<Tweet, Integer> {
	
}
