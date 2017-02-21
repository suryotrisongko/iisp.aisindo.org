package com.aisindo.backend.service;

public interface SendingEmailService {
    public boolean send(String mailTo, String mailSubject, String mailText) ;
}
