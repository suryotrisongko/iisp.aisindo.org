package com.aisindo.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.aisindo.backend.model.Expert;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ExpertDao extends JpaRepository<Expert, Long>{
	/*
	Expert save(Expert expert);
	
	List<Expert> findByUser(User user);
        */
	
	Expert findByUserId(Long userId);
	
        @Override
	List<Expert> findAll();
	
	List<Expert> findByFeaturedexpert(boolean x);
	
	List<Expert> findSearch(String keyword, String expertise, String location);
	
}