package com.aisindo.backend.service;

import com.aisindo.backend.model.User;
import java.util.List;

public interface UserService {
        
    User findByEmailAndActive(String email, boolean active);    //user: login

    User findByEmail(String email);    //user: cek registrasi
    User save(User user);   // user: register/update;  admin: insert/update        
    User findByUserId(long userId);   // user/admin: detail user
        
    List<User> findAll();   // admin: list all user      
    List<User> findByNameContainingIgnoreCase(String name);   // admin: search user
    
    void notifyAlreadyExpired();
    void notifyExpiredInTwoMonths();
    void notifyExpiredInOneMonth();
    void notifyExpiredInOneWeek();
}
