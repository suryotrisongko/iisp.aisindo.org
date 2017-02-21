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
@Table(name = "expert")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Expert.findSearch", 
            query = "SELECT e FROM Expert e WHERE "
                    + "( e.name LIKE ?1 OR e.organisation LIKE ?1 OR e.levelmembership LIKE ?1 )"                    
                    + " AND ( e.primaryareas LIKE ?2 OR e.expertise LIKE ?2 OR e.specialization LIKE ?2 OR e.pendidikan LIKE ?2 OR e.learning LIKE ?2 OR e.sertifikasi LIKE ?2 OR e.practice LIKE ?2 ) "
                    + " AND ( e.city LIKE ?3 OR e.province LIKE ?3 OR e.kompartemen LIKE ?3 OR e.hub LIKE ?3 ) ")
    })
public class Expert implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "user_id")
    private long userId;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "name")
    private String name;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "email")
    private String email;
    @Size(max = 255)
    @Column(name = "memberid")
    private String memberid;
    @Size(max = 255)
    @Column(name = "address")
    private String address;
    @Size(max = 255)
    @Column(name = "city")
    private String city;
    @Size(max = 255)
    @Column(name = "province")
    private String province;
    @Size(max = 255)
    @Column(name = "postalcode")
    private String postalcode;
    @Size(max = 255)
    @Column(name = "phonenumber")
    private String phonenumber;
    @Size(max = 255)
    @Column(name = "gender")
    private String gender;
    @Size(max = 255)
    @Column(name = "photo")
    private String photo;
    @Column(name = "membersince")
    @Temporal(TemporalType.TIMESTAMP)
    private Date membersince;
    @Column(name = "expirationdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date expirationdate;
    @Column(name = "featuredexpert")
    private Boolean featuredexpert;
    @Size(max = 255)
    @Column(name = "organisation")
    private String organisation;
    @Size(max = 255)
    @Column(name = "position")
    private String position;
    @Size(max = 255)
    @Column(name = "departmentdivision")
    private String departmentdivision;
    @Size(max = 255)
    @Column(name = "organisationtype")
    private String organisationtype;
    @Size(max = 255)
    @Column(name = "organisationwebsite")
    private String organisationwebsite;
    @Size(max = 255)
    @Column(name = "primaryareas")
    private String primaryareas;
    @Size(max = 255)
    @Column(name = "expertise")
    private String expertise;
    @Size(max = 255)
    @Column(name = "specialization")
    private String specialization;
    @Size(max = 255)
    @Column(name = "availablefor")
    private String availablefor;
    @Lob
    @Size(max = 65535)
    @Column(name = "publications")
    private String publications;
    @Size(max = 255)
    @Column(name = "notes")
    private String notes;
    @Size(max = 255)
    @Column(name = "facebook")
    private String facebook;
    @Size(max = 255)
    @Column(name = "twitter")
    private String twitter;
    @Size(max = 255)
    @Column(name = "linkedin")
    private String linkedin;
    @Size(max = 255)
    @Column(name = "personalwebsite")
    private String personalwebsite;
    // @Pattern(regexp="^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$", message="Invalid phone/fax format, should be as xxx-xxx-xxxx")//if the field contains phone or fax number consider using this annotation to enforce field validation
    @Size(max = 255)
    @Column(name = "phone")
    private String phone;
    // @Pattern(regexp="^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$", message="Invalid phone/fax format, should be as xxx-xxx-xxxx")//if the field contains phone or fax number consider using this annotation to enforce field validation
    @Size(max = 255)
    @Column(name = "fax")
    private String fax;

    @Size(max = 255)
    @Column(name = "levelmembership")
    private String levelmembership;
    @Size(max = 255)
    @Column(name = "kompartemen")
    private String kompartemen;
    @Column(name = "hub")
    private String hub;
    @Size(max = 255)
    @Column(name = "pendidikan")
    private String pendidikan;
    @Size(max = 255)
    @Column(name = "sertifikasi")
    private String sertifikasi;
    
    @Lob
    @Size(max = 65535)
    @Column(name = "practice")
    private String practice;
    @Lob
    @Size(max = 65535)
    @Column(name = "learning")
    private String learning;

    public Expert() {
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMemberid() {
        return memberid;
    }

    public void setMemberid(String memberid) {
        this.memberid = memberid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Date getMembersince() {
        return membersince;
    }

    public void setMembersince(Date membersince) {
        this.membersince = membersince;
    }

    public Date getExpirationdate() {
        return expirationdate;
    }

    public void setExpirationdate(Date expirationdate) {
        this.expirationdate = expirationdate;
    }

    public Boolean getFeaturedexpert() {
        return featuredexpert;
    }

    public void setFeaturedexpert(Boolean featuredexpert) {
        this.featuredexpert = featuredexpert;
    }

    public String getOrganisation() {
        return organisation;
    }

    public void setOrganisation(String organisation) {
        this.organisation = organisation;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartmentdivision() {
        return departmentdivision;
    }

    public void setDepartmentdivision(String departmentdivision) {
        this.departmentdivision = departmentdivision;
    }

    public String getOrganisationtype() {
        return organisationtype;
    }

    public void setOrganisationtype(String organisationtype) {
        this.organisationtype = organisationtype;
    }

    public String getOrganisationwebsite() {
        return organisationwebsite;
    }

    public void setOrganisationwebsite(String organisationwebsite) {
        this.organisationwebsite = organisationwebsite;
    }

    public String getPrimaryareas() {
        return primaryareas;
    }

    public void setPrimaryareas(String primaryareas) {
        this.primaryareas = primaryareas;
    }

    public String getExpertise() {
        return expertise;
    }

    public void setExpertise(String expertise) {
        this.expertise = expertise;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getAvailablefor() {
        return availablefor;
    }

    public void setAvailablefor(String availablefor) {
        this.availablefor = availablefor;
    }

    public String getPublications() {
        return publications;
    }

    public void setPublications(String publications) {
        this.publications = publications;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getPersonalwebsite() {
        return personalwebsite;
    }

    public void setPersonalwebsite(String personalwebsite) {
        this.personalwebsite = personalwebsite;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getLevelmembership() {
        return levelmembership;
    }

    public void setLevelmembership(String levelmembership) {
        this.levelmembership = levelmembership;
    }

    public String getKompartemen() {
        return kompartemen;
    }

    public void setKompartemen(String kompartemen) {
        this.kompartemen = kompartemen;
    }

    public String getHub() {
        return hub;
    }

    public void setHub(String hub) {
        this.hub = hub;
    }

    public String getPendidikan() {
        return pendidikan;
    }

    public void setPendidikan(String pendidikan) {
        this.pendidikan = pendidikan;
    }

    public String getSertifikasi() {
        return sertifikasi;
    }

    public void setSertifikasi(String sertifikasi) {
        this.sertifikasi = sertifikasi;
    }

    public String getPractice() {
        return practice;
    }

    public void setPractice(String practice) {
        this.practice = practice;
    }

    public String getLearning() {
        return learning;
    }

    public void setLearning(String learning) {
        this.learning = learning;
    }
    
}
