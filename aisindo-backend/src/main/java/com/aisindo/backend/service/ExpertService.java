package com.aisindo.backend.service;

import com.aisindo.backend.model.Expert;
import java.util.List;

import com.aisindo.backend.model.User;

public interface ExpertService {
    /*
	Expert save(Expert expert);
	
	List<Expert> findByUser(User user);
    */
	
	Expert findByUserId(Long userId);
	
	List<Expert> findAll();
	
	List<Expert> findFeatured();
	
	List<Expert> findByKeywordExpertiseLocation(String keyword, String expertise, String location);
        
        
}
