package com.projecteric.Twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.projecteric.Twitter.model.User;
import com.projecteric.Twitter.model.UserFollowingDTO;
import com.projecteric.Twitter.model.UserTweetDTO;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {

	@Modifying
	@Query(value = "insert into user_connection(user_connection_twitter_id, user_connection_following, user_connection_following_id) values(:id, :connectionName, :idFollow)", nativeQuery = true)
	@Transactional
	void addConnectionId(@Param("id") Integer id, @Param("connectionName") String connectionName, @Param("idFollow") Integer idFollow);
	
	@Query(value = "Select c.user_connection_following_id from user_connection c where c.user_connection_twitter_id = :id", nativeQuery = true)
	List<Integer> integerListUserFollowing(@Param("id") Integer id);
	
	@Query(value = "Select c.user_connection_twitter_id from user_connection c where c.user_connection_following_id = :id", nativeQuery = true)
	List<Integer> integerListUserFollowers(@Param("id") Integer id);
	
	@Query(value = "Select t.tweet_id from tweet t where t.tweet_user_id = :id", nativeQuery = true)
	List<Integer> integerListUserTweet(@Param("id") Integer id);
	
	@Modifying
	@Query(value = "delete from user_connection where user_connection_twitter_id = :id and user_connection_following_id = :idFollow", nativeQuery = true)
	@Transactional
	void removeConnectionId(@Param("id") Integer id, @Param("idFollow") Integer idFollow);

	@Query(value = "Select u.twitter_user_id from twitter_user u where u.user_twitter_name = :twitterName", nativeQuery = true)
	Integer findByTwitterName(@Param("twitterName") String twitterName);
	
	@Query("Select new com.projecteric.Twitter.model.UserTweetDTO(u.displayName, t.tweetDate, t.tweetId, t.tweetMessage, t.tweetRetweetName, t.tweetUserId, u.twitterName) from Tweet t inner join User u on u.twitterId = t.tweetUserId where t.tweetUserId = :id")
	List<UserTweetDTO> listTweetsWithUsers(@Param("id") Integer id);
	
	@Query("Select new com.projecteric.Twitter.model.UserFollowingDTO(u.displayName, u.twitterId, u.twitterName) from User u where u.twitterId = :id")
	List<UserFollowingDTO> listUserFollowing(@Param("id") Integer id);
	
}
