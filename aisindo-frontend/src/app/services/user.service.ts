import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Myconfig} from '../shared/myconfig';

@Injectable()
export class UserService {

  constructor (private http: Http) {}

  //ok
  detailUserByEmail(model) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/user/detailbyemail";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  //ok
  registerUser(user: User) {
    let url = Myconfig.SERVICE_HOME_URL + "/user/register";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers1});
  }

  allUser() {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/user/all";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.get(tokenUrl1, {headers: headers1});
  }

//ok
  updateUser(user: User) {
    let tokenUrl1 =Myconfig.SERVICE_HOME_URL + "/rest/user/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  searchUser(name: String) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/user/search?name=" + name;
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.get(tokenUrl1, {headers: headers1});
  }
}
