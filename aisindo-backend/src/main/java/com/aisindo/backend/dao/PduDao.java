package com.aisindo.backend.dao;

import org.springframework.stereotype.Repository;

import com.aisindo.backend.model.Pdu;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PduDao extends JpaRepository<Pdu, Long>{
        
        @Override
	Pdu save(Pdu pdu);   
        Pdu findByPduId(long pduId);
        Pdu findByEmail(String email);
        @Override
	List<Pdu> findAll();   
	List<Pdu> findAllByOrderByLastupdateDesc();   
	
}
