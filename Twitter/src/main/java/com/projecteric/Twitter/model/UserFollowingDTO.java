package com.projecteric.Twitter.model;

public class UserFollowingDTO {
	
	private String displayName;
	
	private Integer twitterId;
	
	private String twitterName;

	public UserFollowingDTO(String displayName, Integer twitterId, String twitterName) {
		this.displayName = displayName;
		this.twitterId = twitterId;
		this.twitterName = twitterName;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public Integer getTwitterId() {
		return twitterId;
	}

	public void setTwitterId(Integer twitterId) {
		this.twitterId = twitterId;
	}

	public String getTwitterName() {
		return twitterName;
	}

	public void setTwitterName(String twitterName) {
		this.twitterName = twitterName;
	}

}
