//package com.projecteric.Twitter.controller;
//
//import java.util.List;
//
//import org.springframework.beans.BeanUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.projecteric.Twitter.model.Connection;
//import com.projecteric.Twitter.repository.UserConnectionRepository;
//import com.projecteric.Twitter.service.UserConnectionService;
//
//@RestController
//@RequestMapping("api/")
//public class UserConnectionController {
//	
//	@Autowired
//	private UserConnectionService userConnectionService;
//	
//	@RequestMapping(value = "following", method = RequestMethod.POST)
//	public Connection create(@RequestBody Connection connection){
////		connection.setConnectionTwitterId(1L);
//		return userConnectionService.saveAndFlush(connection);
//	}
//	
//	@RequestMapping(value = "following/{id}", method = RequestMethod.DELETE)
//	public Connection delete(@PathVariable Long id, @RequestBody Connection connection){
//		Connection existingConnection = userConnectionService.findOne(id);
//		userConnectionService.delete(existingConnection);		
//		return existingConnection;
//	}
//	
//	@RequestMapping(value = "following/{id}", method = RequestMethod.GET)
//	public Connection get(@PathVariable Long id){
//		return userConnectionService.findOne(id);
//	}
//	
//	@RequestMapping(value = "user/following/{id}", method = RequestMethod.GET)
//	public List<Connection> getUserFollowing(@PathVariable Long id) {
//		return userConnectionService.findByUserTwitterId(id);
//	}
//	
//	@RequestMapping(value = "following", method = RequestMethod.GET)
//	public List<Connection> list(){
//		return userConnectionService.findAll();
//	}
//	
//	@RequestMapping(value = "following/{id}", method = RequestMethod.PUT)
//	public Connection update(@PathVariable Long id, @RequestBody Connection connection){
//		Connection existingConnection = userConnectionService.findOne(id);
//		BeanUtils.copyProperties(connection, existingConnection);
//		return userConnectionService.saveAndFlush(connection);
//	}
//
//}
