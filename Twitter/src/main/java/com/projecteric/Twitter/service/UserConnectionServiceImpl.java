//package com.projecteric.Twitter.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.projecteric.Twitter.model.Connection;
//import com.projecteric.Twitter.repository.UserConnectionRepository;
//
//@Service("userConnectionService")
//public class UserConnectionServiceImpl implements UserConnectionService {
//
//	@Autowired
//	private UserConnectionRepository userConnectionRepository;
//
//	public void delete(Connection existingConnection) {
//		userConnectionRepository.delete(existingConnection);
//	}
//
//	public List<Connection> findAll() {
//		return userConnectionRepository.findAll();
//	}
//
//	public List<Connection> findByUserTwitterId(Long id) {
//		return userConnectionRepository.findByUserTwitterId(id);
//	}
//
//	public Connection findOne(Long id) {
//		return userConnectionRepository.findOne(id);
//	}
//
//	public Connection saveAndFlush(Connection connection) {
//		return userConnectionRepository.saveAndFlush(connection);
//	}
//
//
//}
