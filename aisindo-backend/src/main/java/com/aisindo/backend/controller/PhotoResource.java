package com.aisindo.backend.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;


@RestController
@RequestMapping("/rest")
public class PhotoResource {
	private String imageName;
	
	@RequestMapping(value="/photo/upload", method=RequestMethod.POST)
	public String upload (HttpServletResponse reponse, HttpServletRequest request) {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		Iterator<String> it = multipartRequest.getFileNames();
		MultipartFile multipartFile = multipartRequest.getFile(it.next());
		String fileName = multipartFile.getOriginalFilename();
		imageName = fileName;
		File tmpFile = new File("src/main/resources/static/images");
		String path= tmpFile.getAbsolutePath()+"/"+fileName;
		
		try {
                    tmpFile.mkdirs();
                    multipartFile.transferTo(new File(path));
                   
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return "Upload Image Success!";
	}
	
}
