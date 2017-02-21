package com.aisindo.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aisindo.backend.dao.UserDao;
import com.aisindo.backend.model.User;
import com.aisindo.backend.service.SendingEmailService;
import com.aisindo.backend.service.UserService;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
	
    @Autowired
    private UserDao userDao;
        
    @Autowired
    private SendingEmailService sendingEmailService;

    @Override
    public User save(User user) {
        return userDao.save(user);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAllByOrderByCreatedDesc();
    }

    @Override
    public User findByUserId(long userId) {
        return userDao.findByUserId(userId);
    }

    @Override
    public User findByEmailAndActive(String email, boolean active) {
        return userDao.findByEmailAndActive(email, active);
    }

    @Override
    public List<User> findByNameContainingIgnoreCase(String name) {
        return userDao.findByNameContainingIgnoreCase(name);
    }

    @Override
    public User findByEmail(String email) {
        return userDao.findByEmail(email);
    }	

    @Override
    public void notifyAlreadyExpired() {
        int i=0;
        List<User> lists = userDao.findAlreadyExpired();
        for(User u : lists) {
            
            String Message = "Dear "+ u.getName() +", your AISINDO Membership already expired. Renew Now! Helpdesk: SMS/WA +628123037371 | service@aisindo.org | http://iisp.aisindo.org";
            if( sendingEmailService.send(u.getEmail(), "your AISINDO Membership already expired", Message) ) {
                u.setActivemembership(false);
                userDao.save(u);
            }
            i++;
            if(i >=3) break;
        }
    }

    @Override
    public void notifyExpiredInTwoMonths() {
        int i=0;
        List<User> lists = userDao.findExpiredInTwoMonths();
        for(User u : lists) {
            
            String Message = "Dear "+ u.getName() +", your AISINDO Membership will be expired in the next 2 months ("+ u.getExpirationdate() +"). Renew Soon! Helpdesk: SMS/WA +628123037371 | service@aisindo.org | http://iisp.aisindo.org";
            if( sendingEmailService.send(u.getEmail(), "your AISINDO Membership due in next 2 months", Message) ) {
                u.setActivemembership(false);
                u.setNotification1(true);
                userDao.save(u);
            }
            i++;
            if(i >=3) break;
        }    
    }

    @Override
    public void notifyExpiredInOneMonth() {
        int i=0;
        List<User> lists = userDao.findExpiredInOneMonth();
        for(User u : lists) {
            
            String Message = "Dear "+ u.getName() +", your AISINDO Membership will be expired in next month ("+ u.getExpirationdate() +"). Renew Soon! Helpdesk: SMS/WA +628123037371 | service@aisindo.org | http://iisp.aisindo.org";
            if( sendingEmailService.send(u.getEmail(), "your AISINDO Membership due in next month", Message) ) {
                u.setActivemembership(false);
                u.setNotification2(true);
                userDao.save(u);
            }
            i++;
            if(i >=3) break;
        }    
    }

    @Override
    public void notifyExpiredInOneWeek() {
        int i=0;
        List<User> lists = userDao.findExpiredInAWeek();
        for(User u : lists) {
            
            String Message = "Dear "+ u.getName() +", your AISINDO Membership will be expired in less than a week ("+ u.getExpirationdate() +"). Renew Soon! Helpdesk: SMS/WA +628123037371 | service@aisindo.org | http://iisp.aisindo.org";
            if( sendingEmailService.send(u.getEmail(), "your AISINDO Membership due in less than a week", Message) ) {
                u.setActivemembership(false);
                u.setNotification3(true);
                userDao.save(u);
            }
            i++;
            if(i >=3) break;
        }    
    }

}
