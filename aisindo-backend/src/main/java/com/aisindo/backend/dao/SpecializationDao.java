package com.aisindo.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.aisindo.backend.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface SpecializationDao extends JpaRepository<Specialization, Long>{
	/*
	Expert save(Expert expert);
	
	List<Expert> findByUser(User user);
        */
	
	Specialization findById(Long id);
	
	List<Specialization> findAll();
	
}