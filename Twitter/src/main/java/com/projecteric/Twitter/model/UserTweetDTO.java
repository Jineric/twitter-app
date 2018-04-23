package com.projecteric.Twitter.model;

public class UserTweetDTO {

	private String displayName;
	
	private String tweetDate;
	
	private Integer tweetId;
	
	private String tweetMessage;

	private String tweetRetweetName;
	
	private Integer tweetUserId;
	
	private String twitterName;

	public UserTweetDTO(String displayName, String tweetDate, Integer tweetId, String tweetMessage,
			String tweetRetweetName, Integer tweetUserId, String twitterName) {
		this.displayName = displayName;
		this.tweetDate = tweetDate;
		this.tweetId = tweetId;
		this.tweetMessage = tweetMessage;
		this.tweetRetweetName = tweetRetweetName;
		this.tweetUserId = tweetUserId;
		this.twitterName = twitterName;
	}

	public String getDisplayName() {
		return displayName;
	}

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

	public String getTwitterName() {
		return twitterName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public void setTweetDate(String tweetDate) {
		this.tweetDate = tweetDate;
	}

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

	public void setTwitterName(String twitterName) {
		this.twitterName = twitterName;
	}
	
	
	
	
}
