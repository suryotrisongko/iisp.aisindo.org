/// <reference path="../../../typings/globals/crypto-js/index.d.ts"/>
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UploadPhotoService} from '../services/upload-photo.service';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import * as CryptoJS from 'crypto-js';
import {Subscription} from 'rxjs';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';

import {Myconfig} from '../shared/myconfig';
import {Specialization} from '../models/specialization';
import {SpecializationService} from '../services/specialization.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html'
})

export class EditProfile implements OnInit {
  private currentUser: User = new User();
  private submitted: boolean = false;
  private updateProfileForm: FormGroup;
  private SHA512 = require("crypto-js/sha512");
  private errorMessage: String = '';
  private busy: Subscription;
  private model = {'email':''};
  private imagePhotoUrl: String = '';
  private paymentreceiptPhotoUrl: String = '';
  private specializations: Specialization[];

  private chooseTrueFalse = [
      { value: 'true', display: 'true' },
      { value: 'false', display: 'false' }
  ];

  public genders = [
      { value: 'Female', display: 'Female' },
      { value: 'Male', display: 'Male' }
  ];

  public levelmemberships = [
      { value: '-', display: '-' },
      { value: 'Junior IS Profesional (20 PDU)', display: 'Junior IS Profesional (20 PDU)' },
      { value: 'Intermediate IS Profesional (50 PDU)', display: 'Intermediate IS Profesional (50 PDU)' },
      { value: 'Senior IS Profesional (80 PDU)', display: 'Senior IS Profesional (80 PDU)' }
  ];
  public kompartemens = [
      { value: '-', display: '-' },
      { value: 'Kompartemen Audit Sistem Informasi', display: 'Kompartemen Audit Sistem Informasi' },
      { value: 'Kompartemen Tata Kelola & Manajemen Teknologi Informasi ', display: 'Kompartemen Tata Kelola & Manajemen Teknologi Informasi ' },
      { value: 'Kompartemen Pengembangan Sistem Informasi', display: 'Kompartemen Pengembangan Sistem Informasi' },
      { value: 'Kompartemen Pengujian & Evaluasi Sistem Informasi', display: 'Kompartemen Pengujian & Evaluasi Sistem Informasi' },
      { value: 'Kompartemen Manajemen Proyek Teknologi Informasi', display: 'Kompartemen Manajemen Proyek Teknologi Informasi' }
  ];

  constructor (private router: Router, private specializationService: SpecializationService, private loginService: LoginService, private uploadPhotoService:UploadPhotoService, private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute) {

    if( !loginService.checkLogin()) {
      this.router.navigate(['/login' ]);
     }

    this.model.email = localStorage.getItem("currentEmail") ;

    this.route.params.forEach((params: Params) => {
      if(params['userEmail'] != null) {
        if( !loginService.checkAdmin()) {
          this.router.navigate(['/login' ]);
        }
        this.model.email = params['userEmail'];
      }
    });

      this.busy = this.userService.detailUserByEmail(this.model)
        .subscribe(
          data => {
            this.currentUser = JSON.parse(JSON.parse(JSON.stringify(data))._body) ;
            //console.log("this.currentUser = " + JSON.stringify(this.currentUser));
            if(this.currentUser.photo != null) {
              if (this.currentUser.photo.indexOf('http://') >= 0 ) {
                this.imagePhotoUrl = this.currentUser.photo;
              } else {
                this.imagePhotoUrl = Myconfig.SERVICE_IMAGE_URL + this.currentUser.photo;
              }
            }

            if (this.currentUser.paymentreceipt != null) {
              if (this.currentUser.paymentreceipt.indexOf('http://') >= 0 ) {
                this.paymentreceiptPhotoUrl = this.currentUser.paymentreceipt;
              } else {
                this.paymentreceiptPhotoUrl = Myconfig.SERVICE_IMAGE_URL + this.currentUser.paymentreceipt;
              }
            }

            this.errorMessage = '';

            this.specializationService.getSpecializations().subscribe(
              specializations => {
                this.specializations = JSON.parse(JSON.parse(JSON.stringify(specializations))._body);
              },
              error => console.log(error)
            );

          },
          error => {
            this.errorMessage = error;
            if(error.ok === false) {
				      this.errorMessage = 'ERROR: service might busy/unavailable, please try again. If error persist, please contact your system administrator!';
            }
            console.log(error);
            this.errorMessage = JSON.parse(JSON.parse(JSON.stringify(error))._body).message ;
          }
        );
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {

    if(window.confirm("Are you sure? Make sure all informations are complete")) {
        this.currentUser.created = new Date();

        if(this.updateProfileForm.value.name) { this.currentUser.name = this.updateProfileForm.value.name; }
        if(this.updateProfileForm.value.address) { this.currentUser.address = this.updateProfileForm.value.address; }
        if(this.updateProfileForm.value.city) { this.currentUser.city = this.updateProfileForm.value.city; }
        if(this.updateProfileForm.value.province) { this.currentUser.province = this.updateProfileForm.value.province; }
        if(this.updateProfileForm.value.postalcode) { this.currentUser.postalcode = this.updateProfileForm.value.postalcode; }
        if(this.updateProfileForm.value.phonenumber) { this.currentUser.phonenumber = this.updateProfileForm.value.phonenumber; }
        if(this.updateProfileForm.value.password) {
          this.currentUser.password = this.SHA512(this.updateProfileForm.value.password).toString();
        }

        if(this.uploadPhotoService.getPhotoFileName() != '') {
          this.uploadPhotoService.photoUpload();
          this.currentUser.photo = this.uploadPhotoService.getPhotoFileName();
        }

        if(this.updateProfileForm.value.facebook) { this.currentUser.facebook = this.updateProfileForm.value.facebook; }
        if(this.updateProfileForm.value.twitter) { this.currentUser.twitter = this.updateProfileForm.value.twitter; }
        if(this.updateProfileForm.value.linkedin) { this.currentUser.linkedin = this.updateProfileForm.value.linkedin; }
        if(this.updateProfileForm.value.personalwebsite) { this.currentUser.personalwebsite = this.updateProfileForm.value.personalwebsite; }
        if(this.updateProfileForm.value.phone) { this.currentUser.phone = this.updateProfileForm.value.phone; }
        if(this.updateProfileForm.value.fax) { this.currentUser.fax = this.updateProfileForm.value.fax; }
        if(this.updateProfileForm.value.organisation) { this.currentUser.organisation = this.updateProfileForm.value.organisation; }
        if(this.updateProfileForm.value.position) { this.currentUser.position = this.updateProfileForm.value.position; }
        if(this.updateProfileForm.value.departmentdivision) { this.currentUser.departmentdivision = this.updateProfileForm.value.departmentdivision; }
        if(this.updateProfileForm.value.organisationtype) { this.currentUser.organisationtype = this.updateProfileForm.value.organisationtype; }
        if(this.updateProfileForm.value.organisationwebsite) { this.currentUser.organisationwebsite = this.updateProfileForm.value.organisationwebsite; }
        if(this.updateProfileForm.value.primaryareas) { this.currentUser.primaryareas = this.updateProfileForm.value.primaryareas; }
        if(this.updateProfileForm.value.expertise) { this.currentUser.expertise = this.updateProfileForm.value.expertise; }
        if(this.updateProfileForm.value.specialization) { this.currentUser.specialization = this.updateProfileForm.value.specialization; }
        if(this.updateProfileForm.value.availablefor) { this.currentUser.availablefor = this.updateProfileForm.value.availablefor; }
        if(this.updateProfileForm.value.notes) { this.currentUser.notes = this.updateProfileForm.value.notes; }
        if(this.updateProfileForm.value.publications) { this.currentUser.publications = this.updateProfileForm.value.publications; }

        if(this.uploadPhotoService.getProofPaymentFileName() != '') {
          this.uploadPhotoService.proofPaymentUpload();
          this.currentUser.paymentreceipt = this.uploadPhotoService.getProofPaymentFileName();
        }
        if(this.updateProfileForm.value.email) { this.currentUser.email = this.updateProfileForm.value.email; }
        if(this.updateProfileForm.value.memberid) { this.currentUser.memberid = this.updateProfileForm.value.memberid; }
        if(this.updateProfileForm.value.active) { this.currentUser.active = this.updateProfileForm.value.active; }
        if(this.updateProfileForm.value.activemembership) { this.currentUser.activemembership = this.updateProfileForm.value.activemembership; }
        if(this.updateProfileForm.value.featuredexpert) { this.currentUser.featuredexpert = this.updateProfileForm.value.featuredexpert; }
        if(this.updateProfileForm.value.admin) { this.currentUser.admin = this.updateProfileForm.value.admin; }
        if(this.updateProfileForm.value.levelmembership) { this.currentUser.levelmembership = this.updateProfileForm.value.levelmembership; }
        if(this.updateProfileForm.value.gender) { this.currentUser.gender = this.updateProfileForm.value.gender; }
        if(this.updateProfileForm.value.kompartemen) { this.currentUser.kompartemen = this.updateProfileForm.value.kompartemen; }

        if(this.updateProfileForm.value.expirationdate) { this.currentUser.expirationdate = new Date( this.updateProfileForm.value.expirationdate ); }
        if(this.updateProfileForm.value.membersince) { this.currentUser.membersince = new Date( this.updateProfileForm.value.membersince ); }

        if(this.updateProfileForm.value.hub) { this.currentUser.hub = this.updateProfileForm.value.hub; }
        if(this.updateProfileForm.value.pendidikan) { this.currentUser.pendidikan = this.updateProfileForm.value.pendidikan; }
        if(this.updateProfileForm.value.sertifikasi) { this.currentUser.sertifikasi = this.updateProfileForm.value.sertifikasi; }
        if(this.updateProfileForm.value.practice) { this.currentUser.practice = this.updateProfileForm.value.practice; }
        if(this.updateProfileForm.value.learning) { this.currentUser.learning = this.updateProfileForm.value.learning; }
        if(this.updateProfileForm.value.reviewer) { this.currentUser.reviewer = this.updateProfileForm.value.reviewer; }

        this.busy = this.userService.updateUser(this.currentUser)
          .subscribe(
            data => {
              this.submitted = true;
              this.errorMessage = '';
            },
            error => {
              this.errorMessage = error;
              if(error.ok === false) {
				        this.errorMessage = 'ERROR: service might busy/unavailable, please try again. If error persist, please contact your system administrator!';
              }
              console.log(error);
              this.errorMessage = JSON.parse(JSON.parse(JSON.stringify(error))._body).message ;
            }
          );

    }
  }

  buildForm(): void {
    this.updateProfileForm = this.fb.group({
      'name': [this.currentUser.name, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'address': [this.currentUser.address, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'city': [this.currentUser.city, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'province': [this.currentUser.province, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'postalcode': [this.currentUser.postalcode, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'phonenumber': [this.currentUser.phonenumber, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'password': [this.currentUser.password, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'confirmPassword': [this.currentUser.password, Validators.compose([ Validators.maxLength(255), Validators.required] )],

      'facebook': [this.currentUser.facebook, Validators.maxLength(255)],
      'twitter': [this.currentUser.twitter, Validators.maxLength(255)],
      'linkedin': [this.currentUser.linkedin, Validators.maxLength(255)],
      'personalwebsite': [this.currentUser.personalwebsite, Validators.maxLength(255)],
      'phone': [this.currentUser.phone, Validators.maxLength(255)],
      'fax': [this.currentUser.fax, Validators.maxLength(255)],

      'organisation': [this.currentUser.organisation, Validators.maxLength(255)],
      'position': [this.currentUser.position, Validators.maxLength(255)],
      'departmentdivision': [this.currentUser.departmentdivision, Validators.maxLength(255)],
      'organisationtype': [this.currentUser.organisationtype, Validators.maxLength(255)],
      'organisationwebsite': [this.currentUser.organisationwebsite, Validators.maxLength(255)],

      'primaryareas': [this.currentUser.primaryareas, Validators.maxLength(255)],
      'expertise': [this.currentUser.expertise, Validators.maxLength(255)],
      'specialization': [this.currentUser.specialization, Validators.maxLength(255)],
      'availablefor': [this.currentUser.availablefor, Validators.maxLength(255)],
      'notes': [this.currentUser.notes, Validators.maxLength(255)],
      'publications': [this.currentUser.publications, Validators.maxLength(65535)],

      'email': [this.currentUser.email, Validators.compose([ Validators.maxLength(255), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')] )],
      'memberid': [this.currentUser.memberid, Validators.maxLength(255)],
      'expirationdate': [this.currentUser.expirationdate, Validators.compose([Validators.maxLength(255), Validators.pattern('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')] )],
      'membersince': [this.currentUser.membersince, Validators.compose([Validators.maxLength(255), Validators.pattern('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')] )],

      'active': [this.currentUser.active],
      'activemembership': [this.currentUser.activemembership],
      'featuredexpert': [this.currentUser.featuredexpert],
      'admin': [this.currentUser.admin],
      'levelmembership': [this.currentUser.levelmembership],
      'gender': [this.currentUser.gender],
      'kompartemen': [this.currentUser.kompartemen],

      'hub': [this.currentUser.hub, Validators.maxLength(255)],
      'pendidikan': [this.currentUser.pendidikan, Validators.maxLength(255)],
      'sertifikasi': [this.currentUser.sertifikasi, Validators.maxLength(255)],
      'practice': [this.currentUser.practice, Validators.maxLength(65535)],
      'learning': [this.currentUser.learning, Validators.maxLength(65535)],
      'reviewer': [this.currentUser.reviewer]

    });
    this.updateProfileForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
                error => console.log(error));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.updateProfileForm) { return; }
    else {
      const form = this.updateProfileForm;
      for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }

    }
  }

  formErrors = {
    'name': '',
    'address': '',
    'city': '',
    'province': '',
    'postalcode': '',
    'phonenumber': '',
    'password': '',
    'confirmPassword': '',

    'facebook': '',
    'twitter': '',
    'linkedin': '',
    'personalwebsite': '',
    'phone': '',
    'fax': '',

    'organisation': '',
    'position': '',
    'departmentdivision': '',
    'organisationtype': '',
    'organisationwebsite': '',

    'primaryareas': '',
    'expertise': '',
    'specialization': '',
    'availablefor': '',
    'notes': '',
    'publications': '',

    'email': '',
    'memberid': '',
    'expirationdate': '',
    'membersince': '',

    'hub': '',
    'pendidikan': '',
    'sertifikasi': '',
    'practice': '',
    'learning': ''
  };

  validationMessages = {
    'name': {
      'maxlength': 'max 255 characters.',
      'required': 'name is required.'
    },
    'address': {
      'maxlength': 'max 255 characters.',
      'required': 'address is required.'
    },
    'city': {
      'maxlength': 'max 255 characters.',
      'required': 'city is required.'
    },
    'province': {
      'maxlength': 'max 255 characters.',
      'required': 'province is required.'
    },
    'postalcode': {
      'maxlength': 'max 255 characters.',
      'required': 'postalcode is required.'
    },
    'phonenumber': {
      'maxlength': 'max 255 characters.',
      'required': 'phonenumber is required.'
    },
    'password': {
      'maxlength': 'max 255 characters.',
      'required': 'password is required.'
    },
    'confirmPassword': {
      'maxlength': 'max 255 characters.',
      'required': 'password confirmation is required.',
      'validateEqual': 'password confirmation is not match'
    },

    'facebook': { 'maxlength': 'max 255 characters.' },
    'twitter': { 'maxlength': 'max 255 characters.' },
    'linkedin': { 'maxlength': 'max 255 characters.' },
    'personalwebsite': { 'maxlength': 'max 255 characters.' },
    'phone': { 'maxlength': 'max 255 characters.' },
    'fax': { 'maxlength': 'max 255 characters.' },

    'organisation': { 'maxlength': 'max 255 characters.' },
    'position': { 'maxlength': 'max 255 characters.' },
    'departmentdivision': { 'maxlength': 'max 255 characters.' },
    'organisationtype': { 'maxlength': 'max 255 characters.' },
    'organisationwebsite': { 'maxlength': 'max 255 characters.' },

    'primaryareas': { 'maxlength': 'max 255 characters.' },
    'expertise': { 'maxlength': 'max 255 characters.' },
    'specialization': { 'maxlength': 'max 255 characters.' },
    'availablefor': { 'maxlength': 'max 255 characters.' },
    'notes': { 'maxlength': 'max 255 characters.' },
    'publications': { 'maxlength': 'max 65535 characters.' },

    'memberid': { 'maxlength': 'max 65535 characters.' },
    'email': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct email address is required.',
      'required': 'email is required.'
    },
    'expirationdate': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct date format is required.',
      'required': 'expirationdate is required.'
    },
    'membersince': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct date format is required.',
      'required': 'membersince is required.'
    },

    'hub': { 'maxlength': 'max 255 characters.' },
    'pendidikan': { 'maxlength': 'max 255 characters.' },
    'sertifikasi': { 'maxlength': 'max 255 characters.' },
    'practice': { 'maxlength': 'max 65535 characters.' },
    'learning': { 'maxlength': 'max 65535 characters.' }

  };

}
