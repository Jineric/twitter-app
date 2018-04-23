package com.projecteric.Twitter.controller;

import org.springframework.web.bind.annotation.*;

import com.projecteric.Twitter.model.AuthToken;
import com.projecteric.Twitter.model.LoginUser;
import com.projecteric.Twitter.model.User;
import com.projecteric.Twitter.repository.UserRepository;
import com.projecteric.Twitter.security.JwtTokenUtil;
import com.projecteric.Twitter.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/generate-token", method = RequestMethod.POST)
	public ResponseEntity register(@RequestBody LoginUser loginUser) throws AuthenticationException {
		
		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginUser.getTwitterName(),
						loginUser.getPassword()
						)
				);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		Integer id = userRepository.findByTwitterName(loginUser.getTwitterName());
		final User user = userService.findOne(id);
		final String token = jwtTokenUtil.generateToken(user);
		return ResponseEntity.ok(new AuthToken(token));
	}

}
