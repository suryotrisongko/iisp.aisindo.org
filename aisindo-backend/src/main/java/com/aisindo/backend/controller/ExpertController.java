package com.aisindo.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aisindo.backend.model.Expert;
import com.aisindo.backend.service.ExpertService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/expert")
public class ExpertController {

	@Autowired
	private ExpertService expertService;
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public List<Expert> getAllExperts() {
		return expertService.findAll();
	}
	
	@RequestMapping(value="/featured", method=RequestMethod.GET)
	public List<Expert> getFeaturedExperts() {
		return expertService.findFeatured();
	}
	
	@RequestMapping(value="/detail", method = RequestMethod.GET)
	public Expert getExpertByUserId(@RequestParam Long userId) {
		return expertService.findByUserId(userId);
	}
	
	@RequestMapping(value="/search", method = RequestMethod.GET)
	public List<Expert> getExpertByKeywordExpertiseLocation(@RequestParam String keyword, @RequestParam String expertise, @RequestParam String location) {
		return expertService.findByKeywordExpertiseLocation(keyword, expertise, location);
	}
}
