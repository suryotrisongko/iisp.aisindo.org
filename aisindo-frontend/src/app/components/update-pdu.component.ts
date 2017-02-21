import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UploadPhotoService} from '../services/upload-photo.service';
import {Subscription} from 'rxjs';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';

import {Myconfig} from '../shared/myconfig';
import {Pdu} from '../models/pdu';
import {PduService} from '../services/pdu.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'update-pdu',
  templateUrl: './update-pdu.component.html'
})

export class UpdatePdu implements OnInit {
  private currentPdu: Pdu = new Pdu();
  private submitted: boolean = false;
  private updatePduForm: FormGroup;
  private errorMessage: String = '';
  private busy: Subscription;
  private model = {'email':''};
  private imageProofPdu1Url: String = '';
  private imageProofPdu2Url: String = '';
  private imageProofPdu3Url: String = '';
  private imageProofPdu4Url: String = '';
  private imageProofPdu5Url: String = '';
  private imageProofPdu6Url: String = '';
  private imageProofPdu7Url: String = '';
  private imageProofPdu8Url: String = '';
  private imageProofPdu9Url: String = '';
  private imageProofPdu10Url: String = '';
  private imageProofPdu11Url: String = '';
  private imageProofPdu12Url: String = '';
  private imageProofPdu13Url: String = '';
  private imageProofPdu14Url: String = '';
  private imageProofPdu15Url: String = '';
  private imageProofPdu16Url: String = '';
  private imageProofPdu17Url: String = '';
  private imageProofPdu18Url: String = '';
  private imageProofPdu19Url: String = '';
  private imageProofPdu20Url: String = '';

  public statuss = [
      { value: 'Submitted, waiting review', display: 'Submitted, waiting review' },
      { value: 'Approved: Junior IS Profesional (20 PDU)', display: 'Approved: Junior IS Profesional (20 PDU)' },
      { value: 'Approved: Intermediate IS Profesional (50 PDU)', display: 'Approved: Intermediate IS Profesional (50 PDU)' },
      { value: 'Approved: Senior IS Profesional (80 PDU)', display: 'Approved: Senior IS Profesional (80 PDU)' }
  ];

  constructor (private router: Router, private loginService: LoginService, private uploadPhotoService:UploadPhotoService, private pduService: PduService, private fb: FormBuilder, private route: ActivatedRoute) {

    if( !loginService.checkLogin() || !loginService.checkActiveMember() ) {
      this.router.navigate(['/login' ]);
    }

    this.model.email = localStorage.getItem("currentEmail") ;

    this.route.params.forEach((params: Params) => {
      if(params['userEmail'] != null) {
        if( loginService.checkAdmin() || loginService.checkReviewer()) {
          this.model.email = params['userEmail'];
        } else {
          this.router.navigate(['/login' ]);
        }
      }
    });

      this.currentPdu.email = this.model.email ;

      this.busy = this.pduService.detailPduByEmail(this.model)
        .subscribe(
          data => {
            this.currentPdu = JSON.parse(JSON.parse(JSON.stringify(data))._body) ;

            if (this.currentPdu.proofpdu1) { if (this.currentPdu.proofpdu1.indexOf('http://') >= 0 ) { this.imageProofPdu1Url = this.currentPdu.proofpdu1; } else { this.imageProofPdu1Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu1; } }
            if (this.currentPdu.proofpdu2) { if (this.currentPdu.proofpdu2.indexOf('http://') >= 0 ) { this.imageProofPdu2Url = this.currentPdu.proofpdu2; } else { this.imageProofPdu2Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu2; } }
            if (this.currentPdu.proofpdu3) { if (this.currentPdu.proofpdu3.indexOf('http://') >= 0 ) { this.imageProofPdu3Url = this.currentPdu.proofpdu3; } else { this.imageProofPdu3Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu3; } }
            if (this.currentPdu.proofpdu4) { if (this.currentPdu.proofpdu4.indexOf('http://') >= 0 ) { this.imageProofPdu4Url = this.currentPdu.proofpdu4; } else { this.imageProofPdu4Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu4; } }
            if (this.currentPdu.proofpdu5) { if (this.currentPdu.proofpdu5.indexOf('http://') >= 0 ) { this.imageProofPdu5Url = this.currentPdu.proofpdu5; } else { this.imageProofPdu5Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu5; } }
            if (this.currentPdu.proofpdu6) { if (this.currentPdu.proofpdu6.indexOf('http://') >= 0 ) { this.imageProofPdu6Url = this.currentPdu.proofpdu6; } else { this.imageProofPdu6Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu6; } }
            if (this.currentPdu.proofpdu7) { if (this.currentPdu.proofpdu7.indexOf('http://') >= 0 ) { this.imageProofPdu7Url = this.currentPdu.proofpdu7; } else { this.imageProofPdu7Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu7; } }
            if (this.currentPdu.proofpdu8) { if (this.currentPdu.proofpdu8.indexOf('http://') >= 0 ) { this.imageProofPdu8Url = this.currentPdu.proofpdu8; } else { this.imageProofPdu8Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu8; } }
            if (this.currentPdu.proofpdu9) { if (this.currentPdu.proofpdu9.indexOf('http://') >= 0 ) { this.imageProofPdu9Url = this.currentPdu.proofpdu9; } else { this.imageProofPdu9Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu9; } }
            if (this.currentPdu.proofpdu10) { if (this.currentPdu.proofpdu10.indexOf('http://') >= 0 ) { this.imageProofPdu10Url = this.currentPdu.proofpdu10; } else { this.imageProofPdu10Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu10; } }
            if (this.currentPdu.proofpdu11) { if (this.currentPdu.proofpdu11.indexOf('http://') >= 0 ) { this.imageProofPdu11Url = this.currentPdu.proofpdu11; } else { this.imageProofPdu11Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu11; } }
            if (this.currentPdu.proofpdu12) { if (this.currentPdu.proofpdu12.indexOf('http://') >= 0 ) { this.imageProofPdu12Url = this.currentPdu.proofpdu12; } else { this.imageProofPdu12Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu12; } }
            if (this.currentPdu.proofpdu13) { if (this.currentPdu.proofpdu13.indexOf('http://') >= 0 ) { this.imageProofPdu13Url = this.currentPdu.proofpdu13; } else { this.imageProofPdu13Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu13; } }
            if (this.currentPdu.proofpdu14) { if (this.currentPdu.proofpdu14.indexOf('http://') >= 0 ) { this.imageProofPdu14Url = this.currentPdu.proofpdu14; } else { this.imageProofPdu14Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu14; } }
            if (this.currentPdu.proofpdu15) { if (this.currentPdu.proofpdu15.indexOf('http://') >= 0 ) { this.imageProofPdu15Url = this.currentPdu.proofpdu15; } else { this.imageProofPdu15Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu15; } }
            if (this.currentPdu.proofpdu16) { if (this.currentPdu.proofpdu16.indexOf('http://') >= 0 ) { this.imageProofPdu16Url = this.currentPdu.proofpdu16; } else { this.imageProofPdu16Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu16; } }
            if (this.currentPdu.proofpdu17) { if (this.currentPdu.proofpdu17.indexOf('http://') >= 0 ) { this.imageProofPdu17Url = this.currentPdu.proofpdu17; } else { this.imageProofPdu17Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu17; } }
            if (this.currentPdu.proofpdu18) { if (this.currentPdu.proofpdu18.indexOf('http://') >= 0 ) { this.imageProofPdu18Url = this.currentPdu.proofpdu18; } else { this.imageProofPdu18Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu18; } }
            if (this.currentPdu.proofpdu19) { if (this.currentPdu.proofpdu19.indexOf('http://') >= 0 ) { this.imageProofPdu19Url = this.currentPdu.proofpdu19; } else { this.imageProofPdu19Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu19; } }
            if (this.currentPdu.proofpdu20) { if (this.currentPdu.proofpdu20.indexOf('http://') >= 0 ) { this.imageProofPdu20Url = this.currentPdu.proofpdu20; } else { this.imageProofPdu20Url = Myconfig.SERVICE_IMAGE_URL + this.currentPdu.proofpdu20; } }

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

    if(window.confirm("Are you sure? Make sure all informations are complete")) {

        this.currentPdu.lastupdate = new Date();
        this.currentPdu.status = 'Submitted, waiting review';

        if(this.updatePduForm.value.email) { this.currentPdu.email = this.updatePduForm.value.email; }
        if(this.updatePduForm.value.notes) { this.currentPdu.notes = this.updatePduForm.value.notes; }
        if(this.updatePduForm.value.status) { this.currentPdu.status = this.updatePduForm.value.status; }

        if(this.updatePduForm.value.pdu1) { this.currentPdu.pdu1 = this.updatePduForm.value.pdu1; }
        if(this.updatePduForm.value.pdu2) { this.currentPdu.pdu2 = this.updatePduForm.value.pdu2; }
        if(this.updatePduForm.value.pdu3) { this.currentPdu.pdu3 = this.updatePduForm.value.pdu3; }
        if(this.updatePduForm.value.pdu4) { this.currentPdu.pdu4 = this.updatePduForm.value.pdu4; }
        if(this.updatePduForm.value.pdu5) { this.currentPdu.pdu5 = this.updatePduForm.value.pdu5; }
        if(this.updatePduForm.value.pdu6) { this.currentPdu.pdu6 = this.updatePduForm.value.pdu6; }
        if(this.updatePduForm.value.pdu7) { this.currentPdu.pdu7 = this.updatePduForm.value.pdu7; }
        if(this.updatePduForm.value.pdu8) { this.currentPdu.pdu8 = this.updatePduForm.value.pdu8; }
        if(this.updatePduForm.value.pdu9) { this.currentPdu.pdu9 = this.updatePduForm.value.pdu9; }
        if(this.updatePduForm.value.pdu10) { this.currentPdu.pdu10 = this.updatePduForm.value.pdu10; }
        if(this.updatePduForm.value.pdu11) { this.currentPdu.pdu11 = this.updatePduForm.value.pdu11; }
        if(this.updatePduForm.value.pdu12) { this.currentPdu.pdu12 = this.updatePduForm.value.pdu12; }
        if(this.updatePduForm.value.pdu13) { this.currentPdu.pdu13 = this.updatePduForm.value.pdu13; }
        if(this.updatePduForm.value.pdu14) { this.currentPdu.pdu14 = this.updatePduForm.value.pdu14; }
        if(this.updatePduForm.value.pdu15) { this.currentPdu.pdu15 = this.updatePduForm.value.pdu15; }
        if(this.updatePduForm.value.pdu16) { this.currentPdu.pdu16 = this.updatePduForm.value.pdu16; }
        if(this.updatePduForm.value.pdu17) { this.currentPdu.pdu17 = this.updatePduForm.value.pdu17; }
        if(this.updatePduForm.value.pdu18) { this.currentPdu.pdu18 = this.updatePduForm.value.pdu18; }
        if(this.updatePduForm.value.pdu19) { this.currentPdu.pdu19 = this.updatePduForm.value.pdu19; }
        if(this.updatePduForm.value.pdu20) { this.currentPdu.pdu20 = this.updatePduForm.value.pdu20; }

        if(this.uploadPhotoService.getProofpdu1FileName() != '') {
          this.uploadPhotoService.proofpdu1Upload();
          this.currentPdu.proofpdu1 = this.uploadPhotoService.getProofpdu1FileName();
        }
        if(this.uploadPhotoService.getProofpdu2FileName() != '') {
          this.uploadPhotoService.proofpdu2Upload();
          this.currentPdu.proofpdu2 = this.uploadPhotoService.getProofpdu2FileName();
        }
        if(this.uploadPhotoService.getProofpdu3FileName() != '') {
          this.uploadPhotoService.proofpdu3Upload();
          this.currentPdu.proofpdu3 = this.uploadPhotoService.getProofpdu3FileName();
        }
        if(this.uploadPhotoService.getProofpdu4FileName() != '') {
          this.uploadPhotoService.proofpdu4Upload();
          this.currentPdu.proofpdu4 = this.uploadPhotoService.getProofpdu4FileName();
        }
        if(this.uploadPhotoService.getProofpdu5FileName() != '') {
          this.uploadPhotoService.proofpdu5Upload();
          this.currentPdu.proofpdu5 = this.uploadPhotoService.getProofpdu5FileName();
        }
        if(this.uploadPhotoService.getProofpdu6FileName() != '') {
          this.uploadPhotoService.proofpdu6Upload();
          this.currentPdu.proofpdu6 = this.uploadPhotoService.getProofpdu6FileName();
        }
        if(this.uploadPhotoService.getProofpdu7FileName() != '') {
          this.uploadPhotoService.proofpdu7Upload();
          this.currentPdu.proofpdu7 = this.uploadPhotoService.getProofpdu7FileName();
        }
        if(this.uploadPhotoService.getProofpdu8FileName() != '') {
          this.uploadPhotoService.proofpdu8Upload();
          this.currentPdu.proofpdu8 = this.uploadPhotoService.getProofpdu8FileName();
        }
        if(this.uploadPhotoService.getProofpdu9FileName() != '') {
          this.uploadPhotoService.proofpdu9Upload();
          this.currentPdu.proofpdu9 = this.uploadPhotoService.getProofpdu9FileName();
        }
        if(this.uploadPhotoService.getProofpdu10FileName() != '') {
          this.uploadPhotoService.proofpdu10Upload();
          this.currentPdu.proofpdu10 = this.uploadPhotoService.getProofpdu10FileName();
        }
        if(this.uploadPhotoService.getProofpdu11FileName() != '') {
          this.uploadPhotoService.proofpdu11Upload();
          this.currentPdu.proofpdu11 = this.uploadPhotoService.getProofpdu11FileName();
        }
        if(this.uploadPhotoService.getProofpdu12FileName() != '') {
          this.uploadPhotoService.proofpdu12Upload();
          this.currentPdu.proofpdu12 = this.uploadPhotoService.getProofpdu12FileName();
        }
        if(this.uploadPhotoService.getProofpdu13FileName() != '') {
          this.uploadPhotoService.proofpdu13Upload();
          this.currentPdu.proofpdu13 = this.uploadPhotoService.getProofpdu13FileName();
        }
        if(this.uploadPhotoService.getProofpdu14FileName() != '') {
          this.uploadPhotoService.proofpdu14Upload();
          this.currentPdu.proofpdu14 = this.uploadPhotoService.getProofpdu14FileName();
        }
        if(this.uploadPhotoService.getProofpdu15FileName() != '') {
          this.uploadPhotoService.proofpdu15Upload();
          this.currentPdu.proofpdu15 = this.uploadPhotoService.getProofpdu15FileName();
        }
        if(this.uploadPhotoService.getProofpdu16FileName() != '') {
          this.uploadPhotoService.proofpdu16Upload();
          this.currentPdu.proofpdu16 = this.uploadPhotoService.getProofpdu16FileName();
        }
        if(this.uploadPhotoService.getProofpdu17FileName() != '') {
          this.uploadPhotoService.proofpdu17Upload();
          this.currentPdu.proofpdu17 = this.uploadPhotoService.getProofpdu17FileName();
        }
        if(this.uploadPhotoService.getProofpdu18FileName() != '') {
          this.uploadPhotoService.proofpdu18Upload();
          this.currentPdu.proofpdu18 = this.uploadPhotoService.getProofpdu18FileName();
        }
        if(this.uploadPhotoService.getProofpdu19FileName() != '') {
          this.uploadPhotoService.proofpdu19Upload();
          this.currentPdu.proofpdu19 = this.uploadPhotoService.getProofpdu19FileName();
        }
        if(this.uploadPhotoService.getProofpdu20FileName() != '') {
          this.uploadPhotoService.proofpdu20Upload();
          this.currentPdu.proofpdu20 = this.uploadPhotoService.getProofpdu20FileName();
        }

        //console.log("this.currentPdu = " + JSON.stringify(this.currentPdu));

        this.busy = this.pduService.updatePdu(this.currentPdu)
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
    this.updatePduForm = this.fb.group({
      'email': [this.currentPdu.email, Validators.compose([ Validators.maxLength(255), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')] )],

      'notes': [this.currentPdu.notes, Validators.compose([ Validators.maxLength(255), Validators.required] )],
      'status': [this.currentPdu.status, Validators.compose([ Validators.maxLength(255), Validators.required] )],

      'pdu1': [this.currentPdu.pdu1],
      'proofpdu1': [this.currentPdu.proofpdu1],
      'pdu2': [this.currentPdu.pdu2],
      'proofpdu2': [this.currentPdu.proofpdu2],
      'pdu3': [this.currentPdu.pdu3],
      'proofpdu3': [this.currentPdu.proofpdu3],
      'pdu4': [this.currentPdu.pdu4],
      'proofpdu4': [this.currentPdu.proofpdu4],
      'pdu5': [this.currentPdu.pdu5],
      'proofpdu5': [this.currentPdu.proofpdu5],
      'pdu6': [this.currentPdu.pdu6],
      'proofpdu6': [this.currentPdu.proofpdu6],
      'pdu7': [this.currentPdu.pdu7],
      'proofpdu7': [this.currentPdu.proofpdu7],
      'pdu8': [this.currentPdu.pdu8],
      'proofpdu8': [this.currentPdu.proofpdu8],
      'pdu9': [this.currentPdu.pdu9],
      'proofpdu9': [this.currentPdu.proofpdu9],
      'pdu10': [this.currentPdu.pdu10],
      'proofpdu10': [this.currentPdu.proofpdu10],
      'pdu11': [this.currentPdu.pdu11],
      'proofpdu11': [this.currentPdu.proofpdu11],
      'pdu12': [this.currentPdu.pdu12],
      'proofpdu12': [this.currentPdu.proofpdu12],
      'pdu13': [this.currentPdu.pdu13],
      'proofpdu13': [this.currentPdu.proofpdu13],
      'pdu14': [this.currentPdu.pdu14],
      'proofpdu14': [this.currentPdu.proofpdu14],
      'pdu15': [this.currentPdu.pdu15],
      'proofpdu15': [this.currentPdu.proofpdu15],
      'pdu16': [this.currentPdu.pdu16],
      'proofpdu16': [this.currentPdu.proofpdu16],
      'pdu17': [this.currentPdu.pdu17],
      'proofpdu17': [this.currentPdu.proofpdu17],
      'pdu18': [this.currentPdu.pdu18],
      'proofpdu18': [this.currentPdu.proofpdu18],
      'pdu19': [this.currentPdu.pdu19],
      'proofpdu19': [this.currentPdu.proofpdu19],
      'pdu20': [this.currentPdu.pdu20],
      'proofpdu20': [this.currentPdu.proofpdu20]

    });
    this.updatePduForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
                error => console.log(error));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.updatePduForm) { return; }
    else {
      const form = this.updatePduForm;
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
    'notes': '',
    'status': ''
  };

  validationMessages = {
    'email': {
      'maxlength': 'max 255 characters.',
      'pattern': 'valid/correct email address is required.',
      'required': 'email is required.'
    },
    'notes': {
      'maxlength': 'max 255 characters.',
      'required': 'notes is required.'
    },
    'status': {
      'maxlength': 'max 255 characters.',
      'required': 'status is required.'
    }

  };

}
