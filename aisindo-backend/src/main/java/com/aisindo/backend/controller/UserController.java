package com.aisindo.backend.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aisindo.backend.model.User;
import com.aisindo.backend.service.SendingEmailService;
import com.aisindo.backend.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestParam;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@RestController
@RequestMapping ("/user")
@EnableSwagger2
public class UserController {
        
	@Autowired
	private UserService userService;
        
	@Autowired
	private SendingEmailService sendingEmailService;
        
        @Value("${aisindo.restservice.url}")
        private String aisindoRestserviceUrl;
        
        @Value("${aisindo.DEVMODE}")
        private boolean DEVMODE;
        
        //OK
	@RequestMapping(value="/verify", method=RequestMethod.GET)
	public String verifyUser(@RequestParam long userId, @RequestParam int activationcode) {
            
            if(DEVMODE) System.out.println("String verifyUser(@RequestParam long userId, @RequestParam int activationcode) = " + userId + " , " + activationcode);
            
            User existingUser = userService.findByUserId( userId );
            if(DEVMODE) System.out.println("existingUser = " + existingUser);
            
            if (existingUser != null) {
                
                if(existingUser.getActive() == false ) {
                    
                    if(existingUser.getActivationcode() == activationcode) {
                        
                        existingUser.setActive(true);
                        userService.save(existingUser);
                        if(DEVMODE) System.out.println("updated existingUser = " + existingUser);
            
                        String successMessage = "Account Activation Success. You may now login into our website using your email/password, and complete the AISINDO Membership/IISP Database Registration";
                        sendingEmailService.send(existingUser.getEmail(), "AISINDO Membership/IISP Database: Account Activation Success", successMessage);
                        return successMessage;
                        
                    } else {
                        return "Account Activation Failed. Activation code incorrect. Please try again or contact our helpdesk/support";
                    }
                    
                } else {
                    return "Your account had been activated. You may now login into our website using your email/password, and complete the AISINDO Membership Registration";
                }
                
            } else {
                return "Account Activation Failed. User not found. Please try again or contact our helpdesk/support";
            }
	}

        //ok
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public User registerUser(@RequestBody User user) throws ServletException {
            
            if(DEVMODE) System.out.println("User registerUser(@RequestBody User user) = " + user);            
		
            if (userService.findByEmail(user.getEmail()) != null ) {
                throw new ServletException ("Email already registered");
            }
            
            User result = userService.save(user);
            if(DEVMODE) System.out.println("result = " + result);
            
            if(result != null) { 
                String newLine = System.getProperty("line.separator"); 
                String contentEmail = "Dear " + user.getName() + newLine + newLine
                        + "To activate your account please go to this url = " + newLine + newLine
                        + aisindoRestserviceUrl + "/user/verify?userId="+user.getUserId()+"&activationcode="+user.getActivationcode()
                        + newLine + newLine + "Problems? Questions? Please contact our helpdesk/support";
                sendingEmailService.send(user.getEmail(), "AISINDO Membership/IISP Database Email Verification", contentEmail);
            } else {
                throw new ServletException ("Registration Failed. Please contact our helpdesk/support");
            }
            
            return result;
	}
	
        //OK
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestBody Map<String, String> json) throws ServletException {
            
            if(DEVMODE) System.out.println("String login(@RequestBody Map<String, String> json)  = " + json);            

            if (json.get("email")==null || json.get("password") == null) {
                    throw new ServletException ("Please fill in email and password");
            }

            String email =json.get("email");
            String password = json.get("password");

            User user = userService.findByEmailAndActive(email, true);
            if(DEVMODE) System.out.println("user = " + user);
            
            if (user == null) {
                    throw new ServletException ("An active account with provided email address is not found.");
            }

            String pwd = user.getPassword();

            if (!password.equals(pwd)) {
                    throw new ServletException("Invalid login. Please check your email and password.");
            }

            return Jwts.builder().setSubject(email).claim("roles", "user").setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secretkey").compact() + ";" + user.getUserId() + ";" + user.getActivemembership() + ";" + user.getAdmin() + ";" + user.getReviewer();
				
	}
	
        //OK
	@RequestMapping(value="/resetpassword", method=RequestMethod.POST)
	public String resetpassword(@RequestBody Map<String, String> json) throws ServletException {
            
            if(DEVMODE) System.out.println("String resetpassword(@RequestBody Map<String, String> json)  = " + json);            

            if (json.get("email")==null) {
                    throw new ServletException ("Please fill in email");
            }
            if (json.get("newPassword") == null || json.get("newPasswordEncrypted") == null) {
                    throw new ServletException ("ERROR Exception, please contact your system administrator!");
            }

            String email =json.get("email");
            String newPassword = json.get("newPassword");
            String newPasswordEncrypted = json.get("newPasswordEncrypted");

            User user = userService.findByEmailAndActive(email, true);	
            if(DEVMODE) System.out.println("user = " + user);	
            
            if (user == null) {
                    throw new ServletException ("An active account with provided email address is not found.");
            } else {

                String newLine = System.getProperty("line.separator"); 
                String contentEmail = "Dear " + user.getName() + newLine + newLine
                        + "Your new password is = " + newLine + newLine
                        + newPassword
                        + newLine + newLine + "You have to login, then change the password immediately!"
                        + newLine + newLine + "Problems? Questions? Please contact our helpdesk/support";
                sendingEmailService.send(user.getEmail(), "AISINDO IISP Database Password Reset", contentEmail);
                
                user.setPassword(newPasswordEncrypted);
                userService.save(user);
                if(DEVMODE) System.out.println("reset password user = " + user);	
            } 
            return "Reset Password Success!";
	}
	
        //OK
	@RequestMapping(value="/isactivemember", method=RequestMethod.GET)
	public boolean isactivemember(@RequestParam long userId) {
            
            if(DEVMODE) System.out.println("isactivemember(@RequestParam long userId) = " + userId );
            
            User existingUser = userService.findByUserId( userId );
            if(DEVMODE) System.out.println("existingUser = " + existingUser);
            
            if (existingUser != null) {
                return existingUser.getActivemembership();
            } else {
                return false ;
            }
	}
        
}
