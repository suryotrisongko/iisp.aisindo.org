/// <reference path="../../../typings/globals/crypto-js/index.d.ts"/>
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import * as CryptoJS from 'crypto-js';
import {Subscription} from 'rxjs';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html'
})

export class Forgotpassword implements OnInit {
  private model = {'email':'', 'newPassword':'', 'newPasswordEncrypted':''};

  isSubmitted: boolean = false;
  forgotpasswordForm: FormGroup;
  SHA512 = require("crypto-js/sha512");
  errorMessage: String = '';
  busy: Subscription;

  constructor (private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {

    if(window.confirm("Are you sure?")) {

        this.model.email = this.forgotpasswordForm.value.email;
        this.model.newPassword = Math.floor(Math.random() * 1000000).toString();
        this.model.newPasswordEncrypted = this.SHA512( this.model.newPassword ).toString();

        this.busy = this.loginService.resetPassword(this.model).subscribe(
          data => {
                    this.isSubmitted = true;
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
    this.forgotpasswordForm = this.fb.group({
      'email': [this.model.email, Validators.compose([ Validators.maxLength(255), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')] )]
    });
    this.forgotpasswordForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
                error => console.log(error));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.forgotpasswordForm) { return; }
    else {
      const form = this.forgotpasswordForm;
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
    'email': ''
  };

  validationMessages = {
    'email': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct email address is required.',
      'required': 'email is required.'
    }
  };

}
