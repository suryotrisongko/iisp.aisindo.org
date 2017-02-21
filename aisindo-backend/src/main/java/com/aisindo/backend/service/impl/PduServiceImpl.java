package com.aisindo.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aisindo.backend.dao.PduDao;
import com.aisindo.backend.model.Pdu;
import com.aisindo.backend.service.PduService;
import java.util.List;

@Service
public class PduServiceImpl implements PduService{
	
    @Autowired
    private PduDao pduDao;

    @Override
    public Pdu save(Pdu pdu) {
        return pduDao.save(pdu);
    }

    @Override
    public List<Pdu> findAll() {
        return pduDao.findAllByOrderByLastupdateDesc();
    }

    @Override
    public Pdu findByPduId(long pduId) {
        return pduDao.findByPduId(pduId);
    }

    @Override
    public Pdu findByEmail(String email) {
        return pduDao.findByEmail(email);
    }

}
