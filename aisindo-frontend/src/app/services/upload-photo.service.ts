import {Injectable} from '@angular/core';

import {Myconfig} from '../shared/myconfig';

@Injectable()
export class UploadPhotoService {
  photoFilesToUpload: Array<File> = [];
  proofPaymentFilesToUpload: Array<File> = [];

  proofpdu1FilesToUpload: Array<File> = [];
  proofpdu2FilesToUpload: Array<File> = [];
  proofpdu3FilesToUpload: Array<File> = [];
  proofpdu4FilesToUpload: Array<File> = [];
  proofpdu5FilesToUpload: Array<File> = [];
  proofpdu6FilesToUpload: Array<File> = [];
  proofpdu7FilesToUpload: Array<File> = [];
  proofpdu8FilesToUpload: Array<File> = [];
  proofpdu9FilesToUpload: Array<File> = [];
  proofpdu10FilesToUpload: Array<File> = [];
  proofpdu11FilesToUpload: Array<File> = [];
  proofpdu12FilesToUpload: Array<File> = [];
  proofpdu13FilesToUpload: Array<File> = [];
  proofpdu14FilesToUpload: Array<File> = [];
  proofpdu15FilesToUpload: Array<File> = [];
  proofpdu16FilesToUpload: Array<File> = [];
  proofpdu17FilesToUpload: Array<File> = [];
  proofpdu18FilesToUpload: Array<File> = [];
  proofpdu19FilesToUpload: Array<File> = [];
  proofpdu20FilesToUpload: Array<File> = [];

    constructor() {
    }

    public getPhotoFileName() {
      if(this.photoFilesToUpload[0]) {
        if(this.photoFilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.photoFilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofPaymentFileName() {
      if(this.proofPaymentFilesToUpload[0]) {
        if(this.proofPaymentFilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofPaymentFilesToUpload[0].name ;
        }
      }
      return '';
    }

    public getProofpdu1FileName() {
      if(this.proofpdu1FilesToUpload[0]) {
        if(this.proofpdu1FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu1FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu2FileName() {
      if(this.proofpdu2FilesToUpload[0]) {
        if(this.proofpdu2FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu2FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu3FileName() {
      if(this.proofpdu3FilesToUpload[0]) {
        if(this.proofpdu3FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu3FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu4FileName() {
      if(this.proofpdu4FilesToUpload[0]) {
        if(this.proofpdu4FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu4FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu5FileName() {
      if(this.proofpdu5FilesToUpload[0]) {
        if(this.proofpdu5FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu5FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu6FileName() {
      if(this.proofpdu6FilesToUpload[0]) {
        if(this.proofpdu6FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu6FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu7FileName() {
      if(this.proofpdu7FilesToUpload[0]) {
        if(this.proofpdu7FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu7FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu8FileName() {
      if(this.proofpdu8FilesToUpload[0]) {
        if(this.proofpdu8FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu8FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu9FileName() {
      if(this.proofpdu9FilesToUpload[0]) {
        if(this.proofpdu9FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu9FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu10FileName() {
      if(this.proofpdu10FilesToUpload[0]) {
        if(this.proofpdu10FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu10FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu11FileName() {
      if(this.proofpdu11FilesToUpload[0]) {
        if(this.proofpdu11FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu11FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu12FileName() {
      if(this.proofpdu12FilesToUpload[0]) {
        if(this.proofpdu12FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu12FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu13FileName() {
      if(this.proofpdu13FilesToUpload[0]) {
        if(this.proofpdu13FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu13FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu14FileName() {
      if(this.proofpdu14FilesToUpload[0]) {
        if(this.proofpdu14FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu14FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu15FileName() {
      if(this.proofpdu15FilesToUpload[0]) {
        if(this.proofpdu15FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu15FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu16FileName() {
      if(this.proofpdu16FilesToUpload[0]) {
        if(this.proofpdu16FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu16FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu17FileName() {
      if(this.proofpdu17FilesToUpload[0]) {
        if(this.proofpdu17FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu17FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu18FileName() {
      if(this.proofpdu18FilesToUpload[0]) {
        if(this.proofpdu18FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu18FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu19FileName() {
      if(this.proofpdu19FilesToUpload[0]) {
        if(this.proofpdu19FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu19FilesToUpload[0].name ;
        }
      }
      return '';
    }
    public getProofpdu20FileName() {
      if(this.proofpdu20FilesToUpload[0]) {
        if(this.proofpdu20FilesToUpload[0].name != '') {
          return Myconfig.SERVICE_IMAGE_URL + localStorage.getItem("userId") + "-" + this.proofpdu20FilesToUpload[0].name ;
        }
      }
      return '';
    }

    photoFileChangeEvent(fileInput: any){
        this.photoFilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofPaymentFileChangeEvent(fileInput: any){
        this.proofPaymentFilesToUpload = <Array<File>> fileInput.target.files;
    }

    proofpdu1FileChangeEvent(fileInput: any){
    this.proofpdu1FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu2FileChangeEvent(fileInput: any){
    this.proofpdu2FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu3FileChangeEvent(fileInput: any){
    this.proofpdu3FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu4FileChangeEvent(fileInput: any){
    this.proofpdu4FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu5FileChangeEvent(fileInput: any){
    this.proofpdu5FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu6FileChangeEvent(fileInput: any){
    this.proofpdu6FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu7FileChangeEvent(fileInput: any){
    this.proofpdu7FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu8FileChangeEvent(fileInput: any){
    this.proofpdu8FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu9FileChangeEvent(fileInput: any){
    this.proofpdu9FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu10FileChangeEvent(fileInput: any){
    this.proofpdu10FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu11FileChangeEvent(fileInput: any){
    this.proofpdu11FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu12FileChangeEvent(fileInput: any){
    this.proofpdu12FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu13FileChangeEvent(fileInput: any){
    this.proofpdu13FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu14FileChangeEvent(fileInput: any){
    this.proofpdu14FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu15FileChangeEvent(fileInput: any){
    this.proofpdu15FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu16FileChangeEvent(fileInput: any){
    this.proofpdu16FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu17FileChangeEvent(fileInput: any){
    this.proofpdu17FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu18FileChangeEvent(fileInput: any){
    this.proofpdu18FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu19FileChangeEvent(fileInput: any){
    this.proofpdu19FilesToUpload = <Array<File>> fileInput.target.files;
    }
    proofpdu20FileChangeEvent(fileInput: any){
    this.proofpdu20FilesToUpload = <Array<File>> fileInput.target.files;
    }

    photoUpload() {
        this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.photoFilesToUpload).then((result) => {
            console.log("result = " + result);
        }, (error) => {
            console.error("error = " + error);
        });
    }
    proofPaymentUpload() {
        this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofPaymentFilesToUpload).then((result) => {
            console.log("result = " + result);
        }, (error) => {
            console.error("error = " + error);
        });
    }

    proofpdu1Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu1FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu2Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu2FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu3Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu3FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu4Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu4FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu5Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu5FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu6Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu6FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu7Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu7FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu8Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu8FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu9Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu9FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu10Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu10FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu11Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu11FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu12Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu12FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu13Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu13FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu14Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu14FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu15Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu15FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu16Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu16FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu17Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu17FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu18Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu18FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu19Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu19FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }
    proofpdu20Upload() {
    this.makeFileRequest(Myconfig.SERVICE_HOME_URL + "/rest/photo/upload", [], this.proofpdu20FilesToUpload).then((result) => {
    console.log("result = " + result); }, (error) => { console.error("error = " + error);});
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
              formData.append("uploads[]", files[i], localStorage.getItem("userId") + "-" + files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                      console.log("Upload successful!");
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer "+localStorage.getItem("token"));
            xhr.send(formData);
        });
    }
}
