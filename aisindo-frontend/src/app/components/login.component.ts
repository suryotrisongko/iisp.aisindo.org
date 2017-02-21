/// <reference path="../../../typings/globals/crypto-js/index.d.ts"/>
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import * as CryptoJS from 'crypto-js';
import {Subscription} from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class Login implements OnInit {
  private model = {'email':'', 'password':''};
  private currentEmail: string = localStorage.getItem("currentEmail") ;

  loginForm: FormGroup;
  SHA512 = require("crypto-js/sha512");
  errorMessage: String = '';
  busy: Subscription;

  private tmpresult: String = '';

  constructor (private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    this.model.email = this.loginForm.value.email;
    this.model.password = this.SHA512(this.loginForm.value.password).toString();

    this.busy = this.loginService.sendCredential(this.model).subscribe(
      data => {
                this.tmpresult = JSON.parse(JSON.stringify(data))._body ;
                //console.log("tmpresult = " + this.tmpresult);
                localStorage.setItem("activemembership", this.tmpresult.split(';',5)[2] );
                localStorage.setItem("userId", this.tmpresult.split(';',5)[1] );
                localStorage.setItem("token", this.tmpresult.split(';',5)[0] );
                localStorage.setItem("admin", this.tmpresult.split(';',5)[3] );
                localStorage.setItem("reviewer", this.tmpresult.split(';',5)[4] );

                this.busy = this.loginService.sendToken(localStorage.getItem("token")).subscribe(
                  data => {
                            this.currentEmail=this.model.email;
                            localStorage.setItem("currentEmail", this.model.email);
                          },
                  error => {
                    this.errorMessage = error;
                    if(error.ok === false) {
						this.errorMessage = 'ERROR: wrong email/password OR service busy/unavailable, please try again. If error persist, please contact your system administrator!';
                    }
                    console.log(error);
                     this.errorMessage = JSON.parse(JSON.parse(JSON.stringify(error))._body).message ;
                  }
                );
              },
        error => {
          this.errorMessage = error;
          if(error.ok === false) {
				this.errorMessage = 'ERROR: wrong email/password OR service busy/unavailable, please try again. If error persist, please contact your system administrator!';
           }
          console.log(error);
          this.errorMessage = JSON.parse(JSON.parse(JSON.stringify(error))._body).message ;
        }
    );
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      'email': [this.model.email, Validators.compose([ Validators.maxLength(255), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')] )],
      'password': [this.model.password, Validators.compose([ Validators.maxLength(255), Validators.required] )]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
                error => console.log(error));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.loginForm) { return; }
    else {
      const form = this.loginForm;
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
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct email address is required.',
      'required': 'email is required.'
    },
    'password': {
      'maxlength': 'max 255 characters.',
      'required': 'password is required.'
    }
  };

}
