package com.aisindo.backend.dao;

import org.springframework.stereotype.Repository;

import com.aisindo.backend.model.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserDao extends JpaRepository<User, Long>{
        
	User findByEmailAndActive(String email, boolean active);    //user: login
        
	User findByEmail(String email);    //user: cek registrasi
        @Override
	User save(User user);   // user: register/update;  admin: insert/update        
        User findByUserId(long userId);   // user/admin: detail user
        
        @Override
	List<User> findAll();   // admin: list all user  
	List<User> findAllByOrderByCreatedDesc();         
	List<User> findByNameContainingIgnoreCase(String name);   // admin: search user
	
	List<User> findAlreadyExpired();     
	List<User> findExpiredInTwoMonths(); 
	List<User> findExpiredInOneMonth(); 
	List<User> findExpiredInAWeek();         
}
