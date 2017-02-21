/// <reference path="../../../typings/globals/crypto-js/index.d.ts"/>
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import * as CryptoJS from 'crypto-js';
import {Subscription} from 'rxjs';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class Register implements OnInit {
  newUser: User = new User();
  registered: boolean = false;
  registrationForm: FormGroup;
  SHA512 = require("crypto-js/sha512");
  errorMessage: String = '';
  busy: Subscription;

  constructor (private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {

    if(window.confirm("Are you sure?")) {

        this.newUser = this.registrationForm.value;
        this.newUser.active = false;
        this.newUser.activationcode = Math.floor(Math.random() * 1000000);
        this.newUser.password = this.SHA512(this.registrationForm.value.password).toString();
        this.newUser.created = new Date();

        this.busy = this.userService.registerUser(this.newUser)
          .subscribe(
            data => {
              this.registered = true;
              this.newUser = new User();
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
      'name': [this.newUser.name, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'email': [this.newUser.email, Validators.compose([ Validators.maxLength(255), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')] )],
      'password': [this.newUser.password, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'confirmPassword': [this.newUser.password, Validators.compose([ Validators.maxLength(255), Validators.required] )]
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
    'email': '',
    'password': '',
    'confirmPassword': ''
  };

  validationMessages = {
    'name': {
      'maxlength': 'max 255 characters.',
      'required': 'name is required.'
    },
    'email': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct email address is required.',
      'required': 'email is required.'
    },
    'password': {
      'maxlength': 'max 255 characters.',
      'required': 'password is required.'
    },
    'confirmPassword': {
      'maxlength': 'max 255 characters.',
      'required': 'password confirmation is required.',
      'validateEqual': 'password confirmation is not match'
    }
  };

}
