package com.aisindo.backend.service;

import com.aisindo.backend.model.Specialization;
import java.util.List;

import com.aisindo.backend.model.User;

public interface SpecializationService {
    /*
	Expert save(Expert expert);
	
	List<Expert> findByUser(User user);
    */
	
	Specialization findById(Long id);
	
	List<Specialization> findAll();
        
        
}
