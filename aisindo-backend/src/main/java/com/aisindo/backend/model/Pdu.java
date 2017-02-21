/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aisindo.backend.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author oracle
 */
@Entity
@Table(name = "pdu")
@XmlRootElement
public class Pdu implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "pdu_id")
    private Long pduId;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "notes")
    private String notes;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "status")
    private String status;
    @Size(max = 255)
    @Column(name = "pdu1")
    private String pdu1;
    @Size(max = 255)
    @Column(name = "proofpdu1")
    private String proofpdu1;
    @Size(max = 255)
    @Column(name = "pdu2")
    private String pdu2;
    @Size(max = 255)
    @Column(name = "proofpdu2")
    private String proofpdu2;
    @Size(max = 255)
    @Column(name = "pdu3")
    private String pdu3;
    @Size(max = 255)
    @Column(name = "proofpdu3")
    private String proofpdu3;
    @Size(max = 255)
    @Column(name = "pdu4")
    private String pdu4;
    @Size(max = 255)
    @Column(name = "proofpdu4")
    private String proofpdu4;
    @Size(max = 255)
    @Column(name = "pdu5")
    private String pdu5;
    @Size(max = 255)
    @Column(name = "proofpdu5")
    private String proofpdu5;
    @Size(max = 255)
    @Column(name = "pdu6")
    private String pdu6;
    @Size(max = 255)
    @Column(name = "proofpdu6")
    private String proofpdu6;
    @Size(max = 255)
    @Column(name = "pdu7")
    private String pdu7;
    @Size(max = 255)
    @Column(name = "proofpdu7")
    private String proofpdu7;
    @Size(max = 255)
    @Column(name = "pdu8")
    private String pdu8;
    @Size(max = 255)
    @Column(name = "proofpdu8")
    private String proofpdu8;
    @Size(max = 255)
    @Column(name = "pdu9")
    private String pdu9;
    @Size(max = 255)
    @Column(name = "proofpdu9")
    private String proofpdu9;
    @Size(max = 255)
    @Column(name = "pdu10")
    private String pdu10;
    @Size(max = 255)
    @Column(name = "proofpdu10")
    private String proofpdu10;
    @Size(max = 255)
    @Column(name = "pdu11")
    private String pdu11;
    @Size(max = 255)
    @Column(name = "proofpdu11")
    private String proofpdu11;
    @Size(max = 255)
    @Column(name = "pdu12")
    private String pdu12;
    @Size(max = 255)
    @Column(name = "proofpdu12")
    private String proofpdu12;
    @Size(max = 255)
    @Column(name = "pdu13")
    private String pdu13;
    @Size(max = 255)
    @Column(name = "proofpdu13")
    private String proofpdu13;
    @Size(max = 255)
    @Column(name = "pdu14")
    private String pdu14;
    @Size(max = 255)
    @Column(name = "proofpdu14")
    private String proofpdu14;
    @Size(max = 255)
    @Column(name = "pdu15")
    private String pdu15;
    @Size(max = 255)
    @Column(name = "proofpdu15")
    private String proofpdu15;
    @Size(max = 255)
    @Column(name = "pdu16")
    private String pdu16;
    @Size(max = 255)
    @Column(name = "proofpdu16")
    private String proofpdu16;
    @Size(max = 255)
    @Column(name = "pdu17")
    private String pdu17;
    @Size(max = 255)
    @Column(name = "proofpdu17")
    private String proofpdu17;
    @Size(max = 255)
    @Column(name = "pdu18")
    private String pdu18;
    @Size(max = 255)
    @Column(name = "proofpdu18")
    private String proofpdu18;
    @Size(max = 255)
    @Column(name = "pdu19")
    private String pdu19;
    @Size(max = 255)
    @Column(name = "proofpdu19")
    private String proofpdu19;
    @Size(max = 255)
    @Column(name = "pdu20")
    private String pdu20;
    @Size(max = 255)
    @Column(name = "proofpdu20")
    private String proofpdu20;
    @Column(name = "lastupdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastupdate;

    public Pdu() {
    }

    public Pdu(Long pduId) {
        this.pduId = pduId;
    }

    public Pdu(Long pduId, String email, String notes, String status) {
        this.pduId = pduId;
        this.email = email;
        this.notes = notes;
        this.status = status;
    }

    public Long getPduId() {
        return pduId;
    }

    public void setPduId(Long pduId) {
        this.pduId = pduId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPdu1() {
        return pdu1;
    }

    public void setPdu1(String pdu1) {
        this.pdu1 = pdu1;
    }

    public String getProofpdu1() {
        return proofpdu1;
    }

    public void setProofpdu1(String proofpdu1) {
        this.proofpdu1 = proofpdu1;
    }

    public String getPdu2() {
        return pdu2;
    }

    public void setPdu2(String pdu2) {
        this.pdu2 = pdu2;
    }

    public String getProofpdu2() {
        return proofpdu2;
    }

    public void setProofpdu2(String proofpdu2) {
        this.proofpdu2 = proofpdu2;
    }

    public String getPdu3() {
        return pdu3;
    }

    public void setPdu3(String pdu3) {
        this.pdu3 = pdu3;
    }

    public String getProofpdu3() {
        return proofpdu3;
    }

    public void setProofpdu3(String proofpdu3) {
        this.proofpdu3 = proofpdu3;
    }

    public String getPdu4() {
        return pdu4;
    }

    public void setPdu4(String pdu4) {
        this.pdu4 = pdu4;
    }

    public String getProofpdu4() {
        return proofpdu4;
    }

    public void setProofpdu4(String proofpdu4) {
        this.proofpdu4 = proofpdu4;
    }

    public String getPdu5() {
        return pdu5;
    }

    public void setPdu5(String pdu5) {
        this.pdu5 = pdu5;
    }

    public String getProofpdu5() {
        return proofpdu5;
    }

    public void setProofpdu5(String proofpdu5) {
        this.proofpdu5 = proofpdu5;
    }

    public String getPdu6() {
        return pdu6;
    }

    public void setPdu6(String pdu6) {
        this.pdu6 = pdu6;
    }

    public String getProofpdu6() {
        return proofpdu6;
    }

    public void setProofpdu6(String proofpdu6) {
        this.proofpdu6 = proofpdu6;
    }

    public String getPdu7() {
        return pdu7;
    }

    public void setPdu7(String pdu7) {
        this.pdu7 = pdu7;
    }

    public String getProofpdu7() {
        return proofpdu7;
    }

    public void setProofpdu7(String proofpdu7) {
        this.proofpdu7 = proofpdu7;
    }

    public String getPdu8() {
        return pdu8;
    }

    public void setPdu8(String pdu8) {
        this.pdu8 = pdu8;
    }

    public String getProofpdu8() {
        return proofpdu8;
    }

    public void setProofpdu8(String proofpdu8) {
        this.proofpdu8 = proofpdu8;
    }

    public String getPdu9() {
        return pdu9;
    }

    public void setPdu9(String pdu9) {
        this.pdu9 = pdu9;
    }

    public String getProofpdu9() {
        return proofpdu9;
    }

    public void setProofpdu9(String proofpdu9) {
        this.proofpdu9 = proofpdu9;
    }

    public String getPdu10() {
        return pdu10;
    }

    public void setPdu10(String pdu10) {
        this.pdu10 = pdu10;
    }

    public String getProofpdu10() {
        return proofpdu10;
    }

    public void setProofpdu10(String proofpdu10) {
        this.proofpdu10 = proofpdu10;
    }

    public String getPdu11() {
        return pdu11;
    }

    public void setPdu11(String pdu11) {
        this.pdu11 = pdu11;
    }

    public String getProofpdu11() {
        return proofpdu11;
    }

    public void setProofpdu11(String proofpdu11) {
        this.proofpdu11 = proofpdu11;
    }

    public String getPdu12() {
        return pdu12;
    }

    public void setPdu12(String pdu12) {
        this.pdu12 = pdu12;
    }

    public String getProofpdu12() {
        return proofpdu12;
    }

    public void setProofpdu12(String proofpdu12) {
        this.proofpdu12 = proofpdu12;
    }

    public String getPdu13() {
        return pdu13;
    }

    public void setPdu13(String pdu13) {
        this.pdu13 = pdu13;
    }

    public String getProofpdu13() {
        return proofpdu13;
    }

    public void setProofpdu13(String proofpdu13) {
        this.proofpdu13 = proofpdu13;
    }

    public String getPdu14() {
        return pdu14;
    }

    public void setPdu14(String pdu14) {
        this.pdu14 = pdu14;
    }

    public String getProofpdu14() {
        return proofpdu14;
    }

    public void setProofpdu14(String proofpdu14) {
        this.proofpdu14 = proofpdu14;
    }

    public String getPdu15() {
        return pdu15;
    }

    public void setPdu15(String pdu15) {
        this.pdu15 = pdu15;
    }

    public String getProofpdu15() {
        return proofpdu15;
    }

    public void setProofpdu15(String proofpdu15) {
        this.proofpdu15 = proofpdu15;
    }

    public String getPdu16() {
        return pdu16;
    }

    public void setPdu16(String pdu16) {
        this.pdu16 = pdu16;
    }

    public String getProofpdu16() {
        return proofpdu16;
    }

    public void setProofpdu16(String proofpdu16) {
        this.proofpdu16 = proofpdu16;
    }

    public String getPdu17() {
        return pdu17;
    }

    public void setPdu17(String pdu17) {
        this.pdu17 = pdu17;
    }

    public String getProofpdu17() {
        return proofpdu17;
    }

    public void setProofpdu17(String proofpdu17) {
        this.proofpdu17 = proofpdu17;
    }

    public String getPdu18() {
        return pdu18;
    }

    public void setPdu18(String pdu18) {
        this.pdu18 = pdu18;
    }

    public String getProofpdu18() {
        return proofpdu18;
    }

    public void setProofpdu18(String proofpdu18) {
        this.proofpdu18 = proofpdu18;
    }

    public String getPdu19() {
        return pdu19;
    }

    public void setPdu19(String pdu19) {
        this.pdu19 = pdu19;
    }

    public String getProofpdu19() {
        return proofpdu19;
    }

    public void setProofpdu19(String proofpdu19) {
        this.proofpdu19 = proofpdu19;
    }

    public String getPdu20() {
        return pdu20;
    }

    public void setPdu20(String pdu20) {
        this.pdu20 = pdu20;
    }

    public String getProofpdu20() {
        return proofpdu20;
    }

    public void setProofpdu20(String proofpdu20) {
        this.proofpdu20 = proofpdu20;
    }

    public Date getLastupdate() {
        return lastupdate;
    }

    public void setLastupdate(Date lastupdate) {
        this.lastupdate = lastupdate;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (pduId != null ? pduId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Pdu)) {
            return false;
        }
        Pdu other = (Pdu) object;
        if ((this.pduId == null && other.pduId != null) || (this.pduId != null && !this.pduId.equals(other.pduId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.aisindo.backend.model.Pdu[ pduId=" + pduId + " ]";
    }
    
}
