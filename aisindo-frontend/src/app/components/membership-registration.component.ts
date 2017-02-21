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

@Component({
  selector: 'membership-registration',
  templateUrl: './membership-registration.component.html'
})

export class MembershipRegistration implements OnInit {
  private currentUser: User = new User();
  private registered: boolean = false;
  private registrationForm: FormGroup;
  private SHA512 = require("crypto-js/sha512");
  private errorMessage: String = '';
  private busy: Subscription;
  private model = {'email':''};

  public genders = [
      { value: 'Female', display: 'Female' },
      { value: 'Male', display: 'Male' }
  ];

  constructor (private router: Router, private loginService: LoginService, private uploadPhotoService:UploadPhotoService, private userService: UserService, private fb: FormBuilder) {

      if( !loginService.checkLogin() || loginService.checkActiveMember()) {
        this.router.navigate(['/login' ]);
      }

      this.model.email = localStorage.getItem("currentEmail") ;

      this.busy = this.userService.detailUserByEmail(this.model)
        .subscribe(
          data => {
            this.currentUser = JSON.parse(JSON.parse(JSON.stringify(data))._body);
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

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {

    if(window.confirm("Are you sure? Make sure all informations are complete (including close-up photo & proof of payment)")) {

        this.currentUser.name = this.registrationForm.value.name;
        this.currentUser.address = this.registrationForm.value.address;
        this.currentUser.city = this.registrationForm.value.city;
        this.currentUser.province = this.registrationForm.value.province;
        this.currentUser.postalcode = this.registrationForm.value.postalcode;
        this.currentUser.phonenumber = this.registrationForm.value.phonenumber;
        this.currentUser.gender = this.registrationForm.value.gender;
        this.currentUser.membersince = new Date();
        this.currentUser.activemembership = false;

        this.uploadPhotoService.photoUpload();
        this.uploadPhotoService.proofPaymentUpload();
        this.currentUser.photo = this.uploadPhotoService.getPhotoFileName();
        this.currentUser.paymentreceipt = this.uploadPhotoService.getProofPaymentFileName();
        //console.log("this.currentUser = " + this.currentUser);

        this.busy = this.userService.updateUser(this.currentUser)
          .subscribe(
            data => {
              this.registered = true;
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
    this.registrationForm = this.fb.group({
      'name': [this.currentUser.name, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'address': [this.currentUser.address, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'city': [this.currentUser.city, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'province': [this.currentUser.province, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'postalcode': [this.currentUser.postalcode, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'phonenumber': [this.currentUser.phonenumber, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'gender': [this.currentUser.gender, Validators.compose([ Validators.maxLength(255), Validators.required] )]
    });
    this.registrationForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
                error => console.log(error));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.registrationForm) { return; }
    else {
      const form = this.registrationForm;
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
    'gender': ''
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
    'gender': {
      'maxlength': 'max 255 characters.',
      'required': 'gender is required.'
    }
  };

}
