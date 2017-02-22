package com.aisindo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aisindo.backend.model.Pdu;
import com.aisindo.backend.service.SendingEmailService;
import com.aisindo.backend.service.PduService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Value;

@RestController
@RequestMapping("/rest")
public class PduResources {
        
	@Autowired
	private PduService pduService;
        
	@Autowired
	private SendingEmailService sendingEmailService;
        
        @Value("${aisindo.restservice.url}")
        private String aisindoRestserviceUrl;
        
        @Value("${aisindo.DEVMODE}")
        private boolean DEVMODE;
	
	//OK
	@RequestMapping(value="/pdu/all", method=RequestMethod.GET)
	public List<Pdu> allPdu() {
            
            if(DEVMODE) System.out.println("List<Pdu> allPdu()" );   
            
            return pduService.findAll();
	}
	
        //OK
	@RequestMapping(value="/pdu/update", method=RequestMethod.POST)
	public Pdu updatePdu(@RequestBody Pdu pdu) {
            
            if(DEVMODE) System.out.println("Pdu updatePdu(@RequestBody Pdu pdu) = " + pdu );   
            
            Pdu updatedPdu = pduService.save(pdu);
            try {
                ObjectMapper mapper = new ObjectMapper();
                if(DEVMODE) System.out.println("updatedPdu = " + mapper.writeValueAsString(updatedPdu) );	
            } catch (Exception e) {
                if(DEVMODE) System.out.println("updatedPdu = " + updatedPdu +"; error = " + e);
            }
            
            String successMessage = "Please confirm/check the changes on your account at AISINDO IISP Database. Please report to AISINDO admin if this was a mistake/suspicious activity";
            sendingEmailService.send(updatedPdu.getEmail(), "Your AISINDO PDU data has been updated", successMessage);
            
            return updatedPdu;
	}
        
        //OK
	@RequestMapping(value="/pdu/detailbyemail", method=RequestMethod.POST)
	public Pdu detailPduByEmail(@RequestBody Map<String, String> json) throws ServletException {
            
            if(DEVMODE) System.out.println("detailPduByEmail(@RequestBody Map<String, String> json)  = " + json);            

            if (json.get("email")==null) {
                    throw new ServletException ("Please fill in email");
            }

            String email =json.get("email");

            Pdu pdu = pduService.findByEmail(email);
            if(DEVMODE) System.out.println("pdu = " + pdu);
            
            if (pdu == null) {
                    throw new ServletException ("This account has never submitted PDU data.");
            }
            return pdu;
	}
	 
}
