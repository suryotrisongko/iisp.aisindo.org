import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Myconfig} from '../shared/myconfig';

@Injectable()
export class LoginService {
  token: string;

  constructor (private http: Http) {}

  //ok
  sendCredential(model) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/user/login";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  //ok
  resetPassword(model) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/user/resetpassword";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  //ok
  sendToken(token) {
    let tokenUrl2 = Myconfig.SERVICE_HOME_URL + "/rest/user/users";
    let getHeaders = new Headers({'Authorization':'Bearer '+token});
    return this.http.get(tokenUrl2, {headers: getHeaders});
  }

  //ok
  logout() {
    localStorage.setItem("token","");
    localStorage.setItem("currentEmail", '');
    localStorage.setItem("userId", '');
    localStorage.setItem("activemembership", '');
    localStorage.setItem("admin", '');
    localStorage.setItem("reviewer", '');
    localStorage.removeItem("token");
    localStorage.removeItem("currentEmail");
    localStorage.removeItem("userId");
    localStorage.removeItem("activemembership");
    localStorage.removeItem("admin");
    localStorage.removeItem("reviewer");

    alert("You just logged out.");
  }

  //ok
  checkLogin() {
    if (localStorage.getItem("currentEmail") == null || localStorage.getItem("token") == null || localStorage.getItem("userId") == null) {
      return false;
    } else if (localStorage.getItem("currentEmail")!='' && localStorage.getItem("token")!='' && localStorage.getItem("userId")!='') {
      return true;
    } else {
      return false;
    }
  }

  //ok
  checkActiveMember() {
    if (localStorage.getItem("activemembership") == 'true') {
      return true;
    } else {
      return false;
    }
  }

  //ok
  checkAdmin() {
    if (localStorage.getItem("admin") == 'true') {
      return true;
    } else {
      return false;
    }
  }

  //ok
  checkReviewer() {
    if (localStorage.getItem("reviewer") == 'true') {
      return true;
    } else {
      return false;
    }
  }

}
