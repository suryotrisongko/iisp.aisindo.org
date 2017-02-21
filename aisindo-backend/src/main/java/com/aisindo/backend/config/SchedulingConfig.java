/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aisindo.backend.config;

import com.aisindo.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
public class SchedulingConfig {
        
    @Autowired
    private UserService userService;
    
    @Scheduled(fixedRate=60*60*1000)
    public void scheduleFixedDelayTask() {
        userService.notifyAlreadyExpired();
        userService.notifyExpiredInTwoMonths();
        userService.notifyExpiredInOneMonth();
        userService.notifyExpiredInOneWeek();
        
    }
}
