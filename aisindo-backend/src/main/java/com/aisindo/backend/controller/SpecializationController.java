package com.aisindo.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aisindo.backend.model.Specialization;
import com.aisindo.backend.service.SpecializationService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/specialization")
public class SpecializationController {

	@Autowired
	private SpecializationService specializationService;
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public List<Specialization> getAllSpecializations() {
		return specializationService.findAll();
	}
	
	@RequestMapping(value="/detail", method = RequestMethod.GET)
	public Specialization getSpecializationById(@RequestParam Long id) {
		return specializationService.findById(id);
	}
}
