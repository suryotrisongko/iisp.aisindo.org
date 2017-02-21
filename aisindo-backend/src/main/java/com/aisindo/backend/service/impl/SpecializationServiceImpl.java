package com.aisindo.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aisindo.backend.dao.SpecializationDao;
import com.aisindo.backend.model.Specialization;
import com.aisindo.backend.service.SpecializationService;

@Service
public class SpecializationServiceImpl implements SpecializationService{
	
	@Autowired
	private SpecializationDao specializationDao;
	
	public Specialization findById(Long id) {
		return specializationDao.findById(id);
	}

        public List<Specialization> findAll() {
            return specializationDao.findAll();
        }
        
}
