package com.projecteric.Twitter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

//import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "tweet")
public class Tweet {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "tweet_id")
	private Integer tweetId;
	
	@Column(name = "tweet_user_id")
	@NotNull
	private Integer tweetUserId;
	
	@Column(length = 60, name = "tweet_retweet_name")
	private String tweetRetweetName;
	
	@Column(length = 200, name = "tweet_content")
	@Size(max = 200)
	private String tweetMessage;

	//	@CreationTimestamp
//	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "tweet_create_date")
	private String tweetDate;

	public Tweet() {}

public Tweet(Integer tweetId, Integer tweetUserId, String tweetRetweetName, String tweetMessage, String tweetDate) {
		this.tweetId = tweetId;
		this.tweetRetweetName = tweetRetweetName;
		this.tweetMessage = tweetMessage;
		this.tweetDate = tweetDate;
		this.tweetUserId = tweetUserId;
	}
	
//	@ManyToOne
//	@JoinColumn(name = "tweet_user_id")
//	private User user;
	
	public String getTweetDate() {
		return tweetDate;
	}
	
	public Integer getTweetId() {
		return tweetId;
	}

	public String getTweetMessage() {
		return tweetMessage;
	}

	public String getTweetRetweetName() {
		return tweetRetweetName;
	}

	public Integer getTweetUserId() {
		return tweetUserId;
	}

	public void setTweetDate(String tweetDate) {
		this.tweetDate = tweetDate;
	}

//	public User getUser() {
//		return user;
//	}

	public void setTweetId(Integer tweetId) {
		this.tweetId = tweetId;
	}

	public void setTweetMessage(String tweetMessage) {
		this.tweetMessage = tweetMessage;
	}
	
	public void setTweetRetweetName(String tweetRetweetName) {
		this.tweetRetweetName = tweetRetweetName;
	}
	
	public void setTweetUserId(Integer tweetUserId) {
		this.tweetUserId = tweetUserId;
	}
	
//	public void setUser(User user) {
//		this.user = user;
//	}
	
}
