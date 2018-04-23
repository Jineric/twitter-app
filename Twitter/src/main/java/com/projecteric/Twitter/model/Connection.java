//package com.projecteric.Twitter.model;
//
//import javax.persistence.*;
//import javax.validation.constraints.NotNull;
//
//@Entity
//@Table (name = "user_connection")
//public class Connection {
//
//	@Id
//	@NotNull
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	@Column(name = "user_connection_id")
//	private Long connectionId;
//	
//	@Column(length = 60, name = "user_connection_following")
//	private String connectionFollowing;
//	
//	@ManyToOne
//	@JoinColumn(name = "user_connection_twitter_id")
//	private User user;
//
//	@NotNull
//	@Column(name = "user_connection_following_id")
//	private Long connectionFollowingId;
//	
//	public Connection () {}
//	
//	public Connection(Long connectionId, String connectionFollowing, Long connectionFollowingId, User user) {
//		this.connectionId = connectionId;
//		this.connectionFollowing = connectionFollowing;
//		this.connectionFollowingId = connectionFollowingId;
//		this.user = user;
//	}
//
//	public String getConnectionFollowing() {
//		return connectionFollowing;
//	}
//
//	public Long getConnectionFollowingId() {
//		return connectionFollowingId;
//	}
//
//	public Long getConnectionId() {
//		return connectionId;
//	}
//
//	public User getUser() {
//		return user;
//	}
//
//	public void setConnectionFollowing(String connectionFollowing) {
//		this.connectionFollowing = connectionFollowing;
//	}
//
//	public void setConnectionFollowingId(Long connectionFollowingId) {
//		this.connectionFollowingId = connectionFollowingId;
//	}
//
//	public void setConnectionId(Long connectionId) {
//		this.connectionId = connectionId;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//	
//}
