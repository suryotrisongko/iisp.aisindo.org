import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {User} from '../models/user';
import {Expert} from '../models/expert';

import {Myconfig} from '../shared/myconfig';


@Injectable()
export class ExpertService {

  constructor (private http:Http){}

  getExperts() {
    let url = Myconfig.SERVICE_HOME_URL + "/expert/all"; //ok
    return this.http.get(url);
  }

  getFeaturedxperts() {
    let url = Myconfig.SERVICE_HOME_URL + "/expert/featured"; //ok
    return this.http.get(url);
  }

  getExpertByUserId (id: number) {
    let url = Myconfig.SERVICE_HOME_URL + "/expert/detail?userId="+id; //ok
    return this.http.get(url);
  }

  getExpertByKeywordExpertiseLocation (keyword: string, expertise: string, location: string) {
    let url = Myconfig.SERVICE_HOME_URL + "/expert/search?keyword="+keyword+"&expertise="+expertise+"&location="+location; //ok
    return this.http.get(url);
  }

  getExpertByUser (user: User) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/expert/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  updateExpert(expert: Expert) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/expert/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(expert), {headers: headers1});
  }

  addExpert(expert:Expert) {
    let url = Myconfig.SERVICE_HOME_URL + "/rest/expert/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
    return this.http.post(url, JSON.stringify(expert), {headers: headers1});
  }

  // todo = DELETE

}
