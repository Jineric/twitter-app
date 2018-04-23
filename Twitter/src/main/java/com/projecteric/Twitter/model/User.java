package com.projecteric.Twitter.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;

@Entity
@Table(name = "twitter_user")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "twitter_user_id")
	private Integer twitterId;
	
	@NotNull
	@Column(length = 60, name = "user_twitter_name")
	@Pattern(regexp = "^[A-Za-z0-9]+$")
	private String twitterName;
	
	@NotNull
	@Column(length = 60, name = "user_display_name")
//	@Pattern(regexp = "^[A-Za-z]+$")
	private String displayName;
	
//	@NotNull
//	@Column(length = 60, name = "user_last_name")
//	@Pattern(regexp = "^[A-Za-z]+$")
//	private String lastName;
	
	@NotNull
//	@Size(min = 8, max = 30)
	@Column(name = "user_password")
	private String password;
	
	@Column(length = 60, name = "user_email_address")
	@Email
	private String email;
	
	@Column(length = 100, name = "user_profile_photo")
	private String profilePhotoUrl;
	
//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Tweet> tweets = new ArrayList<Tweet>();
	
//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Connection> connections = new ArrayList<Connection>();

	public User() {}

	public User(Integer twitterId, String twitterName, String displayName, String password, String email, String profilePhotoUrl) {
		this.twitterId = twitterId;
		this.twitterName = twitterName;
		this.displayName = displayName;
		this.password = password;
		this.email = email;
		this.profilePhotoUrl = profilePhotoUrl;
	}

	public String getEmail() {
		return email;
	}
	
	public String getDisplayName() {
		return displayName;
	}

	public String getPassword() {
		return password;
	}

	public String getProfilePhotoUrl() {
		return profilePhotoUrl;
	}

	public Integer getTwitterId() {
		return twitterId;
	}

	public String getTwitterName() {
		return twitterName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setProfilePhotoUrl(String profilePhotoUrl) {
		this.profilePhotoUrl = profilePhotoUrl;
	}

	public void setTwitterId(Integer idIndex) {
		this.twitterId = idIndex;
	}

	public void setTwitterName(String twitterName) {
		this.twitterName = twitterName;
	}
}
