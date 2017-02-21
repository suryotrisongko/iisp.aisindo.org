package com.aisindo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aisindo.backend.model.User;
import com.aisindo.backend.service.SendingEmailService;
import com.aisindo.backend.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestParam;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@RestController
@RequestMapping("/rest")
@EnableSwagger2
public class UserResources {
	
	@Autowired
	private UserService userService;
        
	@Autowired
	private SendingEmailService sendingEmailService;
        
        @Value("${aisindo.DEVMODE}")
        private boolean DEVMODE;
	
	//OK
	@RequestMapping(value="/user/all", method=RequestMethod.GET)
	public List<User> allUser() {
            
            if(DEVMODE) System.out.println("List<User> allUser()" );   
            
            return userService.findAll();
	}
	
        //OK
	@RequestMapping(value="/user/update", method=RequestMethod.POST)
	public User updateUser(@RequestBody User user) {
            
            if(DEVMODE) System.out.println("User updateUser(@RequestBody User user) = " + user );   
            
            User updatedUser = userService.save(user);
            try {
                ObjectMapper mapper = new ObjectMapper();
                if(DEVMODE) System.out.println("updatedUser = " + mapper.writeValueAsString(updatedUser) );	
            } catch (Exception e) {
                if(DEVMODE) System.out.println("updatedUser = " + updatedUser +"; error = " + e);
            }
            
            String successMessage = "Please confirm/check the changes on your account at AISINDO Membership/IISP Database website. Please report to AISINDO admin if this was a mistake/suspicious activity";
            sendingEmailService.send(updatedUser.getEmail(), "Your AISINDO Membership/IISP Database profile has been updated", successMessage);
            
            return updatedUser;
	}
	
	@RequestMapping(value="/user/search", method=RequestMethod.GET)
	public List<User> searchUser(@RequestParam String name) {
            
            if(DEVMODE) System.out.println("List<User> searchUser(@RequestParam String name) = " + name );   
            
            return userService.findByNameContainingIgnoreCase(name);
	}
	
        // OK
        @RequestMapping(value="/user/users", method=RequestMethod.GET)
	public String loginSuccess(){
            
            if(DEVMODE) System.out.println("loginSuccess()" );            

            return "login success";
	}
        
        //OK
	@RequestMapping(value="/user/detailbyemail", method=RequestMethod.POST)
	public User detailUserByEmail(@RequestBody Map<String, String> json) throws ServletException {
            
            if(DEVMODE) System.out.println("detailUserByEmail(@RequestBody Map<String, String> json)  = " + json);            

            if (json.get("email")==null) {
                    throw new ServletException ("Please fill in email");
            }

            String email =json.get("email");

            User user = userService.findByEmailAndActive(email, true);
            if(DEVMODE) System.out.println("user = " + user);
            
            if (user == null) {
                    throw new ServletException ("An active account with provided email address is not found.");
            }
            return user;
	}
	 
}
