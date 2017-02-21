package com.aisindo.backend.service.impl;

import com.aisindo.backend.service.SendingEmailService;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class SendingEmailImpl implements SendingEmailService{
        
	@Autowired
        private JavaMailSender javaMailSender;
        
        @Value("${aisindo.admin.email}")
        private String aisindoAdminEmail;
        
        @Override
        public boolean send(String mailTo, String mailSubject, String mailText) {
            MimeMessage mail = javaMailSender.createMimeMessage();
            try {
                MimeMessageHelper helper = new MimeMessageHelper(mail, true);
                helper.setTo(mailTo);
                helper.setReplyTo(aisindoAdminEmail);
                helper.setFrom(aisindoAdminEmail);
                helper.setSubject(mailSubject);
                helper.setText(mailText);
                javaMailSender.send(mail);
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            } 
            
        }
}
