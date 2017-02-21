import {Pdu} from '../models/pdu';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Myconfig} from '../shared/myconfig';

@Injectable()
export class PduService {

  constructor (private http: Http) {}

  //ok
  detailPduByEmail(model) {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/pdu/detailbyemail";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  allPdu() {
    let tokenUrl1 = Myconfig.SERVICE_HOME_URL + "/rest/pdu/all";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.get(tokenUrl1, {headers: headers1});
  }

//ok
  updatePdu(pdu: Pdu) {
    let tokenUrl1 =Myconfig.SERVICE_HOME_URL + "/rest/pdu/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(pdu), {headers: headers1});
  }
}
