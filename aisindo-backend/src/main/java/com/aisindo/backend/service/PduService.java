package com.aisindo.backend.service;

import com.aisindo.backend.model.Pdu;
import java.util.List;

public interface PduService {
        
    Pdu save(Pdu pdu);   // pdu: register/update;  admin: insert/update        
    Pdu findByPduId(long pduId);   // pdu/admin: detail pdu      
    Pdu findByEmail(String email);   // pdu/admin: detail pdu
    List<Pdu> findAll();   // admin: list all pdu      
}
