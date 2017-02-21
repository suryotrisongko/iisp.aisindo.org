package com.aisindo.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aisindo.backend.dao.ExpertDao;
import com.aisindo.backend.model.Expert;
import com.aisindo.backend.model.User;
import com.aisindo.backend.service.ExpertService;

@Service
public class ExpertServiceImpl implements ExpertService{
	
	@Autowired
	private ExpertDao expertDao;
	
	public Expert save(Expert expert) {
		return expertDao.save(expert);
	}
	
        @Override
	public Expert findByUserId(Long userId) {
		return expertDao.findByUserId(userId);
	}

        @Override
        public List<Expert> findAll() {
            return expertDao.findAll();
        }
        
        @Override
	public List<Expert> findFeatured() {
            return expertDao.findByFeaturedexpert(true);
        }
        
        @Override
	public List<Expert> findByKeywordExpertiseLocation(String keyword, String expertise, String location) {
            keyword = '%' + keyword + '%';
            expertise = '%' + expertise + '%';
            location = '%' + location + '%';
            return expertDao.findSearch(keyword,expertise,location);
        }
        
}
