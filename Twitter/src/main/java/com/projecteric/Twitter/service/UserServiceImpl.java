package com.projecteric.Twitter.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.projecteric.Twitter.model.Tweet;
import com.projecteric.Twitter.model.User;
import com.projecteric.Twitter.model.UserFollowingDTO;
import com.projecteric.Twitter.model.UserTweetDTO;
import com.projecteric.Twitter.repository.TweetRepository;
import com.projecteric.Twitter.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserDetailsService, UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TweetRepository tweetRepository;
	
	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;

	public void delete(User existingUser) {
		userRepository.delete(existingUser);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public User findOne(Integer id) {
		return userRepository.findOne(id);
	}

	public User saveAndFlush(User user) {
		return userRepository.saveAndFlush(user);
	}

	public List<UserFollowingDTO> listUserFollowing(String user) {
		Integer id = userRepository.findByTwitterName(user);
		List<UserFollowingDTO> allUserFollowing = new ArrayList<UserFollowingDTO>();
		List<Integer> userFollowing = new ArrayList<Integer>();
		userFollowing.addAll(userRepository.integerListUserFollowing(id));
		for (Integer userEl : userFollowing) {
			allUserFollowing.addAll(userRepository.listUserFollowing(userEl));
		}
		Collections.sort(allUserFollowing, new Comparator<UserFollowingDTO>() {
			public int compare(UserFollowingDTO one, UserFollowingDTO other) {
				return one.getTwitterName().compareTo(other.getTwitterName());
			}
		});
		return allUserFollowing;
	}
	
	public List<UserFollowingDTO> listUserFollowers(String user) {
		Integer id = userRepository.findByTwitterName(user);
		List<UserFollowingDTO> allUserFollowers = new ArrayList<UserFollowingDTO>();
		List<Integer> userFollowing = new ArrayList<Integer>();
		userFollowing.addAll(userRepository.integerListUserFollowers(id));
		for (Integer userEl : userFollowing) {
			allUserFollowers.addAll(userRepository.listUserFollowing(userEl));
		}
		Collections.sort(allUserFollowers, new Comparator<UserFollowingDTO>() {
			public int compare(UserFollowingDTO one, UserFollowingDTO other) {
				return one.getTwitterName().compareTo(other.getTwitterName());
			}
		});
		return allUserFollowers;
	}

	public List<UserTweetDTO> listUserTweet(String user) {
		Integer id = userRepository.findByTwitterName(user);
		List<UserTweetDTO> listTweetsFromUser = new ArrayList<UserTweetDTO>();
		listTweetsFromUser = userRepository.listTweetsWithUsers(id);
//		List<UserTweetDTO> listTweetsWithUsers = new ArrayList<UserTweetDTO>();
//		listTweetsWithUsers = userRepository.listTweetsWithUsers(id);
		Collections.sort(listTweetsFromUser, new Comparator<UserTweetDTO>() {
			public int compare(UserTweetDTO one, UserTweetDTO other) {
				return other.getTweetDate().compareTo(one.getTweetDate());
			}
		});
		return listTweetsFromUser;
	}

	public List<UserTweetDTO> listUserTweets(String user) {
		Integer id = userRepository.findByTwitterName(user);
		
		List<Integer> userFollowing = new ArrayList<Integer>();
		
		userFollowing.add(id);
		userFollowing.addAll(userRepository.integerListUserFollowing(id));
		List<UserTweetDTO> listTweetsWithUsers = new ArrayList<UserTweetDTO>();
		
		for (Integer userEl : userFollowing) {
			listTweetsWithUsers.addAll(userRepository.listTweetsWithUsers(userEl));
		}
		
		Collections.sort(listTweetsWithUsers, new Comparator<UserTweetDTO>() {
			public int compare(UserTweetDTO one, UserTweetDTO other) {
				return other.getTweetDate().compareTo(one.getTweetDate());
			}
		});
		
		return listTweetsWithUsers;
	}

	public void changeUserFollowing(Integer id, String user) {
		Integer idFollow = userRepository.findByTwitterName(user);
		List<Integer> userFollowing = new ArrayList<Integer>();
		userFollowing.addAll(userRepository.integerListUserFollowing(id));
		for (Integer userEl : userFollowing) {
			if (userEl == idFollow) {
				userRepository.removeConnectionId(id, idFollow);
				return;
			}
		}
		String connectionName = userRepository.findOne(idFollow).getTwitterName();
		userRepository.addConnectionId(id, connectionName, idFollow);
		return;
	}

	public User findByTwitterName(String twitterName) {
		Integer id = userRepository.findByTwitterName(twitterName);
		return userRepository.findOne(id);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Integer id = userRepository.findByTwitterName(username);
		User user = findOne(id);
		if(user == null) {
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		return new org.springframework.security.core.userdetails.User(user.getTwitterName(), user.getPassword(), getAuthority());
	}
	
	private List<SimpleGrantedAuthority> getAuthority() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
	}

	public User saveAndCryptPassword(User user) {
		User newUser = new User();
		newUser.setDisplayName(user.getDisplayName());
		newUser.setEmail(user.getEmail());
		newUser.setTwitterName(user.getTwitterName());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userRepository.saveAndFlush(newUser);
	}

	public List<UserFollowingDTO> findAllUsers() {
		List<User> listAllUsers = new ArrayList<User>();
		listAllUsers = userRepository.findAll();
		List<UserFollowingDTO> listAllUsersDTO = new ArrayList<UserFollowingDTO>();
		for (User user : listAllUsers) {
			UserFollowingDTO userToAdd = new UserFollowingDTO(user.getDisplayName(), user.getTwitterId(), user.getTwitterName());
			listAllUsersDTO.add(userToAdd);
		}
		return listAllUsersDTO;
	}
}